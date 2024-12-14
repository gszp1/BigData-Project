#!/bin.bash

# Builds docker image from local Dockerfile and sets image name to "frontend-image"
docker build -t frontend-image .

# Creates and runs container with name "frontend" from frontend-image 
# in detached mode and container-host port mapping to 9090
docker run --name frontend -d -p 9090:9090 frontend-image