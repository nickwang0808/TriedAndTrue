import { IonContent, IonItem, IonLabel, IonList } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import ModalHeader from "../../../components/headers/ModalHeader";
import { FancyModalWithRoundTop } from "../../../components/modals/FancyModalWithRoundTop";
import useDeleteAllListItems from "../../../gql/mutations/useDeleteAllListItems.graphql";
import useDeleteListById from "../../../gql/mutations/useDeleteListById.graphql";
import useUncheckAllListItems from "../../../gql/mutations/useUncheckAllListItems.graphql";
import { setShowConfigShoppingListModal } from "../../../redux/ShoppingList/ShoppingListDetailsSlice";
import { IAppState } from "../../../redux/store";

export default function ConfigureShoppingList() {
  const { showConfigShoppingListModal, listId: id } = useSelector(
    ({ shoppingListDetailSlice }: IAppState) => shoppingListDetailSlice
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const handleDismiss = () => dispatch(setShowConfigShoppingListModal(false));

  const { deleteListById } = useDeleteListById(id);
  const { deleteAllListItems } = useDeleteAllListItems(id);
  const { uncheckAllListItems } = useUncheckAllListItems(id);

  const handleReset = () => {
    uncheckAllListItems();
    handleDismiss();
  };
  const handleRemoveAll = () => {
    console.log(id);
    deleteAllListItems();
    handleDismiss();
  };
  const handleDelete = () => {
    history.goBack();
    deleteListById();
    handleDismiss();
  };

  return (
    <FancyModalWithRoundTop
      isOpen={!!showConfigShoppingListModal}
      onDidDismiss={handleDismiss}
      height="270px"
    >
      <ModalHeader
        title="Configure Shopping List"
        handleClose={handleDismiss}
      />
      <IonContent>
        <IonList lines="full">
          <IonItem onClick={handleReset}>
            <IonLabel color="primary">Reset Checked Items</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel color="primary">Rename List</IonLabel>
          </IonItem>
          <IonItem onClick={handleRemoveAll}>
            <IonLabel color="primary">Remove All Items</IonLabel>
          </IonItem>
          <IonItem onClick={handleDelete}>
            <IonLabel color="primary">Delete List</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </FancyModalWithRoundTop>
  );
}
