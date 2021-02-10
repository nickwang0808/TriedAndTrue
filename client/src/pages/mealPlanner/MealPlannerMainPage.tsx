import { IonContent, IonPage, useIonViewDidEnter } from "@ionic/react";
import { format } from "date-fns";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/headers/MealPlannerHeader";
import LoaderCentered from "../../components/loading/LoaderCentered";
import useGetPlannerRecipeByWeek from "../../gql/query/useGetPlannerRecipeByWeek";
import { IAppState } from "../../redux/store";
import PlannerRow from "./PlannerRow";

export default function MealPlannerMainPage() {
  const { dateRange } = useSelector(
    (state: IAppState) => state.plannerDateRangeSlice
  );

  useIonViewDidEnter(() => {
    setTimeout(() => {
      document
        .getElementById(`row-${format(new Date(), "yyyy-MM-dd")}`)
        ?.scrollIntoView({
          behavior: "auto",
          block: "start",
          inline: "start",
        });
    }, 5);
  }, []);

  const {
    plannerByDate,
    loading,
    error,
    currentWeekDates,
  } = useGetPlannerRecipeByWeek();

  let content;
  if (loading) {
    content = <LoaderCentered />;
  } else if (error) {
    content = <p>{error.message}</p>;
  } else {
    /* find the current selected week and then map out the days */
    content = currentWeekDates.map((date) => (
      <PlannerRow
        date={String(date)}
        key={String(date)}
        planner={plannerByDate(date)}
      />
    ));
  }
  return (
    <>
      <IonPage>
        <Header weeks={dateRange as string[][]} />
        <IonContent>{content}</IonContent>
      </IonPage>
    </>
  );
}
