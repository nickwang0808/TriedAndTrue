import { gql } from "@apollo/client";

export const GET_RECIPE_DETAILS = gql`
  query GetRecipeDetails($id: String!) {
    recipe_by_pk(id: $id) {
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
  }
`;
