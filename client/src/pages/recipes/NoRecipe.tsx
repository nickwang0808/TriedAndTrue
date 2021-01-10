import styled from "@emotion/styled";
import { IonButton } from "@ionic/react";
import React from "react";
import { useDispatch } from "react-redux";
import { setShowAddOrEditRecipe } from "../../redux/AddOrEditRecipe/AddOrEditRecipeSlice";

export default function NoRecipe() {
  const dispatch = useDispatch();

  return (
    <StyledWrapper>
      <p className="ion-text-center">
        Automatically import your favorite recipe or manually add one below.
      </p>
      <IonButton color="secondary">Import from Website</IonButton>
      <IonButton
        fill="outline"
        color="secondary"
        onClick={() => dispatch(setShowAddOrEditRecipe(true))}
      >
        Manually Add
      </IonButton>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
