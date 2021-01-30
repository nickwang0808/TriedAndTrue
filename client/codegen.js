module.exports = {
  schema: [
    {
      "http://35.220.182.160:8080/v1/graphql": {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjljZTVlNmY1MzBiNDkwMTFiYjg0YzhmYWExZWM1NGM1MTc1N2I2NTgiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTmljayBXYW5nIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdnNkJGa2tMVGQwbmpaV2QxS3NzXzYzQ3VFQ3pTRzVid3JCUTNsMlJnPXM5Ni1jIiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXSwieC1oYXN1cmEtdXNlci1pZCI6IkpFRmUyU21kN2xPdHc0T0VCZTJ2b3ZHOE96SDIifSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3RyaWVkYW5kdHJ1ZS04ZTdiOSIsImF1ZCI6InRyaWVkYW5kdHJ1ZS04ZTdiOSIsImF1dGhfdGltZSI6MTYxMTk3NTg4MCwidXNlcl9pZCI6IkpFRmUyU21kN2xPdHc0T0VCZTJ2b3ZHOE96SDIiLCJzdWIiOiJKRUZlMlNtZDdsT3R3NE9FQmUydm92RzhPekgyIiwiaWF0IjoxNjExOTg4NzA2LCJleHAiOjE2MTE5OTIzMDYsImVtYWlsIjoid2FuZzcwMzAwMzUxNUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMDQzNTc0MDM3NTQ2NDA2NjAwMCJdLCJlbWFpbCI6WyJ3YW5nNzAzMDAzNTE1QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.QMQyqTJp6mf4jn-oscrfFCyC8dL-E8n0X5sz2CO-EqPwa520AZpGB6GhnOl8iqyA9YGqr8LflKn7vItVBRP33H3pBtHQ5B0N0tzjYdgi5Rmd2vIdGkGuX-TH7xZ-fOqowFtSf-rKdQ7gwbgZPHsnp590vYdWuoyZltNnUgIh44jRjB9B6Ju-tbrDcDtGuxv5U634O0OeIowF-Mgn_7XA9tW8NjvcHVq6wjxrf_GFuUt_pmzRfow94vkhZ0cJB4UKtrI6OGM5Z9PkB1L0r4vQ7w9XfGdzBIckdO06zJhNQZ1VFDGhK_tg-jHvH4fcf9c9_1YdLljf2tU28m3xcXJobg",
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
