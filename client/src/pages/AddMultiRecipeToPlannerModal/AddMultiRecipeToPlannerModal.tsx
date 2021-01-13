import { IonContent } from "@ionic/react";
import React from "react";
import RecipeCard from "../../components/card/RecipeCard";
import StyledRecipeGrid from "../../components/layout/StyledRecipeGrid";
import StyledSearchBar from "../../components/misc/SearchBar";
import { StyledFullScreenModal } from "../../components/modals/fullScreenModalBase";
import useGetAllRecipes from "../../gql/query/useGetAllRecipes";
import Header from "./Header";

export default function AddMultiRecipeToPlannerModal() {
  const { data, loading, error } = useGetAllRecipes();

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <StyledFullScreenModal isOpen>
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
