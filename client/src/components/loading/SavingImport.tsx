import styled from "@emotion/styled";
import { IonSpinner } from "@ionic/react";
import React from "react";

export default function SavingImport() {
  return (
    <StyledCenterContainer>
      <p>Saving Recipe, hold on</p>
      <IonSpinner color="secondary" />
    </StyledCenterContainer>
  );
}

const StyledCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
`;
