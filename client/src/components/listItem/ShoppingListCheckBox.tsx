import styled from "@emotion/styled";
import { IonCheckbox, IonItem } from "@ionic/react";
import React from "react";

interface IProps {
  text: string;
  quantity?: string;
  comment?: string;
  value: string;
  isChecked: boolean;
  onChange: (isChecked: boolean, id: string) => void;
}

export default function ShoppingListCheckBox({
  text,
  comment,
  quantity,
  value,
  isChecked,
  onChange,
}: IProps) {
  return (
    <IonItem lines="full">
      <StyledFlexBox>
        <StyledTitle subContent={quantity}>{text}</StyledTitle>
        <StyledComment>{comment}</StyledComment>
      </StyledFlexBox>
      <StyledCheckBox
        slot="start"
        color="secondary"
        value={value}
        checked={isChecked}
        onIonChange={({ detail: { checked, value } }) =>
          onChange(checked, value)
        }
      />
    </IonItem>
  );
}

const StyledCheckBox = styled(IonCheckbox)`
  margin-inline-end: 16px !important;
`;

const StyledFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const StyledTitle = styled.div<{ subContent?: string }>`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  color: #192938;

  &::after {
    margin-left: 8px;
    content: "${({ subContent }) => subContent && `(${subContent})`}";
    font-weight: 400;
  }
`;

const StyledComment = styled.div`
  font-family: Open Sans;
  font-style: italic;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;

  /* Red */

  color: var(--ion-color-secondary);
`;
