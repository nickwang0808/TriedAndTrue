import { IonButton, IonContent, IonPage } from "@ionic/react";
import React from "react";

export default function ShoppingListPage() {
  return (
    <IonPage>
      <IonContent>
        <IonButton color="secondary">Hello</IonButton>
        <IonButton color="secondary" fill="outline">
          Hello
        </IonButton>
      </IonContent>
    </IonPage>
  );
}
