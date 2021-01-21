import { gql, useQuery } from "@apollo/client";
import {
  GetAllRecipeQuery,
  GetAllRecipeQueryVariables,
} from "../../generated/graphql";

export const GET_ALL_RECIPES = gql`
  query GetAllRecipe($_like: String = "%", $limit: Int = 8, $offset: Int = 0) {
    recipe(
      order_by: { created_at: desc_nulls_last }
      where: { title: { _ilike: $_like } }
      limit: $limit
      offset: $offset
    ) {
      id
      img
      title
      total_time
    }
  }
`;

export default function useGetAllRecipes(_like: string | null = "%%") {
  const { error, loading, data, fetchMore } = useQuery<
    GetAllRecipeQuery,
    GetAllRecipeQueryVariables
  >(GET_ALL_RECIPES, { variables: { _like } });

  return {
    error,
    loading,
    data,
    fetchMore,
  };
}
