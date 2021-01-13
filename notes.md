## connect to docker db from host

run `docker ps` to get container ip, then `docker inspect <container id> | grep "IPAddress"` to get the ip address of the docker instance, then replace it to 'postgress' before port number

## client form state need to be read first

for what ever reason I had to `const {isDirty} = formState` to read it first before i can get all the updates form it

# notes

- relationship for the derived action is defined, now work on the server code
- use derived actions to work update recipe aswell
- drop raw_text
