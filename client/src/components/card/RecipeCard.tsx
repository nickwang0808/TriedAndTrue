import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
} from "@ionic/react";
import React from "react";
import styled from "styled-components";
import cookTimeCLock from "../../assets/svg/cookTimeClock.svg";

export default function RecipeCard() {
  return (
    <StyledCard>
      <StyledImg src="https://picsum.photos/200/300" />
      <IonCardHeader>
        <IonCardTitle>Hometown Grilled Hamburgers</IonCardTitle>
        <IonCardSubtitle>
          <IonIcon icon={cookTimeCLock} /> 45min
        </IonCardSubtitle>
      </IonCardHeader>
    </StyledCard>
  );
}

const StyledCard = styled(IonCard)`
  margin: 0;
`;
const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 135px;
`;
