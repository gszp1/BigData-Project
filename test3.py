from pyspark.sql import SparkSession
from pyspark.sql.types import StructType, StructField, StringType, IntegerType
from pyspark.ml import feature, classification, evaluation, Pipeline

if __name__ == "__main__":
    # Define log structure
    schema = StructType([
        StructField("lettr", StringType(), True),
        StructField("x-box", IntegerType(), True),
        StructField("y-box", IntegerType(), True),
        StructField("width", IntegerType(), True),
        StructField("high", IntegerType(), True),
        StructField("onpix", IntegerType(), True),
        StructField("x-bar", IntegerType(), True),
        StructField("y-bar", IntegerType(), True),
        StructField("x2bar", IntegerType(), True),
        StructField("y2bar", IntegerType(), True),
        StructField("xybar", IntegerType(), True),
        StructField("x2ybr", IntegerType(), True),
        StructField("xy2br", IntegerType(), True),
        StructField("x-ege", IntegerType(), True),
        StructField("xegvy", IntegerType(), True),
        StructField("y-ege", IntegerType(), True),
        StructField("yegvx", IntegerType(), True),
    ])

    spark = SparkSession.builder.appName("letter-recognition-ml").getOrCreate()

    # Load data
    df = spark.read.csv("letter-recognition.data", header=False, schema=schema)
    df.createOrReplaceTempView("df")

    print(df.show(5))

    df_train, df_eval = df.randomSplit([0.7, 0.3], 42)
    idx = feature.StringIndexer(inputCol="lettr", outputCol="label")
    idx_t = idx.fit(df_train)
    df_train_ = idx_t.transform(df_train)

    print(df_train_)

    vect = feature.VectorAssembler(inputCols=df.columns[1:], outputCol="feat")
    df_train_ = vect.transform(df_train_)
    df_train_ = df_train_.select("label", "feat")
    scaler = feature.StandardScaler(inputCol="feat", outputCol="features")
    scaler_t = scaler.fit(df_train_)
    df_train_ = scaler_t.transform(df_train_)

    print("3",df_train_)

    # Classification with random forest
    forest = classification.RandomForestClassifier(maxDepth=8, minInstancesPerNode=5, seed=42)
    forest_t = forest.fit(df_train_)
    pred_train = forest_t.transform(df_train_)

    print("2",pred_train)

    # Model evaluation
    evaluator = evaluation.MulticlassClassificationEvaluator(metricName="accuracy")
    df_eval_ = idx_t.transform(df_eval)
    df_eval_ = vect.transform(df_eval_)
    df_eval_ = df_eval_.select("label", "feat")
    df_eval_ = scaler_t.transform(df_eval_)
    pred_eval = forest_t.transform(df_eval_)

    print("1",pred_eval)

    idx_p = feature.StringIndexer(inputCol="lettr", outputCol="label")
    print("a")
    vect_p = feature.VectorAssembler(inputCols=df.columns[1:], outputCol="feat")
    print("b")
    scaler_p = feature.StandardScaler(inputCol="feat", outputCol="features")
    print("c")
    forest_p = classification.RandomForestClassifier(maxDepth=8, minInstancesPerNode=5, seed=42)
    print("d")
    idx_p_t = idx_p.fit(df_train)
    print("e")
    idx_p_t.write().overwrite().save("indexer-model")
    print("f")
    pipe = Pipeline(stages=[idx_p, vect_p, scaler_p, forest_p])
    print("g")
    pipe_t = pipe.fit(df_train)
    print("h")
    pipe_t.transform(df_eval).drop(*df.columns[1:])
    #pipe_t.write().overwrite().save("model")

    print(pipe_t)
