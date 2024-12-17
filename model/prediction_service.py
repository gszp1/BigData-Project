from pyspark.sql import SparkSession
import os
from pyspark.sql.functions import col, from_json, to_json, struct
from pyspark.sql.types import StructType, StructField, StringType, IntegerType, DoubleType, DecimalType
from pyspark.ml.regression import RandomForestRegressionModel
from pyspark.ml.feature import VectorAssembler

if __name__ == "__main__":
    
    #### Config ####
    
    # Environmental variables
    broker_host = os.environ.get(key="PS_BROKER_HOST", default="localhost")
    broker_port = os.environ.get(key="PS_BROKER_PORT", default=9093)
    kafka_input_topic = os.environ.get(key="PS_KAFKA_INPUT_TOPIC", default="input")
    kafka_output_topic = os.environ.get(key="PS_KAFKA_OUTPUT_TOPIC", default="output")
    model_path = os.environ.get(key="PS_MODEL_PATH", default="./prediction_models/RF_best")

    # Create spark session
    spark = SparkSession.builder \
        .appName("CAR_WORTHY_MODEL_SIMULATION") \
        .config("spark.jars.packages", "org.apache.spark:spark-sql-kafka-0-10_2.12:3.5.3") \
        .getOrCreate()
        
    # Define kafka consumer settings
    kafka_consumer_options = {
        "kafka.bootstrap.servers": f"{broker_host}:{broker_port}",
        "startingOffsets": "latest",
        "subscribe": kafka_input_topic,
        "failOnDataLoss": "false"
    }
    
    # Define kafka producer settings
    kafka_producer_options = {
        "kafka.bootstrap.servers": f"{broker_host}:{broker_port}",
        "topic": kafka_output_topic,
        "checkpointLocation": "/tmp/spark-checkpoints-carworthy"
    }
    
    # Define schema
    schema = StructType([
        StructField("tag", StringType(), True),
        StructField("model_year", IntegerType(), True),
        StructField("milage", DoubleType(), True),
        StructField("engine_capacity", DoubleType(), True),
        StructField("engine_horsepower", DoubleType(), True),
        StructField("brand_numeric", IntegerType(), True),
        StructField("transmission_numeric", IntegerType(), True),
        StructField("fuel_type_numeric", IntegerType(), True),
        StructField("ext_col_numeric", IntegerType(), True),
        StructField("int_col_numeric", IntegerType(), True),
        StructField("accident_numeric", IntegerType(), True)
    ])
    
    # Define output schema
    output_schema = StructType([
        StructField("tag", StringType(), True),
        StructField("price", DecimalType(), True)
    ])
    
    # Load model
    model = RandomForestRegressionModel.load(model_path)
    
    #### Script functionality ####
    
    ## Read Data ##
    
    # Subscribe to input topic
    df = spark \
        .readStream \
        .format("kafka") \
        .options(**kafka_consumer_options) \
        .load()
    
    # Transform with schema
    tdf = df.select(
        from_json(col("value").cast("string"), schema).alias("data")    
    ).select("data.*")
    
    # Get dataframe with only tag
    tag_frame = tdf.select("tag")
    
    # Assemble features into a single vector column
    feature_columns = ["model_year", "milage", "engine_capacity", "engine_horsepower", 
                "brand_numeric", "transmission_numeric", 
                "fuel_type_numeric", "ext_col_numeric", 
                "int_col_numeric", "accident_numeric"]
    assembler = VectorAssembler(inputCols=feature_columns, outputCol="features")
    vectorized_data_frame = assembler.transform(tdf)
    
    # Get result of prediction model for data_frame
    prediction_result = model.transform(vectorized_data_frame)
    
    # Create data frame with tag and price
    parsed_df = prediction_result.select("tag", col("prediction").alias("price"))
    
    # Create output data_frame
    output_df = parsed_df.select(to_json(struct(col("tag"), col("price"))).alias("value"))
    
    ## Save Data ##
    
    # Write key-value data to output topic
    ds = output_df \
        .selectExpr("CAST(value AS STRING) as value") \
        .writeStream \
        .format("kafka") \
        .options(**kafka_producer_options) \
        .start()
    
    ds.awaitTermination()