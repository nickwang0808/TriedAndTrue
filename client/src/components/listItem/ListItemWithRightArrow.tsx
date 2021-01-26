import { IonIcon, IonItem, IonLabel } from "@ionic/react";
import React from "react";
import listArrowPointingRight from "../../assets/svg/listArrowPointingRight.svg";

interface ISubProps {
  content: string;
  onClick: () => void;
}

export default function ItemWithRightArrow({ content, onClick }: ISubProps) {
  return (
    <IonItem onClick={onClick}>
      <IonLabel color="primary">{content}</IonLabel>

      <IonIcon slot="end" src={listArrowPointingRight} />
    </IonItem>
  );
}
