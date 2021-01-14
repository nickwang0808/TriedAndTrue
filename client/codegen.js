module.exports = {
  schema: [
    {
      "http://35.220.182.160:8080/v1/graphql": {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjVmOTcxMmEwODczMTcyMGQ2NmZkNGEyYTU5MmU0ZGZjMmI1ZGU1OTUiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTmljayBXYW5nIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdnNkJGa2tMVGQwbmpaV2QxS3NzXzYzQ3VFQ3pTRzVid3JCUTNsMlJnPXM5Ni1jIiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXSwieC1oYXN1cmEtdXNlci1pZCI6IkVLQ2dOZjM0N1FUT3N6QlplelhjSHNlck9xcjEifSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3RyaWVkYW5kdHJ1ZS04ZTdiOSIsImF1ZCI6InRyaWVkYW5kdHJ1ZS04ZTdiOSIsImF1dGhfdGltZSI6MTYxMDU5NzA0NywidXNlcl9pZCI6IkVLQ2dOZjM0N1FUT3N6QlplelhjSHNlck9xcjEiLCJzdWIiOiJFS0NnTmYzNDdRVE9zekJaZXpYY0hzZXJPcXIxIiwiaWF0IjoxNjEwNjAzODY0LCJleHAiOjE2MTA2MDc0NjQsImVtYWlsIjoid2FuZzcwMzAwMzUxNUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMDQzNTc0MDM3NTQ2NDA2NjAwMCJdLCJlbWFpbCI6WyJ3YW5nNzAzMDAzNTE1QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.sNq7j2qIJkQzdx9NiVM_oGEukgT8QdV_7l8hJxIUPO8XzjNu8X_XrmjJCLtKv_1SG7V2HojEuNi5VrvYXh1KZAebbv6NIWonNtj-z1kx4c3a3xfqwLjkF-B998FGJgqgQKoliHLPZR_KLMfwBJRtdCDq2y3gztL_BCBvUQsCiRxY-yQn_E-qUeciHI0kcPaXMfVf1tmacr9y43k_e3_J5RgrBr69v50qhnx9FYQhO4W2krN1OhiVy-JwcTnjn93MwpI_xwPkuEJOlNlBhrWNFJo3opTshlEGG4naRNAl3AJJz3Y66QGLMsxXBOgUkeMcKsQdhPYKAjR0Ynti9LdARw",
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
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
