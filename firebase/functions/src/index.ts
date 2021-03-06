import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import fetch from "node-fetch";
const serviceAccount = require("./secret.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const customClaims = functions.https.onCall(async (_, context) => {
  const claims = context.auth?.token;
  const uid = context.auth?.uid;
  if (!claims || !uid)
    throw new functions.https.HttpsError("unauthenticated", "please login");

  const hasuraClaims = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-default-role": "user",
      "x-hasura-allowed-roles": ["user", "admin"],
      "x-hasura-user-id": uid,
    },
  };

  await admin.auth().setCustomUserClaims(uid, hasuraClaims);

  return true;
});

export const newUserRecordWrite = functions.auth
  .user()
  .onCreate(async (user) => {
    const { uid, email, photoURL, displayName } = user;

    const admin_secret = "myadminsecretkey";
    const url = `http://${functions.config().server.uri}:8080/v1/graphql`;
    const query = `mutation ($id: String!, $name: String, $imgURL: String, $email: String) {
        insert_user(objects: [{email: $email, id: $id, img: $imgURL, name: $name}], on_conflict: {constraint: user_pkey, update_columns: [name, email, img]}) {
          affected_rows
        }
      }
      `;

    const variables = { id: uid, name: displayName, imgURL: photoURL, email };

    try {
      const result = await fetch(url, {
        method: "post",
        headers: {
          "content-type": "application/json",
          "x-hasura-admin-secret": admin_secret,
        },
        body: JSON.stringify({
          query: query,
          variables: variables,
        }),
      }).then((res) => res.json());

      console.log(result);
    } catch (err) {
      console.log(err);
    }
  });
