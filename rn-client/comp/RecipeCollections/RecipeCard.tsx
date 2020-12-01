import { Card, CardItem, Icon, Text, View } from "native-base";
import React from "react";
import { Image, StyleSheet } from "react-native";
export default function RecipeCard() {
  return (
    <View style={style.card}>
      <Card>
        <CardItem cardBody style={style.cardImg}>
          <Image
            source={require("../../assets/food1.jpg")}
            style={{ height: 150, flex: 1 }}
          />
        </CardItem>
        <CardItem header>
          <Text style={style.dishName}>
            Perfect Fried Eggs with Toast and Bacon
          </Text>
        </CardItem>
        <CardItem>
          <View style={style.cardItem}>
            <Icon style={style.icon} type="FontAwesome" name="circle" />
            <Text style={style.subText}>45min</Text>
          </View>
          <View style={style.cardItem}>
            <Icon style={style.icon} type="FontAwesome" name="circle" />
            <Text style={style.subText}>6</Text>
          </View>
        </CardItem>
      </Card>
    </View>
  );
}

const p4 = 2;

const style = StyleSheet.create({
  card: { /* margin: "1%", */ width: "49%" },
  cardImg: {
    paddingTop: p4,
    paddingLeft: p4,
    paddingRight: p4,
  },
  cardItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  dishName: {
    color: "#2A5077",
  },
  subText: {
    color: "#2A5077",
    fontSize: 12,
  },
  icon: {
    color: "#DCDCDC",
    fontSize: 14,
    marginRight: 8,
  },
});
