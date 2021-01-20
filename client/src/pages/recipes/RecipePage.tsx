import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router";
import addnew from "../../assets/svg/addnew.svg";
import RecipeCard from "../../components/card/RecipeCard";
import StyledRecipeGrid from "../../components/layout/StyledRecipeGrid";
import StyledSearchBar from "../../components/misc/SearchBar";
import useGetAllRecipes from "../../gql/query/useGetAllRecipes";
import { setShowAddRecipeControlModal } from "../../redux/AddOrEditRecipe/AddRecipeControlSlice";
import { setRecipeDetailsId } from "../../redux/RecipeDetailsSlice/recipeDetailsSlice";
import NoRecipe from "./NoRecipe";

const RecipePage: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState<string>();
  const { error, loading, data } = useGetAllRecipes(keyword);

  const handleIonChange = (value: string | undefined) => {
    if (value === keyword) return;
    if (!value) {
      setKeyword(undefined);
    } else {
      setKeyword(`%${value}%`);
    }
  };

  // if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle color="primary">My Recipes</IonTitle>
          <IonButtons slot="end">
            <IonButton
              onClick={() => dispatch(setShowAddRecipeControlModal(true))}
            >
              <IonIcon icon={addnew} color="secondary" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

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
                ? "Automatically import your favorite recipe or manually add one below."
                : "No Recipe found."
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
      </IonContent>
    </IonPage>
  );
};

export default RecipePage;
