ARG ALPINE_VERSION=3.19

FROM node:22.3.0-alpine${ALPINE_VERSION}

ARG PORT=5173
ENV PORT=${PORT}

WORKDIR /app

COPY package*.json .

RUN npm i \
    && npm cache clean --force

COPY . .

EXPOSE ${PORT}

CMD [ "npm", "run", "dev" ]
