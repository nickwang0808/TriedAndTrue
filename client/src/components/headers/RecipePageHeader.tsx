import styled from "@emotion/styled";
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add } from "ionicons/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { setShowAddRecipeControlModal } from "../../redux/AddOrEditRecipe/AddRecipeControlSlice";
import StyledIonIcon from "../misc/StyledIonIcon";

export default function RecipePageHeader() {
  const dispatch = useDispatch();
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle color="primary">Recipes</IonTitle>
        <IonButtons slot="end">
          <IonButton
            onClick={() => dispatch(setShowAddRecipeControlModal(true))}
          >
            {/* <StylizedTitleButtonText>Add Recipe</StylizedTitleButtonText> */}
            {/* <IonIcon icon={add} size="large" color="secondary" /> */}
            <StyledIonIcon icon={add} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
}

const StylizedTitleButtonText = styled.div`
  color: var(--ion-color-secondary);
  font-family: SuraBold;
  font-size: 16px;
`;
