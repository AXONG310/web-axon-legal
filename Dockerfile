# Fase de construcción
FROM oven/bun:latest AS builder
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install
COPY . .
RUN bun run build

# Fase de ejecución
FROM oven/bun:latest
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.ts ./server.ts
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/bun.lock ./bun.lock

RUN bun install --production

ENV PORT=8080
EXPOSE 8080

CMD ["bun", "run", "server.ts"]