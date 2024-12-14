from ensurepip import bootstrap
from kafka import KafkaProducer
from pyspark.sql import SparkSession, Row
from pyspark.sql.functions import col, from_json, to_json, struct, rand
from pyspark.sql.types import StructType, StructField, StringType, IntegerType, DecimalType
from pyspark.ml import PipelineModel
from pyspark.ml.feature import IndexToString, StringIndexerModel

if __name__ == "__main__":
    
    #### Config ####
    
    # Connection variables
    broker_host = "localhost"
    broker_port = 9093
    kafka_input_topic = "input"
    kafka_output_topic = "output"
    
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
        StructField("brand_numeric", IntegerType(), True),
        StructField("model_year", IntegerType(), True),
        StructField("milage", DecimalType(10, 2), True),
        StructField("fuel_type_numeric", IntegerType(), True),
        StructField("engine_capacity", DecimalType(10, 2), True),
        StructField("engine_horsepower", DecimalType(10, 2), True),
        StructField("transmission_numeric", IntegerType(), True),
        StructField("ext_col_numeric", IntegerType(), True),
        StructField("int_col_numeric", IntegerType(), True),
        StructField("accident_numeric", IntegerType(), True)
    ])
    
    output_schema = StructType([
        StructField("tag", StringType(), True),
        StructField("price", DecimalType(), True)
    ])
    
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
    
    # Get dataframe with all fields excluding tag
    data_frame = tdf.drop("tag")
    
    parsed_df = tag_frame.withColumn("price", (rand() * (100000 - 1000) + 1000))
    output_df = parsed_df.select(to_json(struct(col("tag"), col("price"))).alias("value"))
    ## Save Data ##
    
    # Write tag value to console
    tag_frame_sink = tag_frame \
        .writeStream \
        .outputMode("append") \
        .format("console") \
        .start()
    
    # Write data frame to console
    data_frame_sink = data_frame \
        .writeStream \
        .outputMode("append") \
        .format("console") \
        .start()
        
    # Write key-value data to output topic
    ds = output_df \
        .selectExpr("CAST(value AS STRING) as value") \
        .writeStream \
        .format("kafka") \
        .options(**kafka_producer_options) \
        .start()
    
    tag_frame_sink.awaitTermination()
    data_frame_sink.awaitTermination()
    ds.awaitTermination()