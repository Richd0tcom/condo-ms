FROM node:22-slim AS development

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y procps openssl

COPY package.json ./
COPY pnpm-lock.yaml ./
COPY tsconfig.json ./
COPY nest-cli.json ./

# Install pnpm and dependencies
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm add -D prisma

# Copy application code
COPY apps/auth apps/auth
COPY libs libs
COPY prisma prisma
COPY prisma.config.ts ./

# Install prisma and generate client

RUN npx prisma generate