migrate-create:
	migrate create -ext=sql -dir=./db/migrations -seq init

migrate-up:
	docker container run --name db-migration -v ./db/migrations:/migrations --network ${DOCKER_NETWORK} aryyadocker/swarm-orchestra-101-db-migrate:1.0 -path=/migrations -database "${POSTGRES_SOURCE}" -verbose up

migrate-down:
	docker container run --name db-migration -v ./db/migrations:/migrations --network ${DOCKER_NETWORK} aryyadocker/swarm-orchestra-101-db-migrate:1.0 -path=/migrations -database "${POSTGRES_SOURCE}" -verbose down 1

.PHONY: migrate-create migrate-up migrate-down
