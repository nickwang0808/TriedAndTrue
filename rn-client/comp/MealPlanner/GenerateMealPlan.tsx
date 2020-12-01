import { Button, H3, Text, View } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

export default function GenerateMealPlan() {
  return (
    <>
      <View style={styles.container}>
        <View>
          <H3 style={styles.text}>
            Would you like us to create a meal plan for this week? (You can
            customize it further afterwards)
          </H3>
        </View>
        <View>
          <Button>
            <Text>Yes, create a meal plan</Text>
          </Button>
        </View>
        <View>
          <Button bordered>
            <Text>No, I’ll do it</Text>
          </Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "50%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
  },
});
