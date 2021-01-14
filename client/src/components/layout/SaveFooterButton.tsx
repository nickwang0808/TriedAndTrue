import { IonButton, IonFooter } from "@ionic/react";
import React from "react";

interface IProps {
  action: () => void;
  disabled?: boolean;
  text: string;
}

export default function SaveFooterButton({ action, disabled, text }: IProps) {
  return (
    <IonFooter>
      <IonButton
        disabled={disabled}
        onClick={action}
        className="ion-margin-horizontal ion-margin-top ion-margin-bottom"
        expand="full"
        color="secondary"
      >
        {text}
      </IonButton>
    </IonFooter>
  );
}
