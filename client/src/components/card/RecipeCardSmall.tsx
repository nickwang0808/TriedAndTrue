import styled from "@emotion/styled";
import { IonCard, IonCardHeader, IonCardTitle } from "@ionic/react";
import React from "react";

interface IProps {
  title: string;
  img: string | null | undefined;
  id: string;
}

export default function RecipeCardSmall({ title, img, id }: IProps) {
  return (
    <StyledCard>
      <StyledImg src={img || "https://picsum.photos/200/300"} />
      <StyledIonHeader mode="md">
        <IonCardTitle color="primary">{title}</IonCardTitle>
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
const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 85px;
  padding: 1px;
`;

const StyledIonHeader = styled(IonCardHeader)`
  padding: 0 8px 8px 8px;
`;
