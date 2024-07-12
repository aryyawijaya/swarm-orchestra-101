FROM migrate/migrate:v4.17.1

ARG POSTGRES_HOST
ARG POSTGRES_PORT
ENV POSTGRES_HOST=${POSTGRES_HOST}
ENV POSTGRES_PORT=${POSTGRES_PORT}

WORKDIR /app

RUN wget https://github.com/eficode/wait-for/releases/download/v2.2.4/wait-for && \
    chmod +x wait-for

COPY entrypoint.sh .

ENTRYPOINT [ "/app/entrypoint.sh" ]
