import { IonContent } from "@ionic/react";
import { format } from "date-fns";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RecipeCard from "../../../../components/card/RecipeCard";
import SaveFooterButton from "../../../../components/layout/SaveFooterButton";
import StyledRecipeGrid from "../../../../components/layout/StyledRecipeGrid";
import StyledSearchBar from "../../../../components/misc/SearchBar";
import { StyledFullScreenModal } from "../../../../components/modals/fullScreenModalBase";
import useAddRecipesToPlanner from "../../../../gql/mutations/useInsertRecipeToPlanner";
import useGetAllRecipes from "../../../../gql/query/useGetAllRecipes";
import {
  appendSelectedRecipe,
  clearSelectedRecipe,
  closePlannerModal,
  deSelectRecipe,
} from "../../../../redux/Planner/PlannerModalSlice";
import { IAppState } from "../../../../redux/store";
import getPlannerRecipeCount from "../../../../utils/getPlannerRecipeCount";
import Header from "./Header";

export default function AddMultiRecipeToPlannerModal() {
  const { data, loading, error } = useGetAllRecipes();
  const { addRecipesToPlanner, error_m } = useAddRecipesToPlanner();

  const { selectedRecipes, showModal, dateToModify } = useSelector(
    (state: IAppState) => state.plannerModalSlice
  );

  const dispatch = useDispatch();

  const handleSelect = (recipe_id: string) =>
    selectedRecipes.find((e) => e === recipe_id)
      ? dispatch(deSelectRecipe(recipe_id))
      : dispatch(appendSelectedRecipe(recipe_id));

  const handleSubmit = async () => {
    const date = format(new Date(dateToModify as string), "yyyy-MM-dd");
    const indexOffset = getPlannerRecipeCount(date);
    const objects = selectedRecipes.map((id, index) => {
      return { date, index: index + indexOffset, recipe_id: id };
    });

    dispatch(closePlannerModal());
    await addRecipesToPlanner({ variables: { objects } });
    dispatch(clearSelectedRecipe());
    return;
  };

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (error_m) return <p>{error_m.message}</p>;
  return (
    <StyledFullScreenModal
      onDidDismiss={() => dispatch(closePlannerModal())}
      isOpen={showModal}
    >
      <Header />
      <IonContent>
        <StyledSearchBar />
        <StyledRecipeGrid>
          {data?.recipe.map((recipe) => {
            return (
              <RecipeCard
                key={recipe.id}
                {...recipe}
                onClick={() => handleSelect(recipe.id)}
                showOverlay={!!selectedRecipes.find((e) => e === recipe.id)}
              />
            );
          })}
        </StyledRecipeGrid>
      </IonContent>
      <SaveFooterButton
        text={`Add ${selectedRecipes.length} Recipe to List`}
        action={handleSubmit}
        disabled={selectedRecipes.length === 0}
      />
    </StyledFullScreenModal>
  );
}
