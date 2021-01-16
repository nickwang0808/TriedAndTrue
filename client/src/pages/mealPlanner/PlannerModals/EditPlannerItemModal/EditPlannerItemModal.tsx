import { IonContent, IonItem, IonLabel, IonList } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalHeader from "../../../../components/headers/ModalHeader";
import { StyledFullScreenModal } from "../../../../components/modals/fullScreenModalBase";
import {
  closePlannerItemModal,
  setShowSelectWeekModal,
} from "../../../../redux/Planner/PlannerItemModalSlice";
import { IAppState } from "../../../../redux/store";

export default function EditPlannerItemModal() {
  const { showModifyModal, recipeToModify } = useSelector(
    ({ PlannerItemModalSlice }: IAppState) => PlannerItemModalSlice
  );
  const dispatch = useDispatch();

  const handleDismiss = () =>
    dispatch(closePlannerItemModal("showModifyModal"));

  return (
    <StyledFullScreenModal
      height="220px"
      isOpen={!!showModifyModal}
      backdropDismiss
      onDidDismiss={handleDismiss}
    >
      <ModalHeader title="Add Recipe" handleClose={handleDismiss} />

      <IonContent>
        <IonList lines="full">
          <IonItem
            onClick={() => dispatch(setShowSelectWeekModal(showModifyModal))}
          >
            <IonLabel color="primary">Move to Another Day</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel color="primary">Recipe Details</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel color="primary">Remove Recipe</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </StyledFullScreenModal>
  );
}
