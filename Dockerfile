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
VOLUME /var/cache/nginx
COPY --from=angular /usr/share/nginx/html
COPY .config/nginx.conf /etc/nginx/conf.d/default.conf