import {
  IonBackButton,
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
import addNew from "../../assets/svg/addnew.svg";
import ellipsis from "../../assets/svg/ellipsis.svg";

interface IProps {
  title: string;
}

export default function ShoppingListDetailsHeader({ title }: IProps) {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton color="secondary" />
        </IonButtons>
        <IonTitle color="primary">{title}</IonTitle>
        <IonButtons slot="end">
          <IonButton>
            <IonIcon size="small" src={addNew} />
          </IonButton>
          <IonButton>
            <IonIcon size="small" src={ellipsis} />
          </IonButton>
        </IonButtons>
      </IonToolbar>

      <IonToolbar>
        <IonSegment
          value="active"
          onIonChange={(e) => {}}
          color="secondary"
          // color={isPast(new Date(selectedWeek[1])) ? "medium" : "secondary"}
        >
          <IonSegmentButton value="active">
            <IonLabel>Active</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="completed">
            <IonLabel>Completed</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonToolbar>
    </IonHeader>
  );
}
