import styled from "@emotion/styled";
import { IonItem, IonTextarea } from "@ionic/react";
import React from "react";

interface IProps {
  index: number;
}

export default function AddInstructionLIstItem({ index }: IProps) {
  return (
    <StyledWrapper>
      <StyledIndexBox slot="start">{index}</StyledIndexBox>
      <IonTextarea
        placeholder="Add recipe instructions here..."
        autoGrow
        mode="ios"
        rows={4}
      ></IonTextarea>
    </StyledWrapper>
  );
}

const StyledWrapper = styled(IonItem)`
  --padding-start: 8px;
  --padding-top: 8px;
  --padding-bottom: 8px;

  align-items: unset;

  & ion-icon {
    margin: 0;
  }
`;

const StyledIndexBox = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-right: 8px; */

  border: 1px solid black;
  font-weight: 700;

  margin-inline: 0px 8px;
`;
