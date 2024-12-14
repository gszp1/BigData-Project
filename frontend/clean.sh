#!/bin/bash

# Stop frontend container
docker stop frontend

# Removes frontend-image image
docker image rm frontend-image

# Removes frontend container
docker rm frontend