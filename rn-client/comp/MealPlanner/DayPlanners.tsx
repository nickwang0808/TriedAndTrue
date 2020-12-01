import { H3, Separator } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";
import AddToPlanner from "./AddToPlanner";
import RecipeCardSmall from "./RecipeCardSmall";

export default function DayPlanners() {
  return (
    <>
      <Separator bordered>
        <H3>Monday (23rd)</H3>
      </Separator>
      <View style={styles.container}>
        <RecipeCardSmall />
        <RecipeCardSmall />
        <AddToPlanner />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
  },
});
