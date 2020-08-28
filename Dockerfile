FROM node:12.14.0-alpine3.11

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN yarn

COPY . /app

CMD ["yarn", "start"]