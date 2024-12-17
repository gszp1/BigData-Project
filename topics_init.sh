#!/bin/bash

/opt/bitnami/kafka/bin/kafka-topics.sh --create --if-not-exists --topic input --bootstrap-server kafka:9092 --partitions 1 --replication-factor 1
/opt/bitnami/kafka/bin/kafka-topics.sh --create --if-not-exists --topic output --bootstrap-server kafka:9092 --partitions 1 --replication-factor 1
