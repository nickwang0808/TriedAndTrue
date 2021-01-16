import { IonContent, IonItem, IonLabel, IonList } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalHeader from "../../../../components/headers/ModalHeader";
import { StyledFullScreenModal } from "../../../../components/modals/fullScreenModalBase";
import { setShowSelectDayModal } from "../../../../redux/Planner/PlannerItemModalSlice";
import { IAppState } from "../../../../redux/store";

export default function SelectDayModal() {
  const { showSelectDayModal } = useSelector(
    ({ PlannerItemModalSlice }: IAppState) => PlannerItemModalSlice
  );
  const dispatch = useDispatch();

  const handleDismiss = () => dispatch(setShowSelectDayModal(null));

  return (
    <StyledFullScreenModal
      height="420px"
      isOpen={!!showSelectDayModal}
      backdropDismiss
      onDidDismiss={handleDismiss}
    >
      <ModalHeader title="Select Recipe Day" handleClose={handleDismiss} />

      <IonContent>
        <IonList lines="full">
          {Array.from({ length: 7 }, (v, i) => i).map((num) => (
            <IonItem key={num}>
              <IonLabel color="primary">Monday (30th)</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </StyledFullScreenModal>
  );
}
