FROM node:16.14.2 as angular
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app/
RUN npm install --force
COPY . /app/ 
RUN npm run build --prod

FROM nginx:alpine
COPY --from=angular /app/dist/cine-bootcamp /usr/share/nginx/html