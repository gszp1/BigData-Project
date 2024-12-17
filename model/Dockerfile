FROM ubuntu:24.04

ENV PS_BROKER_HOST=kafka
ENV PS_BROKER_PORT=9092
ENV PS_KAFKA_INPUT_TOPIC=input
ENV PS_KAFKA_OUTPUT_TOPIC=output
ENV PS_MODEL_PATH=RF_best

RUN mkdir /app

WORKDIR /app

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y python3-pip python3-venv openjdk-17-jre-headless && \
    rm -rf /var/lib/apt/lists/*

ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64

COPY ./prediction_models/RF_best ./RF_best

COPY prediction_service.py .

COPY requirements.txt .

RUN python3 -m venv /app/venv

ENV PATH="/app/venv/bin:${PATH}"

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 9095

CMD ["python3", "prediction_service.py"]