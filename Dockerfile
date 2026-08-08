FROM oven/bun:1.3.14-debian AS base
WORKDIR /app
COPY package.json bun.lock ./

FROM base AS dev
RUN bun install
COPY . .
EXPOSE 3000
CMD ["bun", "run", "dev"]

FROM base AS build
RUN bun install --frozen-lockfile
COPY . .
RUN bunx prisma generate
RUN bun run build

FROM oven/bun:1.3.14-slim AS prod
WORKDIR /app
COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
EXPOSE 3000
CMD ["bun", "server.js"]
