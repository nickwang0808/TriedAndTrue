import React from "react";
import { List, ListItem, Left, Body, Right, Text } from "native-base";

const Data = [
  {
    quantity: "1 ",
    unit: "1/2 lbs",
    type: "80% Lean beef ground chuck organic certified",
  },
  {
    quantity: "1 ",
    unit: "1/2 tsp",
    type: "seasoning salt",
  },
  {
    quantity: "1 ",
    unit: "tbsp",
    type: "Worcestershire sauce",
  },
];

export default function Ingredients() {
  return (
    <List>
      {Data.map((arg) => {
        return <IngredientItem {...arg} key={arg.type} />;
      })}
      {Data.map((arg) => {
        return <IngredientItem {...arg} key={arg.type} />;
      })}
    </List>
  );
}

function IngredientItem({ quantity, unit, type }: IIngredientItem) {
  return (
    <ListItem thumbnail /* thumbnails gives the best layout */>
      <Left>
        <Text>
          {quantity}
          {unit}
        </Text>
      </Left>
      <Body>
        <Text>{type}</Text>
      </Body>
      <Right />
    </ListItem>
  );
}

interface IIngredientItem {
  quantity: string;
  unit: string;
  type: string;
}
