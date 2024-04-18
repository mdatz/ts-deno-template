FROM denoland/deno:1.42.4 AS build

WORKDIR /app

COPY . .

EXPOSE 2077

RUN deno run --allow-net --allow-read --allow-env main.ts
