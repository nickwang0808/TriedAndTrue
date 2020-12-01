import { H1, H3, View } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

export default function PrepTimeCard() {
  return (
    <>
      <View style={styles.container}>
        <View>
          <H1>45m</H1>
          <H3>Prep Time</H3>
        </View>
        <View />
        <View>
          <H1>1h 24m</H1>
          <H3>Cook Time</H3>
        </View>
        <View />
        <View>
          <H1>8</H1>
          <H3>Servings</H3>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
