import styled from "@emotion/styled";
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
import { format, isPast, isSameMonth } from "date-fns";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import listIconForHeader from "../../assets/svg/addtoList.svg";
import refresh from "../../assets/svg/refresh.svg";
import { setShowIngredientToListModal } from "../../redux/Planner/AddIngredientsToListSlice";
import { setSelectedWeek } from "../../redux/Planner/PlannerDateRangeSlice";
import { IAppState } from "../../redux/store";
import getMonAndSun from "../../utils/getMonAndFri";

interface IProps {
  weeks: string[][];
}

export default function Header({ weeks }: IProps) {
  const monAndSuns = getMonAndSun();
  // the monday that represent the week
  const { selectedWeek } = useSelector(
    (state: IAppState) => state.plannerDateRangeSlice
  );
  const dispatch = useDispatch();

  useIonViewDidEnter(() => {
    document.getElementById(selectedWeek)?.scrollIntoView({
      behavior: "auto",
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
          <IonButton
            onClick={() => dispatch(setShowIngredientToListModal(true))}
          >
            <IonIcon icon={listIconForHeader} />
          </IonButton>
        </IonButtons>
      </IonToolbar>

      <IonToolbar>
        <IonSegment
          scrollable
          value={selectedWeek}
          onIonChange={(e) => dispatch(setSelectedWeek(e.detail.value!))}
          // color="secondary"
          // color={isPast(new Date(selectedWeek[1])) ? "medium" : "secondary"}
        >
          {monAndSuns.map(([mon, sun]) => {
            return (
              <StyledSegmentButton
                isGrey={isPast(new Date(sun))}
                value={mon}
                id={mon}
                key={mon}
              >
                <IonLabel>
                  {`${format(new Date(mon), "MMM-d")} - ${format(
                    new Date(sun),
                    isSameMonth(new Date(mon), new Date(sun)) ? "d" : "MMM-d"
                  )}`}
                  {/* {isSameWeek(new Date(), new Date(mon)) && " Today"} */}
                </IonLabel>
              </StyledSegmentButton>
            );
          })}
        </IonSegment>
      </IonToolbar>
    </IonHeader>
  );
}

const StyledSegmentButton = styled(IonSegmentButton)<{ isGrey: boolean }>`
  /* follow this template to style other properties */
  --color: ${(props) => (props.isGrey ? "grey" : "var(--ion-color-secondary)")};
  --color-checked: ${(props) =>
    props.isGrey ? "grey" : "var(--ion-color-secondary)"};
`;
