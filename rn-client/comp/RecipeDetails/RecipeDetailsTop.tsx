import { Content, Tab, TabHeading, Tabs, View } from "native-base";
import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import Directions from "./Directions";
import Ingredients from "./Ingredients";
import PrepTimeCard from "./PrepTimeCard";
import TitleCard from "./TitleCard";

export default function RecipeDetailsTop() {
  return (
    <>
      <Content>
        <Image
          source={require("../../assets/food1.jpg")}
          style={{ height: 200, width: "100%" }}
        />
        <View style={styles.container}>
          <TitleCard />
          <PrepTimeCard />
        </View>

        <Tabs>
          <Tab
            heading={
              <TabHeading>
                <Text>Ingredients (4)</Text>
              </TabHeading>
            }
          >
            <Ingredients />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Directions</Text>
              </TabHeading>
            }
          >
            <Directions />
          </Tab>
        </Tabs>
      </Content>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
});
