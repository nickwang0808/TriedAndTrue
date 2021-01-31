import styled from "@emotion/styled";
import {
  IonButton,
  IonButtons,
  IonCheckbox,
  IonIcon,
  IonItem,
} from "@ionic/react";
import React from "react";
import lightPencil from "../../assets/svg/lightPencil.svg";
interface IProps {
  text: string;
  quantity?: string;
  comment?: string;
  value: string;
  isChecked: boolean;
  onChange: (isChecked: boolean, value: string) => void;
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
    <StyledIonItem lines="full">
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
      <IonButtons slot="end">
        <IonButton onClick={() => console.log("clicked")}>
          <IonIcon icon={lightPencil} />
        </IonButton>
      </IonButtons>
    </StyledIonItem>
  );
}

const StyledIonItem = styled(IonItem)`
  --inner-padding-end: 0;
`;

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
