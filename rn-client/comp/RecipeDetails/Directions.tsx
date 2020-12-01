import { Body, Left, List, ListItem, Right, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

const Data = [
  "In a large bowl, add the beef. Sprinkle evenly with the Worcestershire sauce, seasoning salt, garlic powder, and pepper. Use your hands to mix the ingredients until they are just combined.",
  "Preheat the grill to 375 degrees F (medium-high).",
  "Divide the meat mixture into fourths. Take 1/4 of the meat mixture and use your hands to press it into the shape of a hamburger patty that is about 3/4 inch thick. Make an indention in the middle of the patty to prevent bulging in the center of the hamburger as it cooks. Repeat with the remaining meat mixture, making 4 hamburgers.",
];

export default function Directions() {
  return (
    <List>
      {Data.map((step, index) => {
        return <DirectionItem step={step} index={index + 1} key={index} />;
      })}
    </List>
  );
}

function DirectionItem({ step, index }: IDirectionItem) {
  return (
    <ListItem thumbnail /* thumbnails gives the best layout */>
      <Left>
        <Text>{index}</Text>
      </Left>
      <Body>
        <Text>{step}</Text>
      </Body>
      <Right />
    </ListItem>
  );
}

const style = StyleSheet.create({});

interface IDirectionItem {
  step: string;
  index: number;
}
