import styled from "@emotion/styled";
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
import addnew from "../../assets/svg/addnew.svg";
import { setShowAddNewListModal } from "../../redux/ShoppingList/ShoppingListHomeSlice";

export default function ShoppingListMainHeader() {
  const dispatch = useDispatch();
  const handleAdd = () => dispatch(setShowAddNewListModal(true));

  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle color="primary">Shopping Lists</IonTitle>
        <IonButtons slot="end">
          <IonButton onClick={handleAdd}>
          <StylizedTitleButtonText>Create List</StylizedTitleButtonText>
            <IonIcon icon={addnew} color="secondary" />
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