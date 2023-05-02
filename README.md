# Nectia-backend

###### _Created on: 01/05/2023_

### Project execution 

---
#### **Creation and activation of the environment via docker** 

1.- install docker [DOCKER](https://www.docker.com/)

2.- install docker compose [DOCKER-COMPOSE](https://docs.docker.com/compose/install/)

3.- create file .env and copy the information of file .env.false

4.- execute the command:

        docker compose build

5.- execute the command

        docker compose up

6.- Create a amdin user
  * Open a new terminal.
  
  * Enter to the container with commnad

        docker exec -it nectia_app sh
  
  * Execute command
  
        npm run create-test-users

7.- login in api

        user=admin@admin.com
        password=admin123


# NOTE
 to view endpoint view the docs folder in the main project