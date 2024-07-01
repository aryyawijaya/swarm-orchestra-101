FROM node:22.3.0-alpine3.19

ENV PORT=5173

WORKDIR /app

COPY package*.json .

RUN npm i \
    && npm cache clean --force

COPY . .

EXPOSE ${PORT}

CMD [ "npm", "run", "dev" ]
