import { Content, ScrollableTab, Tab, Tabs } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import DayPlanners from "./DayPlanners";
import GenerateMealPlan from "./GenerateMealPlan";

export default function MealPlannerWeekTabs() {
  return (
    <>
      <Tabs renderTabBar={() => <ScrollableTab />}>
        <Tab heading="Nov 23 - Nov 29">
          <Content>
            <DayPlanners />
            <DayPlanners />
            <DayPlanners />
          </Content>
        </Tab>
        <Tab heading="Nov 23 - Nov 29">
          <GenerateMealPlan />
        </Tab>
        <Tab heading="Nov 23 - Nov 29">
          <Content>
            <DayPlanners />
            <DayPlanners />
            <DayPlanners />
          </Content>
        </Tab>
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
