import styled from "@emotion/styled";
import { IonButton } from "@ionic/react";
import React from "react";
import { useDispatch } from "react-redux";
import { setShowAddOrEditRecipe } from "../../redux/AddOrEditRecipe/AddOrEditRecipeSlice";

interface IProps {
  text: string;
}

export default function NoRecipe({ text }: IProps) {
  const dispatch = useDispatch();

  return (
    <StyledWrapper>
      <p className="ion-padding-bottom">{text}</p>
      <IonButton color="secondary">Import from Website</IonButton>
      <IonButton
        fill="outline"
        color="secondary"
        onClick={() => dispatch(setShowAddOrEditRecipe(true))}
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
  padding: 0 24px 24px 24px;
`;
