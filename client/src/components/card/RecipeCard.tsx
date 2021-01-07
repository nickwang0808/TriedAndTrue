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

interface IProps {
  title: string;
  img?: string | null;
  total_time?: number | null;
  onClick: () => void;
}

export default function RecipeCard({
  img,
  title,
  total_time,
  onClick,
}: IProps) {
  return (
    <StyledCard onClick={onClick} mode="md">
      <StyledImg src="https://picsum.photos/200/300" />
      <StyledIonHeader mode="md">
        <IonCardTitle mode="md">{title}</IonCardTitle>
        {total_time && (
          <IonCardSubtitle mode="md">
            <IonIcon mode="md" icon={cookTimeCLock} />
            {total_time}
          </IonCardSubtitle>
        )}
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
