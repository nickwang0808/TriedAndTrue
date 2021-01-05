import styled from "@emotion/styled";
import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import React from "react";

export default function AddCardOutLined() {
  return (
    <StyledFlexBox>
      <StyledIonIcon icon={add} size="large" color="secondary" />
    </StyledFlexBox>
  );
}

const StyledFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 8px;
`;

const StyledIonIcon = styled(IonIcon)`
  border: 1px solid var(--ion-color-secondary);
  padding: 18px;
`;
