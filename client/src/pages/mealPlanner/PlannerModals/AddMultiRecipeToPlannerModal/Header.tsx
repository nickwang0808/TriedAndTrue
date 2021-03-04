import {
  IonButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { close } from "ionicons/icons";
import React from "react";
import { useDispatch } from "react-redux";
import StyledIonIcon from "../../../../components/misc/StyledIonIcon";
import { closePlannerModal } from "../../../../redux/Planner/PlannerModalSlice";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle color="primary">Add Recipe</IonTitle>
        <IonButtons slot="start">
          <IonButton onClick={() => dispatch(closePlannerModal())}>
            <StyledIonIcon icon={close} />
          </IonButton>
        </IonButtons>
        {/*
        <IonButtons slot="end">
          <IonButton onClick={() => dispatch(resetAddOrEditRecipe())} >
            <IonIcon icon={filter} color="secondary" />
          </IonButton>
        </IonButtons>
        */}
      </IonToolbar>
    </IonHeader>
  );
}
