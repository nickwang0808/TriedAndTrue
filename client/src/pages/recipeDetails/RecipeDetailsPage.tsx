import styled from "@emotion/styled";
import {
  IonContent,
  IonLabel,
  IonList,
  IonPage,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import React, { useState } from "react";
import CookTime from "../../components/detailsPageComp/CookTime";
import DetailsPageTitle from "../../components/detailsPageComp/DetailsPageTitle";
import DirectionsListItem from "../../components/listItem/DirectionsListItem";
import IngredientListItem from "../../components/listItem/IngredientListItem";

export default function RecipeDetailsPage() {
  const [showDirections, setShowDirections] = useState(false);

  const directions = [1, 2, 3, 4, 5].map((num) => (
    <DirectionsListItem
      key={num}
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quibusdam autem sapiente delectus culpa unde quas nulla consequatur enim. At accusantium velit similique optio a temporibus, nobis et! Placeat, eaque!"
      showBackground={num % 2 === 0 ? true : false}
      index={num}
    />
  ));

  const ingredients = [1, 2, 3, 4, 5].map((num) => (
    <IngredientListItem
      key={num}
      materialText="beef"
      quantityText="1 1/2 lbs"
      showBackground={num % 2 === 0 ? true : false}
    />
  ));
  return (
    <IonPage>
      <IonContent>
        <DetailsPageTitle />

        <CookTime />

        <IonSegment
          mode="md"
          value={showDirections ? "directions" : "ingredients"}
          onIonChange={(e) =>
            setShowDirections(e.detail.value === "ingredients" ? false : true)
          }
        >
          <IonSegmentButton value="ingredients">
            <IonLabel>Ingredients</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="directions">
            <IonLabel>Directions</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        <StyledIngredientList lines="none">
          {showDirections ? directions : ingredients}
        </StyledIngredientList>
      </IonContent>
    </IonPage>
  );
}

const StyledIngredientList = styled(IonList)`
  padding: 8px;
`;
