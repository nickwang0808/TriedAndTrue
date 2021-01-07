import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import { add } from "ionicons/icons";
import React, { useEffect } from "react";
import RecipeCard from "../../components/card/RecipeCard";
import { GetAllRecipeQuery } from "../../generated/graphql";
import { GET_ALL_RECIPES } from "../../gql/query/getAllRecipes";
import NoRecipe from "./NoRecipe";

export default function RecipePage() {
  const { error, loading, data, refetch } = useQuery<GetAllRecipeQuery>(
    GET_ALL_RECIPES
  );
  useEffect(() => {
    console.log(data);
  }, [data]);

  // TODO: use update cache and get rid of this
  useIonViewWillEnter(() => refetch());

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle color="primary">My Recipes</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={add} color="secondary" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <StyledSearchBar />
        {!data?.recipe.length ? (
          <NoRecipe />
        ) : (
          <StyledGrid>
            {data.recipe.map((props, i) => {
              return <RecipeCard key={props.title + i} {...props} />;
            })}
          </StyledGrid>
        )}
      </IonContent>
    </IonPage>
  );
}

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;

  padding: 8px;
`;

const StyledSearchBar = styled(IonSearchbar)`
  --color: var(--ion-color-primary);
  --icon-color: var(--ion-color-primary);
  --box-shadow: none;

  .searchbar-has-focus {
    border: 1px solid var(--ion-color-primary);
  }

  & > div {
    border: 1px solid var(--ion-color-primary);
  }
`;
