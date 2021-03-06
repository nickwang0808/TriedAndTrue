import styled from "@emotion/styled";
import { IonButton, IonContent, IonLoading, IonPage } from "@ionic/react";
import firebase from "firebase";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { auth, cloudFn } from "../../config/firebaseConfig";
import useGetProfileQuery from "../../gql/query/useGetProfileQuery.graphql";
import OnBoarding from "../onBoarding/OnBoarding";
interface IProps {
  children: React.ReactNode;
}

export default function AuthChecker({ children }: IProps) {
  const [getProfile, { data, loading, error }] = useGetProfileQuery();

  const [authStatus, setAuthStatus] = useState<
    "authenticated" | "loading" | "unauthenticated"
  >("unauthenticated");

  const isProd = process.env.NODE_ENV === "production";

  const handleSignIn = async () => {
    setAuthStatus("loading");

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
    if (result.data as boolean) {
      // force refresh for the new token with custom claim
      await auth.currentUser?.getIdToken(true);
      // console.log(token);
    }
  };

  /* mount a listener that refreshes the jwt token when expired or changed,
  it will run after the initial login */
  useEffect(() => {
    const cleanUp = auth.onIdTokenChanged(async (user) => {
      if (!user) {
        console.log("no user logged in");
      } else {
        if (authStatus !== "authenticated") {
          // don't force refresh to token here
          const token = await auth.currentUser?.getIdToken();

          console.log(token);
          if (token) {
            localStorage.setItem("token", token || "");
          }
          // setAuthStatus("loading");
          getProfile({ variables: { uid: auth.currentUser!.uid } });
        }
      }
    });

    return () => cleanUp();
  }, []);

  /* 
  the useeffect that watches for idToken will request the profile
  once user profile returned, authenticate the user
  */
  useEffect(() => {
    if (data) {
      setAuthStatus("authenticated");
    }
  }, [data]);

  // console.log("auth render");
  const checkIsFirstTime = () => {
    const isFirstTime = window.localStorage.getItem("isFirstTime");
    if (isFirstTime === null) {
      return true;
    } else {
      return false;
    }
  };

  /* leaving this here but we are showing the onboarding for everyone not authenticated */
  const handleCompleteOnboard = () => {
    console.log("slide clicked");
    window.localStorage.setItem("isFirstTime", "false");
    handleSignIn();
  };

  // if user has token stored, show loading immediately
  useLayoutEffect(() => {
    const cachedToken = window.localStorage.getItem("token");
    if (cachedToken) setAuthStatus("loading");
  }, []);

  // if (!isAuthed && checkIsFirstTime()) {
  if (authStatus !== "authenticated") {
    return (
      <IonPage>
        <IonContent>
          <OnBoarding onComplete={handleCompleteOnboard} />

          <IonLoading
            isOpen={authStatus === "loading"}
            // onDidDismiss={() => setShowLoading(false)}
            message={"Please wait..."}
          />
        </IonContent>
      </IonPage>
    );
  }

  if (authStatus !== "authenticated" && !isProd) {
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
