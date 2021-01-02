import { IonButton } from "@ionic/react";
import firebase from "firebase/app";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { auth, cloudFn } from "../../config/firebaseConfig";

export default function AuthChecker() {
  const [token, setToken] = useState("");

  const handleGoogleSignIn = async () => {
    console.log("sign in window");
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    if (!user) throw new Error("something wrong");

    // function returns boolean
    const result = await cloudFn.httpsCallable("customClaims")();
    if (result.data) {
      const token = await auth.currentUser?.getIdToken(true);
      console.log(token);
      if (token) {
        setToken(token);
      }
    }
  };
  const handleEmailSignIn = async () => {
    console.log("sign in window");
    const { user } = await auth.createUserWithEmailAndPassword(
      "nickwang0808@hotmail.com",
      "Wanggaoxiong123"
    );
    if (!user) throw new Error("something wrong");

    // function returns boolean
    const result = await cloudFn.httpsCallable("customClaims")();
    if (result.data) {
      const token = await auth.currentUser?.getIdToken(true);
      console.log(token);
      if (token) {
        setToken(token);
      }
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (!user) {
        console.log("no user logged in");
      } else {
        // update store
        const token = await auth.currentUser?.getIdToken(true);
        console.log(token);
        if (token) {
          setToken(token);
        }
      }
    });
  });

  return (
    <StyledDiv>
      <IonButton size="large" onClick={handleGoogleSignIn}>
        Sign in with Google
      </IonButton>
      <IonButton size="large" onClick={handleEmailSignIn}>
        Sign in with Email
      </IonButton>
      <div>{token}</div>
      <IonButton size="large" color="warning" onClick={() => auth.signOut()}>
        Sign Out
      </IonButton>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
