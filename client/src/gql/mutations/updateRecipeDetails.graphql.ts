import { gql } from "@apollo/client";

export const UPDATE_RECIPE_DETAILS = gql`
  mutation UpdateRecipeDetail(
    $id: String!
    $_set: recipe_set_input!
    $ingredientsStrings: [String!]!
  ) {
    update_recipe_by_pk(pk_columns: { id: $id }, _set: $_set) {
      cuisine
      directions
      id
      img
      meal_type
      owner
      title
      total_time
      yields
    }
    overRideIngredients(ingredientsStrings: $ingredientsStrings, recipe_id: $id)
  }
`;
