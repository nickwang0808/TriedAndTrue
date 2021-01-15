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
import xclose from "../../assets/svg/close-x.svg";
import filter from "../../assets/svg/filter.svg";
import { closePlannerModal } from "../../redux/Planner/PlannerModalSlice";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle color="primary">Add Recipe</IonTitle>
        <IonButtons slot="start">
          <IonButton onClick={() => dispatch(closePlannerModal())}>
            <IonIcon icon={xclose} color="secondary" />
          </IonButton>
        </IonButtons>
        <IonButtons slot="end">
          <IonButton /* onClick={() => dispatch(resetAddOrEditRecipe())} */>
            <IonIcon icon={filter} color="secondary" />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
}
