import { IonContent, IonList } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalHeader from "../../../../components/headers/ModalHeader";
import ShoppingListCheckBox from "../../../../components/listItem/ShoppingListCheckBox";
import BlockSeparator from "../../../../components/misc/BlockSeparator";
import { FancyModalWithRoundTop } from "../../../../components/modals/FancyModalWithRoundTop";
import useGetAllIngredientsInWeek from "../../../../gql/query/useGetAllIngredientsInWeek.graphql";
import {
  setSelectedIngredient,
  setShowIngredientToListModal,
} from "../../../../redux/Planner/AddInGredientsToListSlice";
import { IAppState } from "../../../../redux/store";

export default function AddIngredientsToListModel() {
  const dispatch = useDispatch();
  const { selectedIngredients, showAddIngredientToListModal } = useSelector(
    ({ addIngredientsToListSlice }: IAppState) => addIngredientsToListSlice
  );

  const { data, loading, error } = useGetAllIngredientsInWeek();
  const handleDismiss = () => dispatch(setShowIngredientToListModal(false));
  const isFound = (id: string) =>
    !!selectedIngredients.find((elem) => elem === id);
  const handleCheck = (isCheck: boolean, id: string) => {
    if (isCheck) {
      // add
      dispatch(setSelectedIngredient([...selectedIngredients, id]));
    } else {
      // remove
      dispatch(
        setSelectedIngredient(selectedIngredients.filter((elem) => elem !== id))
      );
    }
  };

  const preCheckAllItems = () => {
    const ids = data!
      .planner!.map(({ recipe }) => {
        return [
          ...recipe.recipe_ingredients_list.map((ing) => ing.id as string),
        ];
      })
      .flat();

    dispatch(setSelectedIngredient(ids));
  };

  let content;
  if (loading) {
    content = <p>Loading</p>;
  } else if (error) {
    content = <p>{error.message}</p>;
  } else if (!data?.planner) {
    content = <p>404 not found</p>;
  } else {
    const { planner } = data;
    content = (
      <>
        {planner?.map(
          ({ date, recipe: { id, title, recipe_ingredients_list } }) => {
            if (!recipe_ingredients_list.length) return null;
            return (
              <>
                <BlockSeparator
                  title={title}
                  subTitle={date}
                  key={`sep${id}`}
                />
                <IonList lines="full" key={id}>
                  {recipe_ingredients_list.map(
                    ({ id, quantity, comment, name, unit }) => (
                      <ShoppingListCheckBox
                        value={id}
                        isChecked={isFound(id)}
                        onChange={handleCheck}
                        key={id}
                        text={name!}
                        quantity={`${quantity || ""} ${unit || ""}`}
                        comment={comment || ""}
                      />
                    )
                  )}
                </IonList>
              </>
            );
          }
        )}
      </>
    );
  }

  return (
    <FancyModalWithRoundTop
      isOpen
      onDidDismiss={handleDismiss}
      onWillPresent={preCheckAllItems}
    >
      <ModalHeader
        title="Add Ingredients to List"
        handleClose={handleDismiss}
      />
      <IonContent>{content}</IonContent>
    </FancyModalWithRoundTop>
  );
}
