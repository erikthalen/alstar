FROM node:24.11.1-alpine

WORKDIR /app

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@10 --activate

# Copy workspace config
COPY pnpm-workspace.yaml ./
COPY pnpm-lock.yaml ./
COPY package.json ./

# Copy all workspace packages
COPY packages ./packages

# Install only docs + its deps
RUN pnpm install --frozen-lockfile --filter @repo/docs...

# Move into docs package
WORKDIR /app/packages/docs

ENV NODE_ENV=production
EXPOSE 3000

CMD ["pnpm", "run", "start"]
