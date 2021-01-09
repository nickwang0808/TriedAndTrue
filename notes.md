## connect to docker db from host

run `docker inspect <container id> | grep "IPAddress"` to get the ip address of the docker instance, then replace it to 'postgress' before port number

## client form state need to be read first

for what ever reason I had to `const {isDirty} = formState` to read it first before i can get all the updates form it
