import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import BlockSeparator from "../../components/misc/BlockSeparator";
import Header from "./Header";

export default function MealPlannerMainPage() {
  return (
    <>
      <IonPage>
        <Header />
        <IonContent>
          <BlockSeparator title="Monday" subTitle="(23rd)" />
        </IonContent>
      </IonPage>
    </>
  );
}
