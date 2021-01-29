import { IonContent, IonItem, IonLabel, IonList } from "@ionic/react";
import { format } from "date-fns";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalHeader from "../../../../components/headers/ModalHeader";
import { FancyModalWithRoundTop } from "../../../../components/modals/FancyModalWithRoundTop";
import useInsertIngredientToList from "../../../../gql/mutations/useInsertIngredientToList.graphql";
import useGetAllShoppingLists from "../../../../gql/query/useGetAllShoppingLists.graphql";
import { setShowIngredientToListModal } from "../../../../redux/Planner/AddInGredientsToListSlice";
import { IAppState, store } from "../../../../redux/store";
import { setShowToast } from "../../../../redux/toastSlice/toastSlice";

export default function SelectListModal() {
  const dispatch = useDispatch();
  const { selectedIngredients, showSelectListModal } = useSelector(
    ({ addIngredientsToListSlice }: IAppState) => addIngredientsToListSlice
  );

  const handleDismiss = () => {};

  const { data, loading, error } = useGetAllShoppingLists();

  const { insertIngredientToList } = useInsertIngredientToList();
  const handleSubmit = async () => {
    const { selectedWeek } = store.getState().plannerDateRangeSlice;

    const ingredientsIds = selectedIngredients
      .map(({ ingredients }) => {
        return [...ingredients];
      })
      .flat();

    await insertIngredientToList({
      variables: {
        date: format(new Date(selectedWeek), "yyyy-MM-dd"),
        ingredientsIds,
      },
    });

    dispatch(setShowToast("shopping list update"));
    dispatch(setShowIngredientToListModal(false));
    handleDismiss();
  };

  let content;
  if (loading) {
    content = <p>laoding ...</p>;
  } else if (error) {
    content = <p>{error.message}</p>;
  } else if (!data?.list?.length) {
    content = <p>no list yet</p>;
  } else {
    const { list } = data;
    content = (
      <IonList lines="full">
        {list.map(({ id, name }) => (
          <IonItem onClick={handleSubmit} key={id}>
            <IonLabel>{name}</IonLabel>
          </IonItem>
        ))}
      </IonList>
    );
  }

  return (
    <FancyModalWithRoundTop
      isOpen={showSelectListModal}
      onDidDismiss={handleDismiss}
      height="180px"
    >
      <ModalHeader title="Confirm Shopping List" handleClose={handleDismiss} />
      <IonContent>{content}</IonContent>
    </FancyModalWithRoundTop>
  );
}
