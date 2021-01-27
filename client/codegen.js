module.exports = {
  schema: [
    {
      "http://35.220.182.160:8080/v1/graphql": {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyYjkxODJiMWI0NmNiN2ZjN2MzMTFlZTgwMjFhZDY1MmVlMjc2MjIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTmljayBXYW5nIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdnNkJGa2tMVGQwbmpaV2QxS3NzXzYzQ3VFQ3pTRzVid3JCUTNsMlJnPXM5Ni1jIiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXSwieC1oYXN1cmEtdXNlci1pZCI6IkVLQ2dOZjM0N1FUT3N6QlplelhjSHNlck9xcjEifSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3RyaWVkYW5kdHJ1ZS04ZTdiOSIsImF1ZCI6InRyaWVkYW5kdHJ1ZS04ZTdiOSIsImF1dGhfdGltZSI6MTYxMTcxNDk3NCwidXNlcl9pZCI6IkVLQ2dOZjM0N1FUT3N6QlplelhjSHNlck9xcjEiLCJzdWIiOiJFS0NnTmYzNDdRVE9zekJaZXpYY0hzZXJPcXIxIiwiaWF0IjoxNjExNzE0OTc5LCJleHAiOjE2MTE3MTg1NzksImVtYWlsIjoid2FuZzcwMzAwMzUxNUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMDQzNTc0MDM3NTQ2NDA2NjAwMCJdLCJlbWFpbCI6WyJ3YW5nNzAzMDAzNTE1QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.NPPS9827A7wuNixev2loGg6LLvCHQOvzespzIgTD3XnPhoaEDq4nXh4iXhcG9HFkYWL0fs94PAu_8Ndx_GvNMtWuW7us20Lr7UJDqC1CxEV-K7oo4mEtbzlB9-x2BVNj82zLhYTDPKKQ8XYhqoI0lNpAlAScjCk4ID0ndwuMjFJxu1UNdJNIs2-3Z1Smyq4ShnQCzTKwS2tbTpr6mmeHEw48GIZU5Tk_Wfmyy5t58qWU4mWakK8U4b7D4XtP7PwDeRpw1kpoBZXBpLubV3XZIWShWaA45ZrV-VGZ31famfNj81dyg6ltBDfcsmtoBv93H2ekPBL6BbnjI4Uf1vAf9Q",
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
