import { gql } from "@apollo/client";

export const PARSE_Ingredients = gql`
  query ParseIngredients($ingredientsArray: [String]) {
    parseIngredients(ingredientsToParse: $ingredientsArray) {
      name
    }
  }
`;
