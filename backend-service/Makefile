include .env

migrate-create:
	migrate create -ext=sql -dir=./db/migrations -seq init

migrate-up:
	docker container run --rm --name db-dev-migration -v ./db/migrations:/migrations --network swarm-orchestra-101-dev migrate/migrate:v4.17.1 -path=/migrations -database "${POSTGRES_SOURCE}" -verbose up

migrate-down:
	docker container run --rm --name db-dev-migration -v ./db/migrations:/migrations --network swarm-orchestra-101-dev migrate/migrate:v4.17.1 -path=/migrations -database "${POSTGRES_SOURCE}" -verbose down 1

.PHONY: migrate-create migrate-up migrate-down