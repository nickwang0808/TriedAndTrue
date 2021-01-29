module.exports = {
  schema: [
    {
      "http://35.220.182.160:8080/v1/graphql": {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjljZTVlNmY1MzBiNDkwMTFiYjg0YzhmYWExZWM1NGM1MTc1N2I2NTgiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTmljayBXYW5nIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdnNkJGa2tMVGQwbmpaV2QxS3NzXzYzQ3VFQ3pTRzVid3JCUTNsMlJnPXM5Ni1jIiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXSwieC1oYXN1cmEtdXNlci1pZCI6IkpFRmUyU21kN2xPdHc0T0VCZTJ2b3ZHOE96SDIifSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3RyaWVkYW5kdHJ1ZS04ZTdiOSIsImF1ZCI6InRyaWVkYW5kdHJ1ZS04ZTdiOSIsImF1dGhfdGltZSI6MTYxMTkwNDQyNCwidXNlcl9pZCI6IkpFRmUyU21kN2xPdHc0T0VCZTJ2b3ZHOE96SDIiLCJzdWIiOiJKRUZlMlNtZDdsT3R3NE9FQmUydm92RzhPekgyIiwiaWF0IjoxNjExOTI3MTIyLCJleHAiOjE2MTE5MzA3MjIsImVtYWlsIjoid2FuZzcwMzAwMzUxNUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMDQzNTc0MDM3NTQ2NDA2NjAwMCJdLCJlbWFpbCI6WyJ3YW5nNzAzMDAzNTE1QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.dBc8TV2HWsed2mPBKnkkCy5B0fxneq-NWYKQdfGUiT9y9XuDbMYOTOyGRxGKKxMTSiX8I6uKVNP_85jle2RuXguUtUYRCM-8kguSCFTWEFixOb7wMxekiI-6Rv4u8wE5NRbCCAPjHlfpLxrtUbarTVMlmZRNbtddMyW6Azw4iPkMc6r4Zk-4p-1NnpgTd_PCQ5Y63XURmK7Zowg5lB7Wwv8pwf6Qq9aKSX0mLqRjdeUQwa6Fv-XNMgOU1uAciOZ2PH6NWlCtmizV25tdEc8V2-TGLKd-jYamqhKplXbr04dJOWB9qoJwWd0KduKVhwfCOvsjvftZGdGo4l-MD2UQjw",
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
