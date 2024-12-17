FROM ubuntu:24.04

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