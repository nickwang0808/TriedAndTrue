import {
  IonBackButton,
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
import { useDispatch, useSelector } from "react-redux";
import addNew from "../../assets/svg/addnew.svg";
import ellipsis from "../../assets/svg/ellipsis.svg";
import { setShowActive } from "../../redux/ShoppingList/ShoppingListDetailsSlice";
import { IAppState } from "../../redux/store";

interface IProps {
  title: string;
}

type segmentValue = "active" | "completed" | undefined;

export default function ShoppingListDetailsHeader({ title }: IProps) {
  const dispatch = useDispatch();
  const handleSwitch = (value: segmentValue) => {
    if (!value) return;
    if (value === "active") {
      dispatch(setShowActive(true));
    } else {
      dispatch(setShowActive(false));
    }
  };

  const { showActive } = useSelector(
    ({ shoppingListDetailSlice }: IAppState) => shoppingListDetailSlice
  );

  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton color="secondary" />
        </IonButtons>
        <IonTitle color="primary">{title}</IonTitle>
        <IonButtons slot="end">
          <IonIcon size="small" src={addNew} />
          <IonIcon size="small" src={ellipsis} />
        </IonButtons>
      </IonToolbar>

      <IonToolbar>
        <IonSegment
          value={showActive ? "active" : "completed"}
          onIonChange={({ detail }) =>
            handleSwitch(detail.value as segmentValue)
          }
          color="secondary"
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
