import { gql, useLazyQuery } from "@apollo/client";
import {
  GetRecipeDetailsQuery,
  GetRecipeDetailsQueryVariables,
} from "../../generated/graphql";

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
      recipe_ingredients_list {
        name
        quantity
        unit
        formatted_text
        comment
        other
      }
    }
  }
`;

export default function useGetRecipeDetails() {
  const [getRecipeDetails, { error, loading, data, refetch }] = useLazyQuery<
    GetRecipeDetailsQuery,
    GetRecipeDetailsQueryVariables
  >(GET_RECIPE_DETAILS);

  return {
    error,
    loading,
    data,
    refetch,
    getRecipeDetails,
  };
}
