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

  const directions = (
    <>
      <DirectionsListItem
        showDelete={false}
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quibusdam autem sapiente delectus culpa unde quas nulla consequatur enim. At accusantium velit similique optio a temporibus, nobis et! Placeat, eaque!"
        index={1}
        showBackground
      />
      <DirectionsListItem
        showDelete={false}
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quibusdam autem sapiente delectus culpa unde quas nulla consequatur enim. At accusantium velit similique optio a temporibus, nobis et! Placeat, eaque!"
        index={2}
        // showBackground
      />
      <DirectionsListItem
        showDelete={false}
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quibusdam autem sapiente delectus culpa unde quas nulla consequatur enim. At accusantium velit similique optio a temporibus, nobis et! Placeat, eaque!"
        index={3}
        showBackground
      />
    </>
  );

  const ingredients = (
    <>
      <IngredientListItem
        materialText="beef"
        quantityText="1 1/2 lbs"
        showBackground
      />
      <IngredientListItem
        materialText="beef"
        quantityText="1 1/2 lbs"
        // showBackground
      />
      <IngredientListItem
        materialText="beef"
        quantityText="1 1/2 lbs"
        showBackground
      />
    </>
  );
  return (
    <IonPage>
      <IonContent>
        <DetailsPageTitle />

        <CookTime />

        <IonSegment
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
