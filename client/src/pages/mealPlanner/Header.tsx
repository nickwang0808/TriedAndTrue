import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import listIconForHeader from "../../assets/svg/listIconForHeader.svg";
import refresh from "../../assets/svg/refresh.svg";

export default function Header() {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>Weeekly Meal Plan</IonTitle>
        <IonButtons slot="end">
          <IonButton>
            <IonIcon icon={refresh} />
          </IonButton>
          <IonButton>
            <IonIcon icon={listIconForHeader} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
      <IonToolbar>
        <IonSegment scrollable value="heart" color="secondary">
          <IonSegmentButton value="home">
            <IonLabel>Nov 23 - Dec 17</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="heart">
            <IonLabel>Nov 23 - Dec 17</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="pin">
            <IonLabel>Nov 23 - Dec 17</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonToolbar>
    </IonHeader>
  );
}
