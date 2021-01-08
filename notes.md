## connect to docker db from host

run `docker inspect <container id> | grep "IPAddress"` to get the ip address of the docker instance, then replace it to 'postgress' before port number