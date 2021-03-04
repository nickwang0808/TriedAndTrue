import styled from "@emotion/styled";
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add } from "ionicons/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { setShowAddNewListModal } from "../../redux/ShoppingList/ShoppingListHomeSlice";
import StyledIonIcon from "../misc/StyledIonIcon";

export default function ShoppingListMainHeader() {
  const dispatch = useDispatch();
  const handleAdd = () => dispatch(setShowAddNewListModal(true));

  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle color="primary">Shopping Lists</IonTitle>
        <IonButtons slot="end">
          <IonButton onClick={handleAdd}>
            <StyledIonIcon icon={add} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
}

const StylizedTitleButtonText = styled.div`
  color: var(--ion-color-secondary);
  font-family: SuraBold;
  font-size: 16px;
`;
