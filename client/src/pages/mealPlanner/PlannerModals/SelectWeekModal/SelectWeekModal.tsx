import { IonContent, IonList } from "@ionic/react";
import { format } from "date-fns";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalHeader from "../../../../components/headers/ModalHeader";
import ItemWithRightArrow from "../../../../components/listItem/ListItemWithRightArrow";
import { FancyModalWithRoundTop } from "../../../../components/modals/FancyModalWithRoundTop";
import {
  closePlannerItemModal,
  setShowSelectDayModal,
} from "../../../../redux/Planner/PlannerItemModalSlice";
import { IAppState } from "../../../../redux/store";
import getAllMonAndSun from "../../../../utils/getAllMonAndSun";

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

  const monAndSuns = getAllMonAndSun().slice(-4);

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
