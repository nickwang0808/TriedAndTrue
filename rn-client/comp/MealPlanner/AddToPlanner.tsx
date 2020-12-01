import { Button, Icon, View } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

export default function AddToPlanner() {
  return (
    <>
      <View style={styles.container}>
        <Button bordered>
          <Icon name="add" />
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "33%",
    // flexDirection: "row",
    // justifyContent: "center",
    // borderColor: "red",
    // borderWidth: 2,
  },
});
