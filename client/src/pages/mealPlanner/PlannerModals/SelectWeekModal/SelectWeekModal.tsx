import { IonContent, IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";
import { format } from "date-fns";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import listArrowPointingRight from "../../../../assets/svg/listArrowPointingRight.svg";
import ModalHeader from "../../../../components/headers/ModalHeader";
import { FancyModalWithRoundTop } from "../../../../components/modals/FancyModalWithRoundTop";
import {
  closePlannerItemModal,
  setShowSelectDayModal,
} from "../../../../redux/Planner/PlannerItemModalSlice";
import { IAppState } from "../../../../redux/store";
import getMonAndSun from "../../../../utils/getMonAndFri";

export default function SelectWeekModal() {
  const { showSelectWeekModal } = useSelector(
    ({ PlannerItemModalSlice }: IAppState) => PlannerItemModalSlice
  );
  const { selectedWeek } = useSelector(
    ({ plannerDateRangeSlice }: IAppState) => plannerDateRangeSlice
  );
  const dispatch = useDispatch();

  const handleDismiss = () =>
    dispatch(closePlannerItemModal("showSelectWeekModal"));

  const monAndSuns = getMonAndSun().slice(-4);

  return (
    <FancyModalWithRoundTop
      height="330px"
      isOpen={!!showSelectWeekModal}
      backdropDismiss
      onDidDismiss={handleDismiss}
    >
      <ModalHeader title="Select Recipe Week" handleClose={handleDismiss} />

      <IonContent>
        <IonList lines="full">
          {monAndSuns.map(([mon, fri]) => (
            <ItemWithRightArrow
              key={mon}
              content={`${format(new Date(mon), "MMMM-dd")} - ${format(
                new Date(fri),
                "MMMM-dd"
              )}`}
              onClick={() => dispatch(setShowSelectDayModal(mon))}
            />
          ))}
        </IonList>
      </IonContent>
    </FancyModalWithRoundTop>
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
