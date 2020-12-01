import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React from "react";
import MealPlannerMain from "./comp/MealPlanner/MealPlannerMain";
import Nav from "./comp/nav/Nav";

export default function App() {
  const [loaded] = useFonts({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    ...Ionicons.font,
  });

  if (!loaded) return null;

  return (
    <>
      <NavigationContainer>
        <MealPlannerMain />
        {/* <RecipeGrid /> */}
        {/* <RecipeDetailsMain /> */}
        <Nav />
      </NavigationContainer>
    </>
  );
}
