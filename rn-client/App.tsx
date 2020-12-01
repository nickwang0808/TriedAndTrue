import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Container } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import Nav from "./comp/nav/Nav";
import RecipeDetailsTop from "./comp/RecipeDetails/RecipeDetailsTop";

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
        <Container>
          <RecipeDetailsTop />
        </Container>
        <Nav />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
  },
  child: {
    width: 100,
    height: 100,
    backgroundColor: "#f3f3f3",
    borderWidth: 5,
    borderColor: "red",
  },
});
