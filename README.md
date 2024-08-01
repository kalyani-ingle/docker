# RunCode

This is base repository for RunCode workspace.

You can clone any git repositories or use your own by selecting one at the time of creating workspace.

[![](https://runcode-app-public.s3.amazonaws.com/images/dark_btn.png)](https://runcode.io)

# docker 

## create a dockerfile
touch Dockerfile

## build the docker image added tag/name to the app
docker build -t my-nodejs-app:v1 .

## check if the image is added to docker 
docker images


## run with volume mounting, port mapping and name

### port mapping to define host port and container port
docker run -p 3000:8080 my-nodejs-app:v1

### renamed the container
docker run -d -p3000:8080 --name nodeApp my-nodejs-app:v1
docker start nodeApp

## to see running containers
docker ps

## to see all running and stopped both containers
docker ps -a

## to start the nodeApp
docker start nodeApp

## to stop the nodeApp container
docker stop nodeApp

## to enter the docker container
docker exec -it nodeApp /bin/bash

## to view contents of the index.html file
docker exec nodeApp cat /usr/src/app/index.html


## alternatvely, pull and image from docker hub 
docker pull mongo or docker pull redis

