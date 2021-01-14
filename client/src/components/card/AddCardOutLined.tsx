import styled from "@emotion/styled";
import { IonIcon } from "@ionic/react";
import React from "react";
import addnew from "../../assets/svg/addnew.svg";

interface IProps {
  onClick: () => void;
}

export default function AddCardOutLined({ onClick }: IProps) {
  return (
    <StyledFlexBox onClick={onClick}>
      <StyledIonIcon icon={addnew} size="large" color="secondary" />
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
  padding: 10px;
`;
