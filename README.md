# swarm-orchestra-101
Project that set up ready to launch Docker Swarm orchestration

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
docker stack deploy -c docker-compose.production.yml swarm-orchestra-101
```

## Inspect created services on stack

### 1. Using command line
On swarm-orchestra-101-node1, run this command:
```bash
docker stack services swarm-orchestra-101
```
It shows in each service about how many container replicas (running/desired)
![stack-services](https://github.com/aryyawijaya/swarm-orchestra-101/blob/main/docs/stack-services.png)

```bash
docker service ps swarm-orchestra-101_backend
```
It shows in 1 service about what node its container replicas running on
![service-ps](https://github.com/aryyawijaya/swarm-orchestra-101/blob/main/docs/service-ps.png)

### 2. Through visualizer swarm nodes
Access swarm-orchestra-101-node1 using its IP through port 8080 (192.168.1.20:8080)
![visualizer-swarm-nodes](https://github.com/aryyawijaya/swarm-orchestra-101/blob/main/docs/visualizer-swarm-nodes.png)

## Demo
This demo will shows that docker overlay network (docker swarm network default) have ability to distribute load (request) service to their container replicas even running on different nodes (VM)
![backend-service-logs-1](https://github.com/aryyawijaya/swarm-orchestra-101/blob/main/docs/backend-service-logs-1.png)
![backend-service-logs-2](https://github.com/aryyawijaya/swarm-orchestra-101/blob/main/docs/backend-service-logs-2.png)
![backend-service-logs-3](https://github.com/aryyawijaya/swarm-orchestra-101/blob/main/docs/backend-service-logs-3.png)
