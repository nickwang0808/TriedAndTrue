import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { useSelector } from "react-redux";
import { IAppState } from "../../redux/store";
import Header from "./Header";
import PlannerRow from "./PlannerRow";

const dates = [
  "2021-01-13",
  "2021-01-14",
  "2021-01-15",
  "2021-01-16",
  "2021-01-17",
  "2021-01-18",
  "2021-01-19",
];

export default function MealPlannerMainPage() {
  const weeks = useSelector(
    (state: IAppState) => state.plannerDateRangeSlice.dateRange as string[][]
  );

  return (
    <>
      <IonPage>
        <Header weeks={weeks} />
        <IonContent>
          {/* pass in the dates */}
          {dates.map((date) => (
            <PlannerRow date={date} key={date} />
          ))}
        </IonContent>
      </IonPage>
    </>
  );
}
