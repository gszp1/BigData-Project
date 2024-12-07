#!/bin/bash

docker stop middleware

docker rm middleware

docker image rm car-worthy-middleware

docker build -t car-worthy-middleware .

docker run --name middleware -d -p 9090:9090 car-worthy-middleware
