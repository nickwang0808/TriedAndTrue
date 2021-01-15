import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
} from "@ionic/react";
import { isSameWeek } from "date-fns";
import { format } from "date-fns/esm";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import listIconForHeader from "../../assets/svg/addtoList.svg";
import refresh from "../../assets/svg/refresh.svg";
import { setSelectedWeek } from "../../redux/Planner/PlannerDateRangeSlice";
import { IAppState } from "../../redux/store";

interface IProps {
  weeks: string[][];
}

export default function Header({ weeks }: IProps) {
  const monAndFris = weeks.map((week) => [week[0], week.slice(-1)[0]]);
  // the monday that represent the week
  const { selectedWeek } = useSelector(
    (state: IAppState) => state.plannerDateRangeSlice
  );
  const dispatch = useDispatch();

  useIonViewDidEnter(() => {
    document.getElementById(selectedWeek)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }, [selectedWeek]);

  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle color="primary">Weekly Meal Plan</IonTitle>
        <IonButtons slot="end">
          <IonButton>
            <IonIcon icon={refresh} />
          </IonButton>
          <IonButton>
            <IonIcon icon={listIconForHeader} />
          </IonButton>
        </IonButtons>
      </IonToolbar>

      <IonToolbar>
        <IonSegment
          scrollable
          value={selectedWeek}
          onIonChange={(e) => dispatch(setSelectedWeek(e.detail.value!))}
          color="secondary"
        >
          {monAndFris.map(([mon, sun]) => {
            return (
              <IonSegmentButton value={mon} id={mon} key={mon}>
                <IonLabel>
                  {`${format(new Date(mon), "MMM-d")} - ${format(
                    new Date(sun),
                    "d"
                  )}`}
                  {isSameWeek(new Date(), new Date(mon)) && " Today"}
                </IonLabel>
              </IonSegmentButton>
            );
          })}
        </IonSegment>
      </IonToolbar>
    </IonHeader>
  );
}
