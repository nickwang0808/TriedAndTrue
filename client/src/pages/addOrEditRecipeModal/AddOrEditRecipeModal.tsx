import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddOrEditRecipeHeader from "../../components/headers/AddOrEditRecipeHeader";
import { FancyModalWithRoundTop } from "../../components/modals/FancyModalWithRoundTop";
import useGetRecipeDetails from "../../gql/query/useGetRecipeDetails";
import { resetAddOrEditRecipe } from "../../redux/AddOrEditRecipe/AddOrEditRecipeSlice";
import { IAppState } from "../../redux/store";
import { emptyDefaultValue, mealType } from "../../utils/recipeSchema";
import AddOrEditRecipeChild from "./AddOrEditRecipeChild";

export default function AddOrEditRecipeModal() {
  const dispatch = useDispatch();
  const [disableSave, setDisableSave] = useState(true);
  const { id, showAddOrEditRecipe } = useSelector(
    (state: IAppState) => state.addOrEditRecipeSlice
  );

  const { error, loading, recipe_by_pk } = useGetRecipeDetails(id);
  // prettier-ignore
  const handleDismiss = () => dispatch(resetAddOrEditRecipe());

  if (loading) return <p>loading ...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <FancyModalWithRoundTop
      isOpen={showAddOrEditRecipe}
      onDidDismiss={handleDismiss}
    >
      <AddOrEditRecipeHeader isNew={id === null ? true : false} />
      <AddOrEditRecipeChild
        handleDismiss={handleDismiss}
        id={id}
        isCreateNew={id === null ? true : false}
        defaultValues={
          id === "null"
            ? emptyDefaultValue
            : {
                // sorry for the messy object mapping
                cuisine: recipe_by_pk?.cuisine || null,
                total_time: recipe_by_pk?.total_time || null,
                meal_type: (recipe_by_pk?.meal_type as mealType) || null,
                yields: recipe_by_pk?.yields || null,
                title: recipe_by_pk?.title || null,
                directions:
                  (recipe_by_pk?.directions as Array<{ value: string }>) || [],
                ingredients:
                  recipe_by_pk?.recipe_ingredients_list.map((ing) => ({
                    value: ing.formatted_text as string,
                  })) || [],
              }
        }
      />
    </FancyModalWithRoundTop>
  );
}
