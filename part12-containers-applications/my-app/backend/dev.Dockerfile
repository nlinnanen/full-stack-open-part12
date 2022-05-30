FROM node:16
  
WORKDIR /usr/src/app/backend

COPY --chown=node:node . .

RUN npm install

ENV DEBUG=backend:*
  
USER node

CMD npm start 