###################
# DEPENDENCIES
###################

FROM node:16-alpine As dependencies

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN apk add --update --no-cache \
    make \
    g++ \
    jpeg-dev \
    cairo-dev \
    giflib-dev \
    pango-dev \
    libtool \
    autoconf \
    automake

RUN npm install

USER node

###################
# BUILD
###################

FROM node:16-alpine As build

WORKDIR /usr/src/app

COPY --chown=node:node --from=dependencies /usr/src/app/node_modules ./node_modules
COPY --chown=node:node package*.json ./

COPY --chown=node:node src ./src
COPY --chown=node:node public ./public
COPY --chown=node:node tsconfig.json ./tsconfig.json

RUN apk add --update --no-cache \
    make \
    g++ \
    jpeg-dev \
    cairo-dev \
    giflib-dev \
    pango-dev \
    libtool \
    autoconf \
    automake

RUN npm run build
RUN npm install --omit=dev

USER node

###################
# PRODUCTION
###################

FROM node:16-alpine As production

WORKDIR /usr/src/app

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/build ./build
COPY --chown=node:node server.js ./server.js

RUN apk add --no-cache bash

CMD ["node", "server.js"]