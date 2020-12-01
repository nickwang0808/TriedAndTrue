import { Card, CardItem, Text, View } from "native-base";
import React from "react";
import { Image, StyleSheet } from "react-native";
export default function RecipeCardSmall() {
  return (
    <View style={style.card}>
      <Card>
        <CardItem cardBody style={style.cardImg}>
          <Image
            source={require("../../assets/food1.jpg")}
            style={{ height: 100, flex: 1 }}
          />
        </CardItem>
        <CardItem header>
          <Text style={style.dishName}>
            Perfect Fried Eggs with Toast and Bacon
          </Text>
        </CardItem>
      </Card>
    </View>
  );
}

const p2 = 2;

const style = StyleSheet.create({
  card: { margin: "1%", width: "30%" },
  cardImg: {
    paddingTop: p2,
    paddingLeft: p2,
    paddingRight: p2,
  },
  dishName: {
    color: "#2A5077",
  },
});
