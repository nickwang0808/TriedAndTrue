import { gql, useQuery } from "@apollo/client";
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
        quantity_denominator
        quantity_numerator
        unit
        formatted_text
      }
    }
  }
`;

export default function useGetRecipeDetails(id: string | null) {
  const { error, loading, data, refetch } = useQuery<
    GetRecipeDetailsQuery,
    GetRecipeDetailsQueryVariables
  >(GET_RECIPE_DETAILS, {
    skip: !id,
    variables: { id: id as string },
  });

  return {
    error,
    loading,
    data,
    refetch,
  };
}
