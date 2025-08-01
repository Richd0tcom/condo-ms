FROM node:slim AS development

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y procps

COPY package.json ./
COPY pnpm-lock.yaml ./
COPY tsconfig.json tsconfig.json
COPY nest-cli.json nest-cli.json

RUN npm install -g pnpm

COPY apps/notification apps/notification
COPY libs libs