# Tried And True

Tried And True(t&t) is a recipe management app focusing on ease of use.

## development

- first `cd` into the root dir and run `docker-compose up -d` to pull all the necessary docker images,
- in /server dir, run `dotnet run` to start the webhooks server that handles all the custom business logic for the server
- in /client dir, run `npm i` then `ionic serve` to start the front end client.

## testing

- in /client, simply run `npm test` to start the jest test suite.
- in /server/src.test, run `dotnet test` to test the webhooks


## deployment
- first make sure Caddy is installed, and domain is pointed to the server
- use prod docker-compose to spin up all containers
- start caddy with the root dir caddyfile
