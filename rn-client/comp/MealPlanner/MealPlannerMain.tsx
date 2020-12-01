import { Container } from "native-base";
import React from "react";
import MealPlannerHeader from "./MealPlannerHeader";
import MealPlannerWeekTabs from "./MealPlannerWeekTabs";

export default function MealPlannerMain() {
  return (
    <>
      <Container>
        <MealPlannerHeader />
        <MealPlannerWeekTabs />
      </Container>
    </>
  );
}
