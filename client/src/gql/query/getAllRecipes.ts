import { gql } from "@apollo/client";

export const GET_ALL_RECIPES = gql`
  query GetAllRecipe {
    recipe {
      img
      title
      total_time
    }
  }
`;
