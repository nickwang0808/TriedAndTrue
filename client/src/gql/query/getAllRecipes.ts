import { gql } from "@apollo/client";

export const GET_ALL_RECIPES = gql`
  query GetAllRecipe {
    recipe(order_by: { created_at: desc_nulls_last }) {
      id
      img
      title
      total_time
    }
  }
`;
