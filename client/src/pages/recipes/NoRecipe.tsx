import styled from "@emotion/styled";
import { IonButton } from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";

export default function NoRecipe() {
  const history = useHistory();

  return (
    <StyledWrapper>
      <p className="ion-text-center">
        Automatically import your favorite recipe or manually add one below.
      </p>
      <IonButton color="secondary">Import from Website</IonButton>
      <IonButton
        fill="outline"
        color="secondary"
        onClick={() => history.push("/add-recipe/null")}
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
