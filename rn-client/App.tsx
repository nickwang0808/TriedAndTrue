import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  Body,
  Col,
  Container,
  Content,
  Grid,
  Header,
  Left,
  Right,
  Title,
} from "native-base";
import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Nav from "./comp/nav/Nav";
import { Ionicons } from "@expo/vector-icons";
import RecipeCard from "./comp/collections/RecipeCard";

export default function App() {
  const [loaded] = useFonts({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    ...Ionicons.font,
  });

  if (!loaded) return null;

  return (
    <>
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Recipe</Title>
          </Body>
          <Right></Right>
        </Header>
        <Content padder></Content>
      </Container>
      <Nav />
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
