import styled from "@emotion/styled";
import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import React from "react";

interface IProps {
  onClick: () => void;
}

export default function AddCardOutLined({ onClick }: IProps) {
  return (
    <StyledFlexBox onClick={onClick}>
      <StyledIonIcon icon={add} color="secondary" />
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
  padding: 16px;
  font-size: 24px;
`;
