import { IonContent, IonList } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalHeader from "../../../../components/headers/ModalHeader";
import SaveFooterButton from "../../../../components/layout/SaveFooterButton";
import ShoppingListCheckBox from "../../../../components/listItem/ShoppingListCheckBox";
import BlockSeparator from "../../../../components/misc/BlockSeparator";
import { FancyModalWithRoundTop } from "../../../../components/modals/FancyModalWithRoundTop";
import useInsertIngredientToList from "../../../../gql/mutations/useInsertIngredientToList.graphql";
import useGetAllIngredientsInWeek from "../../../../gql/query/useGetAllIngredientsInWeek.graphql";
import {
  checkIngredients,
  IRecipeIngredients,
  setSelectedIngredient,
  setShowIngredientToListModal,
  unCheckIngredients,
} from "../../../../redux/Planner/AddInGredientsToListSlice";
import { IAppState } from "../../../../redux/store";

export default function AddIngredientsToListModel() {
  const dispatch = useDispatch();
  const { selectedIngredients, showAddIngredientToListModal } = useSelector(
    ({ addIngredientsToListSlice }: IAppState) => addIngredientsToListSlice
  );

  const { data, loading, error } = useGetAllIngredientsInWeek();
  const handleDismiss = () => dispatch(setShowIngredientToListModal(false));
  const isFound = (
    id: string,
    _date: string,
    _index: number,
    _recipe_Id: string
  ) =>
    !!selectedIngredients.find(
      ({ date, recipe_index, ingredients, recipe_id }) =>
        date === _date &&
        recipe_index === _index &&
        ingredients.find((e) => e === id) &&
        recipe_id === _recipe_Id
    );

  const handleCheck = (
    isCheck: boolean,
    id: string,
    recipe_id: string,
    recipe_index: number,
    date: string
  ) => {
    if (isCheck) {
      dispatch(checkIngredients({ recipe_id, id, date, recipe_index }));
    } else {
      dispatch(unCheckIngredients({ recipe_id, id, date, recipe_index }));
    }
  };

  const preCheckAllItems = () => {
    const ids: IRecipeIngredients[] = data!.planner!.map(
      ({ date, index, recipe: { id, recipe_ingredients_list } }) => {
        return {
          recipe_id: id,
          date,
          recipe_index: index,
          ingredients: recipe_ingredients_list.map((e) => e.id),
        };
      }
    );

    dispatch(setSelectedIngredient(ids));
  };

  const getTotalIngredientsCount = () =>
    selectedIngredients
      .map(({ ingredients }) => {
        return [...ingredients];
      })
      .flat().length;

  const { insertIngredientToList } = useInsertIngredientToList();
  const handleSubmit = async () => {
    await insertIngredientToList();
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
          ({
            date,
            index,
            recipe: { id: recipe_id, title, recipe_ingredients_list },
          }) => {
            if (!recipe_ingredients_list.length) return null;
            return (
              <React.Fragment key={date + index + recipe_id}>
                <BlockSeparator title={title} subTitle={date} />
                <IonList lines="full">
                  {recipe_ingredients_list.map(
                    ({ id, quantity, comment, name, unit }) => (
                      <ShoppingListCheckBox
                        value={id}
                        isChecked={isFound(id, date, index, recipe_id)}
                        onChange={(isChecked: boolean, id: string) =>
                          handleCheck(isChecked, id, recipe_id, index, date)
                        }
                        key={id}
                        text={name!}
                        quantity={`${quantity || ""} ${unit || ""}`}
                        comment={comment || ""}
                      />
                    )
                  )}
                </IonList>
              </React.Fragment>
            );
          }
        )}
      </>
    );
  }

  return (
    <FancyModalWithRoundTop
      isOpen={showAddIngredientToListModal}
      onDidDismiss={handleDismiss}
      onWillPresent={preCheckAllItems}
    >
      <ModalHeader
        title="Add Ingredients to List"
        handleClose={handleDismiss}
      />
      <IonContent>{content}</IonContent>
      <SaveFooterButton
        text={`Add ${getTotalIngredientsCount()} Ingredients To List`}
        action={handleSubmit}
      />
    </FancyModalWithRoundTop>
  );
}
