import styled from "@emotion/styled";
import {
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";
import { close } from "ionicons/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import aboutLogo from "../../assets/svg/aboutLogo.svg";
import SmallBlockSeparator from "../../components/misc/SmallBlockSeperator";
import { FancyModalWithRoundTop } from "../../components/modals/FancyModalWithRoundTop";
import { setShowAboutModal } from "../../redux/profileSlice/profileSlice";
import { IAppState } from "../../redux/store";

export default function AboutUsModal() {
  const { showAboutModal } = useSelector(
    ({ profileSlice }: IAppState) => profileSlice
  );

  const dispatch = useDispatch();
  const handleDismiss = () => dispatch(setShowAboutModal(false));

  return (
    <FancyModalWithRoundTop
      isOpen={showAboutModal}
      onDidDismiss={handleDismiss}
    >
      <IonFab vertical="top" horizontal="start" slot="fixed">
        <IonFabButton size="small" color="transparent" onClick={handleDismiss}>
          <IonIcon icon={close} color="secondary" />
        </IonFabButton>
      </IonFab>

      <IonContent className="ion-padding-vertical">
        <StyledLogoContainer>
          <img src={aboutLogo} />
        </StyledLogoContainer>
        <p className="ion-padding">
          Tried & True keeps the recipes you already know, automatically puts
          them into next week’s meal plan, and creates a shopping list from that
          meal plan.<br/><br/> It’s easy, really.
        </p>
        <SmallBlockSeparator />
        <p className="ion-padding">Let's chat!</p>
        <StyledFlexCenter>
          <IonButton fill="solid" color="secondary">
            Hello@TriedAndTrueApp.com
          </IonButton>
        </StyledFlexCenter>
      </IonContent>
    </FancyModalWithRoundTop>
  );
}

const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 14px;

  & > img {
    max-width: 40%;
    height: 100%;
  }
`;

const StyledFlexCenter = styled.div`
  display: flex;
  justify-content: center;
`;

