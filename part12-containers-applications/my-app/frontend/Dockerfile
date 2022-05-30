FROM node:16

WORKDIR /usr/src/app/frontend

COPY . .

RUN npm ci

RUN npm run build:deploy