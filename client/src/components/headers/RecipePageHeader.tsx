import styled from "@emotion/styled";
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useDispatch } from "react-redux";
import addnew from "../../assets/svg/addnew.svg";
import { setShowAddRecipeControlModal } from "../../redux/AddOrEditRecipe/AddRecipeControlSlice";

export default function RecipePageHeader() {
  const dispatch = useDispatch();
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle color="primary">Recipes</IonTitle>
        <IonButtons slot="end">
          <IonButton
            onClick={() => dispatch(setShowAddRecipeControlModal(true))}
          ><StylizedTitleButtonText>Add Recipe</StylizedTitleButtonText>
            <IonIcon icon={addnew} color="secondary" />
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