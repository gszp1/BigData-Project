FROM ubuntu:24.04

ENV PS_BROKER_HOST=localhost
ENV PS_BROKER_PORT=9093
ENV PS_KAFKA_INPUT_TOPIC="input"
ENV PS_KAFKA_OUTPUT_TOPIC="output"
ENV PS_MODEL_PATH ="RF_best"

RUN mkdir /app

WORKDIR /app

RUN apt-get update && apt-get upgrade -y && \
    apt-get install python3-pip && \
    rm -rf /var/lib/apt/lists/*

COPY ./prediction_models/RF_best .

COPY prediction_service.py .

COPY requirements.txt .
    
RUN pip3 install --no-cache-dir -r requirements.txt

CMD ["python3", "prediction_service.py"]