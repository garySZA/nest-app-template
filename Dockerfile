#* Intall dependencies
FROM node:20.10.0-alpine3.18 AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

#* Build the app with cache dependecies
FROM node:20.10.0-alpine3.18 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules dest./node_modules
COPY . .
RUN yarn build

#* Production image
FROM node:20.10.0-alpine3.18 AS runner
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --production 
COPY --from=builder /app/dist ./dist
COPY ./public ./public

CMD ["node", "dist/main"]