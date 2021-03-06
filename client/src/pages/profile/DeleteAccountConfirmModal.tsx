import styled from "@emotion/styled";
import { IonButton, IonContent, IonItem, IonLabel } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalHeader from "../../components/headers/ModalHeader";
import { FancyModalWithRoundTop } from "../../components/modals/FancyModalWithRoundTop";
import { auth } from "../../config/firebaseConfig";
import { setShowDeleteAccountModal } from "../../redux/profileSlice/profileSlice";
import { IAppState } from "../../redux/store";

export default function DeleteAccountConfirmModal() {
  const { showConfirmDelete } = useSelector(
    ({ profileSlice }: IAppState) => profileSlice
  );
  const dispatch = useDispatch();

  const handleDismiss = () => dispatch(setShowDeleteAccountModal(false));
  const handleSubmit = () => {
    localStorage.clear();
    auth.signOut();
    window.location.reload();
  };

  return (
    <FancyModalWithRoundTop
      isOpen={showConfirmDelete}
      onDidDismiss={handleDismiss}
      height="180px"
    >
      <ModalHeader title="Delete Account" handleClose={handleDismiss} />
      <IonContent>
        <IonItem lines="none">
          <IonLabel>Delete Account Forever </IonLabel>
        </IonItem>
        <StyledFlex>
          <IonButton onClick={handleSubmit} color="secondary">
            Delete Account
          </IonButton>
        </StyledFlex>
      </IonContent>
    </FancyModalWithRoundTop>
  );
}

const StyledFlex = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
  padding-right: 14px;
`;
