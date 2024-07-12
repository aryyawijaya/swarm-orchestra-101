# swarm-orchestra-101
Project that set up ready to launch Docker Swarm orchestration

Also this project provides:
- Best practice Dockerfile
- Production grade docker compose file
- Visualizer Docker Swarm nodes

Maybe later will add:
- Secret in Docker Swarm
- Overriding docker compose file

## VM IP mapping
| IP Address      | Hostname VM                  | Role in Docker Swarm    |
| --------------- | ---------------------------- | ----------------------- |
| 192.168.1.20/24 | swarm-orchestra-101-node1    | Manager                 |
| 192.168.1.21/24 | swarm-orchestra-101-node2    | Worker                  |
| 192.168.1.22/24 | swarm-orchestra-101-node3    | Worker                  |

## Run ansible to set up static IP VM
At ansible folder, run this command:
```bash
ansible-playbook -i <current_ip_vm>, set-static-ip.yaml -K -e "ip=<desired_static_ip>" -e "gateway=<gateway>" -e "hostname=<hostname_vm>"
```

## Run ansible to set up configuration VM (docker & docker swarm)
At ansible folder, run this command:
```bash
ansible-playbook -i inventory.ini set-up-docker-swarm.yaml -K
```

## Deploy docker swarm
At /app on swarm-orchestra-101-node1 VM, run this command:
```bash
docker stack deploy -d -c docker-compose.production.yml swarm-orchestra-101
```

## Inspect created services on stack

### 1. Using command line
On swarm-orchestra-101-node1, run this command:
#### a. Shows in each service about how many container replicas (RUNNING/DESIRED)
```bash
docker stack services swarm-orchestra-101
```
![stack-services](https://github.com/aryyawijaya/swarm-orchestra-101/blob/main/docs/stack-services.png)

#### b. Shows in a service about on what node its container replicas running on
```bash
docker service ps swarm-orchestra-101_backend
```
![service-ps](https://github.com/aryyawijaya/swarm-orchestra-101/blob/main/docs/service-ps.png)

#### c. Shows database migration logs
```bash
docker service logs swarm-orchestra-101_db-migration
```
![db-migration](https://github.com/aryyawijaya/swarm-orchestra-101/blob/main/docs/db-migration.png)

### 2. Through visualizer swarm nodes
On browser access swarm-orchestra-101-node1 using its IP through port 8080 (http://192.168.1.20:8080)
![visualizer-swarm-nodes](https://github.com/aryyawijaya/swarm-orchestra-101/blob/main/docs/visualizer-swarm-nodes.png)

## Demo
This demo will shows that docker overlay network (docker swarm network default) have ability to distribute load (request) service to their container replicas even running on different nodes (VM)
![backend-service-logs-1](https://github.com/aryyawijaya/swarm-orchestra-101/blob/main/docs/backend-service-logs-1.png)
![backend-service-logs-2](https://github.com/aryyawijaya/swarm-orchestra-101/blob/main/docs/backend-service-logs-2.png)
![backend-service-logs-3](https://github.com/aryyawijaya/swarm-orchestra-101/blob/main/docs/backend-service-logs-3.png)
