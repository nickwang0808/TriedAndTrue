import { IonContent } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RecipeCard from "../../components/card/RecipeCard";
import StyledRecipeGrid from "../../components/layout/StyledRecipeGrid";
import StyledSearchBar from "../../components/misc/SearchBar";
import { StyledFullScreenModal } from "../../components/modals/fullScreenModalBase";
import useGetAllRecipes from "../../gql/query/useGetAllRecipes";
import { closePlannerModal } from "../../redux/Planner/PlannerModalSlice";
import { IAppState } from "../../redux/store";
import Header from "./Header";

export default function AddMultiRecipeToPlannerModal() {
  const { data, loading, error } = useGetAllRecipes();
  const { selectedRecipes, showModal } = useSelector(
    (state: IAppState) => state.plannerModalSlice
  );

  const dispatch = useDispatch();

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;
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
              <RecipeCard key={recipe.id} {...recipe} onClick={() => {}} />
            );
          })}
        </StyledRecipeGrid>
      </IonContent>
    </StyledFullScreenModal>
  );
}
