import { Body, Button, Header, Icon, Right, Title } from "native-base";
import React from "react";
export default function MealPlannerHeader() {
  return (
    <Header>
      {/* <Left /> */}
      <Body>
        <Title>Weekly meal plan</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name="add" />
        </Button>
      </Right>
    </Header>
  );
}
