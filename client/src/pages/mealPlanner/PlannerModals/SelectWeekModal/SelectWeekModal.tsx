import { IonContent, IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import listArrowPointingRight from "../../../../assets/svg/listArrowPointingRight.svg";
import ModalHeader from "../../../../components/headers/ModalHeader";
import { StyledFullScreenModal } from "../../../../components/modals/fullScreenModalBase";
import { setShowSelectWeekModal } from "../../../../redux/Planner/PlannerItemModalSlice";
import { IAppState } from "../../../../redux/store";

export default function SelectWeekModal() {
  const { showSelectWeekModal } = useSelector(
    ({ PlannerItemModalSlice }: IAppState) => PlannerItemModalSlice
  );
  const dispatch = useDispatch();

  const handleDismiss = () => dispatch(setShowSelectWeekModal(null));

  return (
    <StyledFullScreenModal
      height="330px"
      isOpen={!!showSelectWeekModal}
      backdropDismiss
      onDidDismiss={handleDismiss}
    >
      <ModalHeader title="Select Recipe Week" handleClose={handleDismiss} />

      <IonContent>
        <IonList lines="full">
          <ItemWithRightArrow
            content="November 23 - November 29"
            onClick={() => {}}
          />
          <ItemWithRightArrow
            content="November 23 - November 29"
            onClick={() => {}}
          />
          <ItemWithRightArrow
            content="November 23 - November 29"
            onClick={() => {}}
          />
          <ItemWithRightArrow
            content="November 23 - November 29"
            onClick={() => {}}
          />
        </IonList>
      </IonContent>
    </StyledFullScreenModal>
  );
}

interface ISubProps {
  content: string;
  onClick: () => void;
}

function ItemWithRightArrow({ content, onClick }: ISubProps) {
  return (
    <IonItem onClick={onClick}>
      <IonLabel color="primary">{content}</IonLabel>

      <IonIcon slot="end" src={listArrowPointingRight} />
    </IonItem>
  );
}
