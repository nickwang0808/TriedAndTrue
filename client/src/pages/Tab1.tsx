import { IonPage } from "@ionic/react";
import React from "react";
import AuthChecker from "./auth/AuthChecker";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <AuthChecker />
    </IonPage>
  );
};

export default Tab1;
