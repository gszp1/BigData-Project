#!/bin/bash

docker compose down

docker image rm bigdata-project-zookeeper
docker image rm bigdata-project-kafka
docker image rm bigdata-project-middleware

docker compose up
