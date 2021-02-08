FROM node:14

WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json

RUN yarn

COPY . .

EXPOSE 3000


CMD [ "yarn", "dev" ]
