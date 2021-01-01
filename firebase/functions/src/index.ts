import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

export const customClaims = functions.https.onCall(async (_, context) => {
  const claims = context.auth?.token;
  if (!claims)
    throw new functions.https.HttpsError("unauthenticated", "please login");

  const hasuraClaims = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": ["user"],
      "x-hasura-default-role": "user",
      "x-hasura-user-id": "1234567890",
    },
  };

  await admin.auth().setCustomUserClaims(claims.sub, hasuraClaims);

  return { complete: true };
});
