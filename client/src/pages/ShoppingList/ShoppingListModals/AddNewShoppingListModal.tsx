import styled from "@emotion/styled";
import { IonButton, IonContent, IonItem, IonLabel } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalHeader from "../../../components/headers/ModalHeader";
import { StyledIonInput } from "../../../components/Input/StyledIonInput";
import { FancyModalWithRoundTop } from "../../../components/modals/FancyModalWithRoundTop";
import useInsertNewList from "../../../gql/mutations/useInsertNewList.graphql";
import { setShowAddNewListModal } from "../../../redux/ShoppingList/ShoppingListHomeSlice";
import { IAppState } from "../../../redux/store";
import { setShowToast } from "../../../redux/toastSlice/toastSlice";

export default function AddNewShoppingListModal() {
  const dispatch = useDispatch();
  const handleDismiss = () => dispatch(setShowAddNewListModal(false));

  const { showAddNewListModal } = useSelector(
    ({ shoppingListHomeSlice }: IAppState) => shoppingListHomeSlice
  );

  const { insertNewList, value, setValue } = useInsertNewList();

  const handleSubmit = async () => {
    insertNewList();
    dispatch(setShowToast({ text: "New shopping list created!" }));
    handleDismiss();
  };

  return (
    <FancyModalWithRoundTop
      isOpen={showAddNewListModal}
      onDidDismiss={handleDismiss}
      height="220px"
    >
      <ModalHeader
        title="Create New Shopping List"
        handleClose={handleDismiss}
      />
      <IonContent>
        <IonItem lines="none">
          <IonLabel position="stacked">List Name</IonLabel>
          <StyledIonInput
            placeholder="ex: Weekly List, Desserts, Party"
            value={value}
            onIonChange={({ detail }) => setValue(detail.value!)}
          />
        </IonItem>
        <StyledFlex>
          <IonButton onClick={handleSubmit} color="secondary">
            Create New List
          </IonButton>
        </StyledFlex>
      </IonContent>
    </FancyModalWithRoundTop>
  );
}

const StyledFlex = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
  padding-right: 14px;
`;
