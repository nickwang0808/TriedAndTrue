import { IonContent, IonPage, useIonViewDidEnter } from "@ionic/react";
import { format } from "date-fns";
import React from "react";
import Header from "../../components/headers/MealPlannerHeader";
import LoaderCentered from "../../components/loading/LoaderCentered";
import useGetPlannerRecipeByWeek from "../../gql/query/useGetPlannerRecipeByWeek";
import NothingInPlanner from "./NothingInPlanner";
import PlannerRow from "./PlannerRow";

export default function MealPlannerMainPage() {
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
    dateRange,
    setShowRows,
    showRows,
  } = useGetPlannerRecipeByWeek();

  let content;
  if (loading) {
    content = <LoaderCentered />;
  } else if (error) {
    content = <p>{error.message}</p>;
  } else if (!showRows) {
    content = (
      <NothingInPlanner
        onClickPrimary={() => {}}
        onClickSecondary={() => setShowRows(true)}
      />
    );
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
