import styled from "@emotion/styled";
import { IonCard, IonCardHeader, IonCardTitle } from "@ionic/react";
import React from "react";
import SelectedCardOverlay from "./SelectedCardOverlay";
interface IProps {
  title: string;
  img?: string | null;
  total_time?: number | null;
  onClick: () => void;
  showOverlay?: boolean;
}

export default function RecipeCard({
  img,
  title,
  total_time,
  onClick,
  showOverlay = false,
}: IProps) {
  return (
    <StyledCard onClick={onClick} mode="md">
      <StyledImgContainer>
        <img src="https://loremflickr.com/320/240/recipe" />
        {showOverlay && <SelectedCardOverlay />}
      </StyledImgContainer>
      <StyledIonHeader mode="md">
        <IonCardTitle color="primary" mode="md">
          {title}
        </IonCardTitle>
        {/* {total_time && (
          <IonCardSubtitle mode="md">
            <IonIcon mode="md" icon={cookTimeCLock} />
            {total_time}
          </IonCardSubtitle>
        )} */}
      </StyledIonHeader>
    </StyledCard>
  );
}

const StyledCard = styled(IonCard)`
  margin: 0;
  border-radius: 0;
  font-family: SuraRegular;
  border: 1px solid #dcdcdc;
  box-shadow: none;
`;
const StyledImgContainer = styled.div`
  & img {
    object-fit: cover;
    width: 100%;
    height: 135px;
  }
  padding: 1px;
  position: relative;
`;

const StyledIonHeader = styled(IonCardHeader)`
  padding: 0 8px 8px 8px;
`;
