import { IonContent, IonItem, IonLabel } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalHeader from "../../../components/headers/ModalHeader";
import { StyledIonInput } from "../../../components/Input/StyledIonInput";
import RecipeThumbNail from "../../../components/listItem/RecipeThumbNail";
import LoaderCentered from "../../../components/loading/LoaderCentered";
import BlockSeparator from "../../../components/misc/BlockSeparator";
import { FancyModalWithRoundTop } from "../../../components/modals/FancyModalWithRoundTop";
import useGetListItemById, {
  IListItemRecipeRef,
} from "../../../gql/query/useGetListItemById.graphql";
import { setShowItemDetails } from "../../../redux/ShoppingList/ShoppingListDetailsSlice";
import { IAppState } from "../../../redux/store";

export default function ShoppingItemDetailsModal() {
  const dispatch = useDispatch();
  const handleDismiss = () => dispatch(setShowItemDetails(null));

  const { showItemDetails } = useSelector(
    ({ shoppingListDetailSlice }: IAppState) => shoppingListDetailSlice
  );

  const { data, loading, error } = useGetListItemById(showItemDetails!);

  let content;
  if (loading) {
    content = <LoaderCentered />;
  } else if (error) {
    content = <p>{error.message}</p>;
  } else if (!data) {
    content = <p>No items yet</p>;
  } else {
    const { list_items_by_pk } = data;

    content = (
      <>
        <ModalHeader title="beans" handleClose={handleDismiss} />

        <IonContent>
          <IonItem lines="none">
            <IonLabel position="stacked">Quantity</IonLabel>
            <StyledIonInput />
          </IonItem>
          <IonItem lines="none">
            <IonLabel position="stacked">Notes</IonLabel>
            <StyledIonInput />
          </IonItem>
          <IonItem lines="none" button onClick={() => {}}>
            <IonLabel>Remove Item</IonLabel>
          </IonItem>
          <BlockSeparator title="Added From" />

          {(list_items_by_pk?.recipes as IListItemRecipeRef[])?.map(
            (recipe) => (
              <RecipeThumbNail {...recipe} />
            )
          )}
        </IonContent>
      </>
    );
  }

  return (
    <FancyModalWithRoundTop
      isOpen={!!showItemDetails}
      onDidDismiss={handleDismiss}
    >
      {content}
    </FancyModalWithRoundTop>
  );
}
