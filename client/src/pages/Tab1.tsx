import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import AuthChecker from "./auth/AuthChecker";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <AuthChecker />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
