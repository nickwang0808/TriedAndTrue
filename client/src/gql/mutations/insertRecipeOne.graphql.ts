import { gql } from "@apollo/client";

export const INSERT_RECIPE_ONE = gql`
  mutation InsertRecipe($object: recipe_insert_input!) {
    insert_recipe_one(object: $object) {
      cuisine
      directions
      id
      img
      meal_type
      owner
      title
      total_time
      yields
      recipe_ingredients_list {
        name
        optional
        preparation
        quantity_denominator
        quantity_numerator
        raw_text
        unit
      }
    }
  }
`;
