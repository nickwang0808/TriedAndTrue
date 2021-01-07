import { gql } from "@apollo/client";

export const GET_ALL_RECIPES = gql`
  query GetAllRecipe {
    recipe {
      id
      img
      title
      total_time
    }
  }
`;
