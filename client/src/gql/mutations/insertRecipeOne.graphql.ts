import { gql } from "@apollo/client";

export const INSERT_RECIPE_ONE = gql`
  mutation InsertRecipe($objects: recipe_insert_input!) {
    insert_recipe_one(object: $objects) {
      id
      cuisine
      directions
      img
      meal_type
      owner
      title
      total_time
      yields
    }
  }
`;
