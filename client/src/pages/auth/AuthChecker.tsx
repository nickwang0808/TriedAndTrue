import { IonButton } from "@ionic/react";
import firebase from "firebase/app";
import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, cloudFn } from "../../firebase/config";

export default function AuthChecker() {
  const handleGoogleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    if (!user) throw new Error("something wrong");

    // function returns boolean
    const result = await cloudFn("customClaims")();
    if (result.data) {
      auth.currentUser?.getIdToken(true);
      console.log(auth.currentUser?.getIdToken());
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        throw new Error("something wrong");
      } else {
        // update store
      }
    });
  });

  return (
    <StyledDiv>
      <IonButton size="large" onClick-={handleGoogleSignIn}>
        Sign in with Google
      </IonButton>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
