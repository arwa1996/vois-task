FROM node:14.18
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . /app
CMD yarn run start