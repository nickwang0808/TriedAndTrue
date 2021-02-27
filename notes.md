## connect to docker db from host

run `docker ps` to get container ip, then `docker inspect <container id> | grep "IPAddress"` to get the ip address of the docker instance, then replace it to 'postgress' before port number

## client form state need to be read first

for what ever reason I had to `const {isDirty} = formState` to read it first before i can get all the updates form it

## jest won't pass

add this to npm test

`--env=jsdom --transformIgnorePatterns 'node_modules/(?!(@ionic|<other-package-need-to-transform>)/)`

## dotnet server error

`System.Text.Json.JsonException: A possible object cycle was detected.`
it appears that the default dotnet json serializer does not get the job done when we have a deep json tree in the req body
so we need to use the newtonSoft one
`Microsoft.AspNetCore.Mvc.NewtonsoftJson`
and then in startup service
`services.AddControllers().AddNewtonsoftJson(options => options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);`

# notes

- relationship for the derived action is defined, now work on the server code
- use derived actions to work update recipe aswell
- drop raw_text
