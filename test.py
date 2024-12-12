from pyspark.sql import SparkSession
from pyspark.ml.feature import VectorAssembler
from pyspark.ml.regression import LinearRegression
from pyspark.ml.evaluation import RegressionEvaluator

spark = SparkSession.builder.appName("Linear Regression").getOrCreate()
df = spark.read.csv("preprocessed_datasets/factorized_data.csv", sep = ',', header=True)

from pyspark.sql.types import IntegerType, DoubleType
from pyspark.sql.functions import col

df = df.withColumn("model_year", col("model_year").cast(IntegerType())) \
               .withColumn("milage", col("milage").cast(DoubleType())) \
               .withColumn("engine_capacity", col("engine_capacity").cast(DoubleType())) \
               .withColumn("engine_horsepower", col("engine_horsepower").cast(DoubleType())) \
               .withColumn("brand_numeric", col("brand_numeric").cast(IntegerType())) \
               .withColumn("transmission_numeric", col("transmission_numeric").cast(IntegerType())) \
               .withColumn("fuel_type_numeric", col("fuel_type_numeric").cast(IntegerType())) \
               .withColumn("ext_col_numeric", col("ext_col_numeric").cast(IntegerType())) \
               .withColumn("int_col_numeric", col("int_col_numeric").cast(IntegerType())) \
               .withColumn("accident_numeric", col("accident_numeric").cast(IntegerType())) \
                .withColumn("price", col("price").cast(IntegerType()))

feature_columns = ["model_year", "milage", "engine_capacity", "engine_horsepower",
                   "brand_numeric", "transmission_numeric",
                   "fuel_type_numeric", "ext_col_numeric",
                   "int_col_numeric", "accident_numeric"]

assembler = VectorAssembler(inputCols=feature_columns, outputCol="features")

df_vectorized = assembler.transform(df)

final_data = df_vectorized.select("features", "price")

train_data, test_data = final_data.randomSplit([0.8, 0.2], seed=42)

# Initialize the model
lr = LinearRegression(featuresCol="features", labelCol="price")

# Train the model
lr_model = lr.fit(train_data)

# Make predictions
predictions = lr_model.transform(test_data)

# Show predictions
predictions.select("features", "price", "prediction").show()

evaluator = RegressionEvaluator(labelCol="price", predictionCol="prediction", metricName="rmse")
rmse = evaluator.evaluate(predictions)
print(f"Root Mean Squared Error (RMSE): {rmse}")

lr_model.save(r"prediction_models\LR")




