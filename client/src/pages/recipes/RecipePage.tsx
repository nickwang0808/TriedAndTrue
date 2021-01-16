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
import { setShowAddOrEditRecipe } from "../../redux/AddOrEditRecipe/AddOrEditRecipeSlice";
import { setRecipeDetailsId } from "../../redux/RecipeDetailsSlice/recipeDetailsSlice";
import NoRecipe from "./NoRecipe";

const RecipePage: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState<string>();
  const { error, loading, data } = useGetAllRecipes(keyword);

  // if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle color="primary">My Recipes</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => dispatch(setShowAddOrEditRecipe(true))}>
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
          onIonChange={(e) => {
            const { value } = e.detail;
            console.log(value);
            if (value === keyword) return;
            setKeyword(`%${value}%`);
          }}
        />
        {!data?.recipe.length ? (
          <NoRecipe />
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
