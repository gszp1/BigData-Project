#!/bin/bash

# Builds docker image from local Dockerfile and sets image name to "frontend-image"
docker build -t frontend-image .

# Creates and runs container with name "frontend" from frontend-image 
# in detached mode and container-host port mapping to 9091
docker run --name frontend -d -p 9091:9091 frontend-image