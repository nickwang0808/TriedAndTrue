import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import xclose from "../../assets/svg/close-x.svg";

interface IProps {
  title: string;
  handleClose: () => void;
}

export default function ModalHeader({ title, handleClose }: IProps) {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle color="primary">{title}</IonTitle>
        <IonButtons slot="start">
          <IonButton onClick={handleClose}>
            <IonIcon src={xclose} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
}
