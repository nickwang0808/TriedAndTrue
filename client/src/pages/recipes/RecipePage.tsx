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
import styled from "styled-components";
import RecipeCard from "../../components/card/RecipeCard";

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
        <StyledGrid>
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </StyledGrid>
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
