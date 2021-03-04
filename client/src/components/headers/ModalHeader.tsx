import styled from "@emotion/styled";
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { close } from "ionicons/icons";
import React from "react";
import StyledIonIcon from "../misc/StyledIonIcon";

interface IProps {
  title: string;
  handleClose: () => void;
}

export default function ModalHeader({ title, handleClose }: IProps) {
  return (
    <IonHeader>
      <IonToolbar>
        <StyledHeader color="primary">{title}</StyledHeader>
        <IonButtons slot="start">
          <IonButton onClick={handleClose}>
            <StyledIonIcon icon={close} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
}

const StyledHeader = styled(IonTitle)`
  padding-inline: 0 !important;
`;
