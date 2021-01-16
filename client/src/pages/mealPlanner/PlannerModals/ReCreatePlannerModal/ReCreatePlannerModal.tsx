import styled from "@emotion/styled";
import { IonButton, IonContent, IonItem } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalHeader from "../../../../components/headers/ModalHeader";
import { StyledFullScreenModal } from "../../../../components/modals/fullScreenModalBase";
import { setShowRecreateModal } from "../../../../redux/Planner/PlannerItemModalSlice";
import { IAppState } from "../../../../redux/store";

export default function ReCreatePlannerModal() {
  const { showRecreateModal } = useSelector(
    ({ PlannerItemModalSlice }: IAppState) => PlannerItemModalSlice
  );
  const dispatch = useDispatch();

  const handleDismiss = () => dispatch(setShowRecreateModal(null));

  return (
    <StyledFullScreenModal
      height="200px"
      isOpen={!!showRecreateModal}
      backdropDismiss
      onDidDismiss={handleDismiss}
    >
      <ModalHeader
        title="Recreate Weekly Meal Plan"
        handleClose={handleDismiss}
      />

      <IonContent>
        <IonItem lines="none">
          <p>
            This will remove and reconfigure all the existing meals set for this
            week.
          </p>
        </IonItem>
        <StyledButtonContainer>
          <IonButton color="secondary" fill="outline">
            Yes, Recreate This Weeks Plan
          </IonButton>
        </StyledButtonContainer>
      </IonContent>
    </StyledFullScreenModal>
  );
}

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 16px;
`;
