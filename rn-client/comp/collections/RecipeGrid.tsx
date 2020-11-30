import React from "react";
import { FlatList } from "react-native";
import RecipeCard from "./RecipeCard";

export default function RecipeGrid() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const renderCards = () => <RecipeCard />;

  return <FlatList numColumns={2} data={data} renderItem={renderCards} />;
}
