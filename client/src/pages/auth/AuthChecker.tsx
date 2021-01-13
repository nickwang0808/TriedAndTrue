import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { IonButton } from "@ionic/react";
import firebase from "firebase/app";
import React, { useEffect, useState } from "react";
import { auth, cloudFn } from "../../config/firebaseConfig";
import {
  GetProfileQuery,
  GetProfileQueryVariables,
} from "../../generated/graphql";
import { GET_PROFILE } from "../../gql/query/getProfile.graphql";

interface IProps {
  children: React.ReactNode;
}

export default function AuthChecker({ children }: IProps) {
  const [isAuthed, setIsAuthed] = useState(false);
  const { loading, error, data } = useQuery<
    GetProfileQuery,
    GetProfileQueryVariables
  >(GET_PROFILE, {
    variables: { uid: auth.currentUser?.uid as string },
  });

  const handleGoogleSignIn = async () => {
    // console.log("sign in window");
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    if (!user) throw new Error("something wrong");

    // function returns boolean
    const result = await cloudFn.httpsCallable("customClaims")();
    if (result.data) {
      const token = await auth.currentUser?.getIdToken(true);
      // console.log(token);
      localStorage.setItem("token", token || "");
    }
  };

  useEffect(() => {
    auth.onIdTokenChanged(async (user) => {
      if (!user) {
        console.log("no user logged in");
      } else {
        // update store
        const token = await auth.currentUser?.getIdToken(true);
        console.log(token);
        localStorage.setItem("token", token || "");
        setIsAuthed(true);
      }
    });
  }, []);

  // console.log("auth render");

  if (!isAuthed) {
    return (
      <StyledDiv>
        <IonButton size="large" onClick={handleGoogleSignIn}>
          Sign in with Google
        </IonButton>
        <IonButton size="large" color="warning" onClick={() => auth.signOut()}>
          Sign Out
        </IonButton>
      </StyledDiv>
    );
  }
  return <>{children}</>;
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
