FROM node:16.14.2 as angular
<<<<<<< HEAD
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app/
RUN npm install --force
COPY . /app/ 
RUN npm run build --prod

FROM nginx:alpine
COPY --from=angular /app/dist/angular /usr/share/nginx/html
=======
WORKDIR /home/charlesmar/projeto/angular
COPY package.json .
RUN apt-get update && apt-get install nodejs -y
RUN apt-get install npm -y
RUN npm install -force
RUN npm i -g @angular/cli
COPY . .
EXPOSE 4200
ENTRYPOINT ng serve


>>>>>>> 82aab7438d89bc1479cac07aa0dc6a82e7196a1b
