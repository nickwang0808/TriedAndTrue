import styled from "@emotion/styled";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
} from "@ionic/react";
import React from "react";
import cookTimeCLock from "../../assets/svg/cookTimeClock.svg";

export default function RecipeCard() {
  return (
    <StyledCard mode="md">
      <StyledImg src="https://picsum.photos/200/300" />
      <StyledIonHeader mode="md">
        <IonCardTitle mode="md">Hometown Grilled Hamburgers</IonCardTitle>
        <IonCardSubtitle mode="md">
          <IonIcon mode="md" icon={cookTimeCLock} /> 45min
        </IonCardSubtitle>
      </StyledIonHeader>
    </StyledCard>
  );
}

const StyledCard = styled(IonCard)`
  margin: 0;
  border-radius: 0;

  border: 1px solid #dcdcdc;
  box-shadow: none;
`;
const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 135px;
  margin: 1px;
`;

const StyledIonHeader = styled(IonCardHeader)`
  padding: 8px;
`;
