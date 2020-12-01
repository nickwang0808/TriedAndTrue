import { Container, H1, Icon } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

export default function TitleCard() {
  return (
    <Container style={styles.titleCardContainer}>
      <H1 style={styles.title}>Hometown Grilled Hamburgers</H1>
      <Icon type="FontAwesome" name="pencil" />
      <Icon type="FontAwesome" name="calendar-plus-o" />
    </Container>
  );
}

const styles = StyleSheet.create({
  titleCardContainer: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f3f3",
  },
  title: {
    width: "70%",
    backgroundColor: "white",
    marginTop: -32,
    padding: 16,
  },
});
