import { IonContent, IonItem, IonLabel, IonList } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalHeader from "../../../../components/headers/ModalHeader";
import LoaderCentered from "../../../../components/loading/LoaderCentered";
import { FancyModalWithRoundTop } from "../../../../components/modals/FancyModalWithRoundTop";
import useInsertIngredientToList from "../../../../gql/mutations/useInsertIngredientToList.graphql";
import useGetAllShoppingLists from "../../../../gql/query/useGetAllShoppingLists.graphql";
import { setShowSelectListModal } from "../../../../redux/Planner/AddIngredientsToListSlice";
import { IAppState } from "../../../../redux/store";

export default function SelectListModal() {
  const dispatch = useDispatch();
  const { showSelectListModal } = useSelector(
    ({ addIngredientsToListSlice }: IAppState) => addIngredientsToListSlice
  );

  const handleDismiss = () => dispatch(setShowSelectListModal(false));

  const { data, loading, error } = useGetAllShoppingLists();

  const { handleSubmit } = useInsertIngredientToList();

  let content;
  if (loading) {
    content = <LoaderCentered />;
  } else if (error) {
    content = <p>{error.message}</p>;
  } else if (!data?.list?.length) {
    content = <p>no list yet</p>;
  } else {
    const { list } = data;
    content = (
      <IonList lines="full">
        {list.map(({ id, name }) => (
          <IonItem
            onClick={() => {
              handleSubmit(id);
              handleDismiss();
            }}
            key={id}
          >
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
