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
} from "@ionic/react";
import { add } from "ionicons/icons";
import React from "react";

export default function RecipePage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Recipes</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={add} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonSearchbar />
      </IonHeader>

      <IonContent fullscreen>
        <NoRecipe />
        {/* <StyledGrid>
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </StyledGrid> */}
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

function NoRecipe() {
  return (
    <StyledWrapper>
      <p className="ion-text-center">
        Automatically import your favorite recipe or manually add one below.
      </p>
      <IonButton>Import from Website</IonButton>
      <IonButton fill="outline">Manually Add</IonButton>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
