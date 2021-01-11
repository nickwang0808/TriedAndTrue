import { gql } from "@apollo/client";

export const INSERT_RECIPE_ONE = gql`
  mutation InsertRecipe($object: InsertRecipeOneDerivedRecipeInsertInput!) {
    InsertRecipeOneDerived(object: $object) {
      id
      title
      directions
      owner
      meal_type
      img
      yields
      total_time
      cuisine
    }
  }
`;
