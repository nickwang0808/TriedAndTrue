import styled from "@emotion/styled";
import { IonItem } from "@ionic/react";
import React from "react";

interface IProps {
  quantityText: string;
  materialText: string;
  showBackground?: boolean;
}

export default function IngredientListItem({
  materialText,
  quantityText,
  showBackground = false,
}: IProps) {
  return (
    <StyledWrapper showBackground={showBackground}>
      <StyledTitle>{quantityText}</StyledTitle>
      <div>{materialText}</div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled(IonItem)<{ showBackground: boolean }>`
  --background: ${(props) =>
    props.showBackground ? "rgba(227, 236, 240, 0.5)" : "none"};
  --padding-start: 0px;
  font-size: 14px;
`;

const StyledTitle = styled.div`
  margin-right: 8px;

  & + div {
    font-weight: 700;
    margin-right: 4px; /* separator between 2 titles */
  }
`;
