FROM node:16.14.2 as angular
WORKDIR /home/charlesmar/projeto/angular
COPY package.json .
RUN apt-get update && apt-get install nodejs -y
RUN apt-get install npm -y
RUN npm install -force
RUN npm i -g @angular/cli
COPY . . 
ENTRYPOINT ng serve

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY dist/ .