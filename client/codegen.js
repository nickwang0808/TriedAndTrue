module.exports = {
  schema: [
    {
      "http://35.220.182.160:8080/v1/graphql": {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyYjkxODJiMWI0NmNiN2ZjN2MzMTFlZTgwMjFhZDY1MmVlMjc2MjIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTmljayBXYW5nIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdnNkJGa2tMVGQwbmpaV2QxS3NzXzYzQ3VFQ3pTRzVid3JCUTNsMlJnPXM5Ni1jIiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXSwieC1oYXN1cmEtdXNlci1pZCI6IkVLQ2dOZjM0N1FUT3N6QlplelhjSHNlck9xcjEifSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3RyaWVkYW5kdHJ1ZS04ZTdiOSIsImF1ZCI6InRyaWVkYW5kdHJ1ZS04ZTdiOSIsImF1dGhfdGltZSI6MTYxMTI5NzI2OCwidXNlcl9pZCI6IkVLQ2dOZjM0N1FUT3N6QlplelhjSHNlck9xcjEiLCJzdWIiOiJFS0NnTmYzNDdRVE9zekJaZXpYY0hzZXJPcXIxIiwiaWF0IjoxNjExNzM3ODczLCJleHAiOjE2MTE3NDE0NzMsImVtYWlsIjoid2FuZzcwMzAwMzUxNUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMDQzNTc0MDM3NTQ2NDA2NjAwMCJdLCJlbWFpbCI6WyJ3YW5nNzAzMDAzNTE1QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.jz37Wkllh2YozKfM6Xp4WICaBdDjynSHWH1EyVj2-jBOr0nbBG0sF_WLCpcyiSEaIKzyT3Fgp_Ajoez-ncmBY4rxo3zJ85LymtWF6cqOh9jQ9LtGDhdZNlUerLGFb-5wIhEQEQe8VTaxQ8KOrhfN4AoDz7jXWPp8FQUMTI4XGt6peptcRjsWz51MEj3LlJl3OuBtpWupUYbw0VMn__nIxaIbpcZXZ79eBxeEyRaFxYpZlSWFiZK6skwfm5JGaQOJUz2JeW-Miaj19HH5QQJuivRkKMoOzAB3GazFvO8Ndvou62FhxDgigDDfhIKW9J4fKwoi0_qfLYBZ3QT7CDftRQ",
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
