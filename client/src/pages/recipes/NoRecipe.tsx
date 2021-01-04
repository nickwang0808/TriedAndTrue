import styled from "@emotion/styled";
import { IonButton } from "@ionic/react";
import React from "react";

export default function NoRecipe() {
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
