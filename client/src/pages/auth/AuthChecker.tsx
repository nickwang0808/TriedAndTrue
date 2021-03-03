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
import OnBoarding from "../onBoarding/OnBoarding";

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

  const isProd = process.env.NODE_ENV === "production";

  const handleSignIn = async () => {
    // console.log("sign in window");

    if (!isProd) {
      const provider = new firebase.auth.GoogleAuthProvider();
      const { user } = await auth.signInWithPopup(provider);
      if (!user) throw new Error("something wrong");
    } else {
      const { user } = await auth.signInAnonymously();
      if (!user) throw new Error("something wrong");
    }

    // function returns boolean
    const result = await cloudFn.httpsCallable("customClaims")();
    if (result.data) {
      const token = await auth.currentUser?.getIdToken(true);
      // console.log(token);
      localStorage.setItem("token", token || "");
    }
  };

  useEffect(() => {
    const cleanUp = auth.onIdTokenChanged(async (user) => {
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

    return () => cleanUp();
  }, []);

  // console.log("auth render");
  const checkIsFirstTime = () => {
    const isFirstTime = window.localStorage.getItem("isFirstTime");
    if (isFirstTime === null) {
      return true;
    } else {
      return false;
    }
  };

  const handleComplete = () => {
    console.log("slide clicked");
    window.localStorage.setItem("isFirstTime", "false");
    handleSignIn();
  };

  if (!isAuthed && checkIsFirstTime()) {
    return <OnBoarding onComplete={handleComplete} />;
  }

  if (!isAuthed && !isProd) {
    return (
      <StyledDiv>
        <IonButton size="large" onClick={handleSignIn}>
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
