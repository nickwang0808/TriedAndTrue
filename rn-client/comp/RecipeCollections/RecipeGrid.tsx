import {
  Body,
  Button,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Title,
  View,
} from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import RecipeCard from "./RecipeCard";

export default function RecipeGrid() {
  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // const renderCards = () => <RecipeCard />;

  return (
    <>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="search" />
          </Button>
          <Button transparent>
            <Icon type="FontAwesome" name="filter" />
          </Button>
          <Button transparent>
            <Icon name="add" />
          </Button>
        </Right>
      </Header>

      {/* <FlatList numColumns={2} data={data} renderItem={renderCards} /> */}
      <Content padder>
        <View style={styles.container}>
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </View>
      </Content>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
