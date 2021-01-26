import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useDispatch } from "react-redux";
import addnew from "../../assets/svg/addnew.svg";

export default function ShoppingListMainHeader() {
  const dispatch = useDispatch();

  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle color="primary">My Recipes</IonTitle>
        <IonButtons slot="end">
          <IonButton onClick={() => {}}>
            <IonIcon icon={addnew} color="secondary" />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
}
