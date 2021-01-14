import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { useSelector } from "react-redux";
import { IAppState } from "../../redux/store";
import Header from "./Header";
import PlannerRow from "./PlannerRow";

export default function MealPlannerMainPage() {
  const { dateRange, selectedWeek } = useSelector(
    (state: IAppState) => state.plannerDateRangeSlice
  );

  return (
    <>
      <IonPage>
        <Header weeks={dateRange as string[][]} />
        <IonContent>
          {/* find the current selected week and then map out the days */}
          {(dateRange as string[][])
            .find((elem) => String(elem[0]) === String(selectedWeek))!
            .map((date) => (
              <PlannerRow date={String(date)} key={String(date)} />
            ))}
        </IonContent>
      </IonPage>
    </>
  );
}
