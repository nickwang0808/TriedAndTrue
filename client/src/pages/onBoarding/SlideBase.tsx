import styled from "@emotion/styled";
import { IonButton } from "@ionic/react";
import React from "react";
import onBoardLogo from "../../assets/svg/onboardLogo.svg";

interface IProps {
  title: string;
  subTitle: string;
  buttonText: string;
  buttonAction: () => void;
  graphic: string;
}

export default function SlideOne({
  title,
  subTitle,
  buttonText,
  buttonAction,
  graphic,
}: IProps) {
  return (
    <Container>
      <BlueBox>
        <img src={onBoardLogo} />
        <img src={graphic} />
      </BlueBox>
      <WhiteBox>
        <StyledTextBox>
          <h2>{title}</h2>
          <h3>{subTitle}</h3>
        </StyledTextBox>
      </WhiteBox>
      <IonButton color="secondary" onClick={buttonAction}>
        {buttonText}
      </IonButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-bottom: 40px;

  ion-button {
    margin: 0 64px;
  }
`;

const BlueBox = styled.div`
  background-color: var(--ion-color-primary);
  height: 476px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 31.52px 0 79.85px 0;
`;

const WhiteBox = styled.div`
  background-color: white;
  flex-grow: 1;
`;

const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 24px;
  margin-top: -24px;

  & > h2,
  & > h3 {
    font-size: 30px;
    line-height: 37.5px;
    margin: 0;
    padding: 3px 11px;
    text-align: left;
    max-width: 80%;
  }

  & > h2 {
    background-color: white;
    font-weight: 700;
  }
  & > h3 {
    font-weight: 400;
  }
`;
