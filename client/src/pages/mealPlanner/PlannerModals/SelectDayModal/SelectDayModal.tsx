import { IonContent, IonItem, IonLabel, IonList } from "@ionic/react";
import { format } from "date-fns";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalHeader from "../../../../components/headers/ModalHeader";
import { FancyModalWithRoundTop } from "../../../../components/modals/FancyModalWithRoundTop";
import useOverWritePlannerByDates from "../../../../gql/mutations/useOverWritePlannerByDates.graphql";
import { closePlannerItemModal } from "../../../../redux/Planner/PlannerItemModalSlice";
import { IAppState, store } from "../../../../redux/store";

export default function SelectDayModal() {
  const { showSelectDayModal, recipeToModify } = useSelector(
    ({ PlannerItemModalSlice }: IAppState) => PlannerItemModalSlice
  );
  const dispatch = useDispatch();

  const handleDismiss = () =>
    dispatch(closePlannerItemModal("showSelectDayModal"));

  const daysInWeek = store
    .getState()
    .plannerDateRangeSlice.dateRange!.find(
      (elem) => elem[0] === showSelectDayModal
    );

  const { handleSelectDay } = useOverWritePlannerByDates();

  return (
    <FancyModalWithRoundTop
      height="420px"
      isOpen={!!showSelectDayModal}
      backdropDismiss
      onDidDismiss={handleDismiss}
    >
      <ModalHeader title="Select Recipe Day" handleClose={handleDismiss} />

      <IonContent>
        <IonList lines="full">
          {daysInWeek?.map((date) => (
            <IonItem
              key={date}
              onClick={() => {
                handleSelectDay(date);
                handleDismiss();
              }}
            >
              <IonLabel color="primary">
                {format(new Date(date), "EEEE '('do')'")}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </FancyModalWithRoundTop>
  );
}
