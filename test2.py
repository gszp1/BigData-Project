import sys
import platform

# Print detailed environment information
print("Python Version:", sys.version)
print("Python Executable:", sys.executable)
print("Platform:", platform.platform())

# Add these imports
import os
import warnings

# Suppress warnings
warnings.filterwarnings('ignore')

# Set environment variables
os.environ['PYSPARK_PYTHON'] = sys.executable
os.environ['PYSPARK_DRIVER_PYTHON'] = sys.executable

from pyspark.sql import SparkSession

# More robust configuration
spark = SparkSession.builder \
    .appName("Debugging Spark") \
    .master("local[1]") \
    .config("spark.driver.host", "127.0.0.1") \
    .config("spark.ui.port", 4040) \
    .config("spark.python.worker.memory", "1g") \
    .getOrCreate()

# Explicitly set log level
spark.sparkContext.setLogLevel("ERROR")

try:
    data = [("a", 1), ("b", 2), ("c", 3)]
    df = spark.createDataFrame(data, ["col1", "col2"])
    df.show()
    df.write.mode("overwrite").csv("test_output")
except Exception as e:
    print(f"Error occurred: {e}")
    import traceback
    traceback.print_exc()
finally:
    spark.stop()