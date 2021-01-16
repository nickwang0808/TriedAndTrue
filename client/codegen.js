module.exports = {
  schema: [
    {
      "http://35.220.182.160:8080/v1/graphql": {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjVmOTcxMmEwODczMTcyMGQ2NmZkNGEyYTU5MmU0ZGZjMmI1ZGU1OTUiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTmljayBXYW5nIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdnNkJGa2tMVGQwbmpaV2QxS3NzXzYzQ3VFQ3pTRzVid3JCUTNsMlJnPXM5Ni1jIiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXSwieC1oYXN1cmEtdXNlci1pZCI6IkVLQ2dOZjM0N1FUT3N6QlplelhjSHNlck9xcjEifSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3RyaWVkYW5kdHJ1ZS04ZTdiOSIsImF1ZCI6InRyaWVkYW5kdHJ1ZS04ZTdiOSIsImF1dGhfdGltZSI6MTYxMDc3ODY5NywidXNlcl9pZCI6IkVLQ2dOZjM0N1FUT3N6QlplelhjSHNlck9xcjEiLCJzdWIiOiJFS0NnTmYzNDdRVE9zekJaZXpYY0hzZXJPcXIxIiwiaWF0IjoxNjEwNzg0NjUyLCJleHAiOjE2MTA3ODgyNTIsImVtYWlsIjoid2FuZzcwMzAwMzUxNUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMDQzNTc0MDM3NTQ2NDA2NjAwMCJdLCJlbWFpbCI6WyJ3YW5nNzAzMDAzNTE1QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.LMHKWzWoUDLvh1SA9jGDhz6lqyyf22sRP9rhwHoPoZ7oswiFLlEmdXdBvlU6Tbb3BpOdobp1ZkGIoThHO58yBgP_A_JMuv2Cx1YEME0bYki8vWVq-NRZn0nv-kLi17nDCCuoM4i1GlgIJKwmX46KPHCgsM3-Cy-lOk7nRGfHWLwVivmNG0WBMoYncYV4MhASxqdTdcAIEqsSUUuPSVjXhmf-TotRPl5BMkfqQSb5gLSFlOZGYvzmwmQY-8x5oM1gmrsTZD5VbbW-jdRUhLGDP-sXR7lTeGsi9GUVsBoY9ByzEZoW5s3dO5odbrImY9Zo9ub9I2fgDubFiBGLB0pVdg",
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
