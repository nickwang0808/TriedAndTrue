import { gql } from "@apollo/client";

export const PARSE_Ingredients = gql`
  query ParseIngredients($ingredients: [String]) {
    parseIngredients(ingredients: $ingredients) {
      name
      optional
      preparation
      quantity_denominator
      quantity_numerator
      unit
    }
  }
`;
