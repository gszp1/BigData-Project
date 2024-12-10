#!/bin/bash

kafka-topics.sh --create --if-not-exists \
  --topic input \
  --bootstrap-server localhost:9092 \
  --partitions 1 \
  --replication-factor 1

kafka-topics.sh --create --if-not-exists \
  --topic output \
  --bootstrap-server localhost:9092 \
  --partitions 1 \
  --replication-factor 1