FROM bitnami/kafka:latest

ENV   KAFKA_BROKER_ID=1 \
      KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181 \
      KAFKA_LISTENERS=PLAINTEXT://:9092 \
      KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092 \
      ALLOW_PLAINTEXT_LISTENER=yes

RUN mkdir /setup_scripts

COPY ./scripts /setup_scripts

EXPOSE 9092

ENTRYPOINT ["/setup_scripts/topics.sh"]

CMD [ "/opt/bitnami/scripts/kafka/run.sh" ]
