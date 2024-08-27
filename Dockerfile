FROM node:22.6.0-alpine3.20 as build-stage
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app
RUN corepack enable
COPY .npmrc.production /app/.npmrc
COPY package.json tsconfig.json pnpm-lock.yaml nitro.config.ts ./
RUN --mount=type=cache,mode=0755,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile
COPY . .
CMD pnpm dev
