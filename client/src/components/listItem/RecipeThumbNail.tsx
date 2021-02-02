import styled from "@emotion/styled";
import { IonItem, IonLabel, IonThumbnail } from "@ionic/react";
import { format } from "date-fns";
import React from "react";

interface IProp {
  img: string;
  title: string;
  counter?: number;
  date: string;
}

export default function RecipeThumbNail({ img, title, counter, date }: IProp) {
  return (
    <IonItem lines="full">
      <StyledIonThumbNail slot="start">
        <img src={img} />
      </StyledIonThumbNail>
      <StyledIonLabel after={counter ? `(${counter})` : ""}>
        <h3>{title}</h3>
        <div>{format(new Date(date), "MMM dd")}</div>
      </StyledIonLabel>
    </IonItem>
  );
}

const StyledIonThumbNail = styled(IonThumbnail)`
  width: 32px;
  height: 32px;
`;

const StyledIonLabel = styled(IonLabel)<{ after: string }>`
  & > h3 {
    font-family: OpenSansRegular;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
  }

  & > h3::after {
    font-weight: normal;
    margin-left: 8px;
    content: "${(props) => props.after}";
  }

  & > div {
    font-family: OpenSansRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
  }
`;
