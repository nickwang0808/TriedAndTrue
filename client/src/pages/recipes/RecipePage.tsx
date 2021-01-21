import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonPage,
} from "@ionic/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router";
import RecipeCard from "../../components/card/RecipeCard";
import RecipePageHeader from "../../components/headers/RecipePageHeader";
import StyledRecipeGrid from "../../components/layout/StyledRecipeGrid";
import StyledSearchBar from "../../components/misc/SearchBar";
import useGetAllRecipes from "../../gql/query/useGetAllRecipes";
import { setRecipeDetailsId } from "../../redux/RecipeDetailsSlice/recipeDetailsSlice";
import NoRecipe from "./NoRecipe";

const RecipePage: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState<string>();
  const { error, loading, data, fetchMore } = useGetAllRecipes(keyword);

  const handleIonChange = (value: string | undefined) => {
    if (value === keyword) return;
    if (!value) {
      setKeyword(undefined);
    } else {
      setKeyword(`%${value}%`);
    }
  };

  const handleFetchMore = async ($event: CustomEvent<void>) => {
    await fetchMore({
      variables: {
        offset: data?.recipe.length,
      },
    });
    ($event.target as HTMLIonInfiniteScrollElement).complete();
  };

  // if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (!data) return <p>no recipe</p>;
  return (
    <IonPage>
      <RecipePageHeader />

      <IonContent fullscreen>
        <StyledSearchBar
          animated
          debounce={500}
          value={keyword?.slice(1, -1)}
          onIonChange={(e) => handleIonChange(e.detail.value)}
        />
        {!data?.recipe.length ? (
          <NoRecipe
            text={
              !keyword
                ? "No Recipes Yet! Use the “PLUS” button to start adding recipes!"
                : "No recipes to show you!"
            }
          />
        ) : (
          <StyledRecipeGrid>
            {data.recipe.map((props) => {
              return (
                <RecipeCard
                  key={props.id}
                  {...props}
                  onClick={() => dispatch(setRecipeDetailsId(props.id))}
                />
              );
            })}
          </StyledRecipeGrid>
        )}

        <IonInfiniteScroll
          threshold="100px"
          // disabled={disableInfiniteScroll}
          onIonInfinite={(e: CustomEvent<void>) => handleFetchMore(e)}
        >
          <IonInfiniteScrollContent loadingText="Loading more recipes ..."></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default RecipePage;
