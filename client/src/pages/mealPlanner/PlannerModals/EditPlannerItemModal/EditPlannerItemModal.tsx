import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import xclose from "../../../../assets/svg/close-x.svg";
import { StyledFullScreenModal } from "../../../../components/modals/fullScreenModalBase";

export default function EditPlannerItemModal() {
  const [showModal, setShowModal] = useState(true);

  return (
    <StyledFullScreenModal
      height="220px"
      isOpen={showModal}
      backdropDismiss
      onDidDismiss={() => setShowModal(false)}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle color="primary">Add Recipe</IonTitle>
          <IonButtons slot="start">
            <IonButton>
              <IonIcon src={xclose} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList lines="full">
          <IonItem>
            <IonLabel color="primary">Move to Another Day</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel color="primary">Recipe Details</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel color="primary">Remove Recipe</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </StyledFullScreenModal>
  );
}
