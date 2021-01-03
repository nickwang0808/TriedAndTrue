import { gql } from "@apollo/client";

export const ADD_RECIPE = gql`
  mutation AddRecipe(
    $img: String
    $ingredients: json
    $title: String!
    $total_time: Int
    $yields: String
  ) {
    insert_recipe(
      objects: [
        {
          img: $img
          ingredients: $ingredients
          title: $title
          total_time: $total_time
          yields: $yields
        }
      ]
    ) {
      returning {
        id
        img
        ingredients
        title
        total_time
        yields
      }
    }
  }
`;
