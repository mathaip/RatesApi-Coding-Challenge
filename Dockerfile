FROM node:current

COPY package.json .


RUN npm install

EXPOSE 3000


CMD [ "node", "server.js" ]

COPY . .


