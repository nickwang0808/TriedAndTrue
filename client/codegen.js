module.exports = {
  schema: [
    {
      "http://35.220.182.160:8080/v1/graphql": {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjVmOTcxMmEwODczMTcyMGQ2NmZkNGEyYTU5MmU0ZGZjMmI1ZGU1OTUiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTmljayBXYW5nIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdnNkJGa2tMVGQwbmpaV2QxS3NzXzYzQ3VFQ3pTRzVid3JCUTNsMlJnPXM5Ni1jIiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXSwieC1oYXN1cmEtdXNlci1pZCI6IkVLQ2dOZjM0N1FUT3N6QlplelhjSHNlck9xcjEifSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3RyaWVkYW5kdHJ1ZS04ZTdiOSIsImF1ZCI6InRyaWVkYW5kdHJ1ZS04ZTdiOSIsImF1dGhfdGltZSI6MTYxMDUzOTg0MCwidXNlcl9pZCI6IkVLQ2dOZjM0N1FUT3N6QlplelhjSHNlck9xcjEiLCJzdWIiOiJFS0NnTmYzNDdRVE9zekJaZXpYY0hzZXJPcXIxIiwiaWF0IjoxNjEwODA3NDkwLCJleHAiOjE2MTA4MTEwOTAsImVtYWlsIjoid2FuZzcwMzAwMzUxNUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMDQzNTc0MDM3NTQ2NDA2NjAwMCJdLCJlbWFpbCI6WyJ3YW5nNzAzMDAzNTE1QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.J4MtLzvmidy_yZwHeEpZjtiX3oHOido2NeySQeNVC0ToU1eaTqLM1lNDSioPiLkFPX-DzT0-3G7sYBIuFT9gK8ubBAxIseKsc6l3npDONEsoO_hcLbOPFWF_e2YJ5x33VDd0_szo4BxJLnr8_G-faUczngq6XnQ3REAunCu62KifgzVOwmLXKu97flXJNZZZcSk8Q0BQ9b7AxzBFvKUJKrSyEFUyimtysIkFAsQjtZmBPKejVi8TBPHWWYgVs-8dxu4Ml9bMzlWhUQu_42OQfS0TucaI8phSPZKX6aDCpMl0Lp__m_LG7StH_a1EnWRE8Nl1eLKO6GituvD8h5w9Jw",
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
