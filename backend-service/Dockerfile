ARG ALPINE_VERSION=3.19

FROM golang:1.22.4-alpine${ALPINE_VERSION}

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

CMD [ "go", "run", "server.go" ]
