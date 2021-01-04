import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import Header from "./Header";

export default function MealPlannerMainPage() {
  return (
    <>
      <IonPage>
        <Header />
        <IonContent></IonContent>
      </IonPage>
    </>
  );
}
