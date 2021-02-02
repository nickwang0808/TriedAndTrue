import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddOrEditRecipeHeader from "../../components/headers/AddOrEditRecipeHeader";
import LoaderCentered from "../../components/loading/LoaderCentered";
import { FancyModalWithRoundTop } from "../../components/modals/FancyModalWithRoundTop";
import useGetRecipeDetails from "../../gql/query/useGetRecipeDetails";
import { resetAddOrEditRecipe } from "../../redux/AddOrEditRecipe/AddOrEditRecipeSlice";
import { IAppState } from "../../redux/store";
import {
  emptyDefaultValue,
  IRecipeForm,
  mealType,
} from "../../utils/recipeSchema";
import AddOrEditRecipeChild from "./AddOrEditRecipeChild";

export default function AddOrEditRecipeModal() {
  const dispatch = useDispatch();
  const { id, showAddOrEditRecipe } = useSelector(
    (state: IAppState) => state.addOrEditRecipeSlice
  );

  const { error, loading, data, getRecipeDetails } = useGetRecipeDetails();
  const runQuery = () => getRecipeDetails({ variables: { id: id! } });
  // prettier-ignore
  const handleDismiss = () => dispatch(resetAddOrEditRecipe());

  let content;
  let defaultValue: IRecipeForm = emptyDefaultValue;
  if (loading) {
    content = <LoaderCentered />;
  } else if (error) {
    content = <p>{error.message}</p>;
  } else {
    // prettier-ignore
    if (data?.recipe_by_pk && id!==null) {
      // set default value if recipe info is found
      const {cuisine, total_time, meal_type, yields, title,directions, recipe_ingredients_list, img} = data.recipe_by_pk!
      defaultValue={
          img:img || null,
          cuisine: cuisine || null,
          total_time: total_time || null,
          meal_type: (meal_type as mealType) || null,
          yields: yields || null,
          title: title || null,
          directions: (directions as Array<{ value: string }>) || [],
          ingredients:
            recipe_ingredients_list?.map((ing) => ({
              value: ing.formatted_text as string,
            })) || [],
      }
  }
    content = (
      <AddOrEditRecipeChild
        handleDismiss={handleDismiss}
        id={id}
        isCreateNew={id === null ? true : false}
        defaultValues={defaultValue}
      />
    );
  }

  return (
    <FancyModalWithRoundTop
      isOpen={showAddOrEditRecipe}
      onDidDismiss={handleDismiss}
      onWillPresent={runQuery}
    >
      <AddOrEditRecipeHeader isNew={id === null ? true : false} />
      {content}
    </FancyModalWithRoundTop>
  );
}
