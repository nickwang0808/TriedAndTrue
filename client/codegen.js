module.exports = {
  schema: [
    {
      "http://35.220.182.160:8080/v1/graphql": {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImM0ZWFhZjkxM2VlNWY0MDY0YmE2NjUzN2M0Njk3YzY5OGE3NGYwODIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTmljayBXYW5nIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdnNkJGa2tMVGQwbmpaV2QxS3NzXzYzQ3VFQ3pTRzVid3JCUTNsMlJnPXM5Ni1jIiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXSwieC1oYXN1cmEtdXNlci1pZCI6IkpFRmUyU21kN2xPdHc0T0VCZTJ2b3ZHOE96SDIifSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3RyaWVkYW5kdHJ1ZS04ZTdiOSIsImF1ZCI6InRyaWVkYW5kdHJ1ZS04ZTdiOSIsImF1dGhfdGltZSI6MTYxMjg1MTcxNSwidXNlcl9pZCI6IkpFRmUyU21kN2xPdHc0T0VCZTJ2b3ZHOE96SDIiLCJzdWIiOiJKRUZlMlNtZDdsT3R3NE9FQmUydm92RzhPekgyIiwiaWF0IjoxNjE0NjU2NDAxLCJleHAiOjE2MTQ2NjAwMDEsImVtYWlsIjoid2FuZzcwMzAwMzUxNUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMDQzNTc0MDM3NTQ2NDA2NjAwMCJdLCJlbWFpbCI6WyJ3YW5nNzAzMDAzNTE1QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.eL7IqzZ3lB5w5zYW7wsStJRdy62qgicEfLW72NC5m5eToA53_t3vrXnQou9_g1aO-OOJNUnUIK03ANvT5Yi3OnUUdAb6PhlrCuedcygEv5qJrDRZqhElEh2sQWnSyoiEO1aGTZWl_WfxozQTJsjM6hSLg17v3h1voeglaA4AQxN9TA6FHHyYVC9UARgaGoEQPLpGk0zJmW4pe1h7u51d6DhuHdY8c57VfhOeNqjNem8Q2s_TdTWVchtlJvhr_nt1zpO3JFx_kiDfm1B9djjwYww0dxpCFmGdAdJgp0oBj8S9oi43CfyfByeN_Hmh7YYOhbKyALgeaiNZD7LqA-nyQw",
          // "x-hasura-admin-secret": "myadminsecretkey",
        },
      },
    },
  ],
  documents: ["./src/**/*.tsx", "./src/**/*.ts"],
  overwrite: true,
  generates: {
    "./src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: false,
        withHOC: false,
        withComponent: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
