FROM node:10 AS build-env
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:10
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production

COPY --from=build-env /usr/src/app/build ./build

EXPOSE 8080
CMD [ "npm", "run", "dev", "-p", "8080" ]

