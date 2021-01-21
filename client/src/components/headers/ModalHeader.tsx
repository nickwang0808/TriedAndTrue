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
import styled from "@emotion/styled";


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
            <IonIcon src={xclose} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
}

const StyledHeader = styled(IonTitle)`
  padding-inline: 0 !important;
`;
