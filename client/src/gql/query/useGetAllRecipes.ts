import { gql, useQuery } from "@apollo/client";
import {
  GetAllRecipeQuery,
  GetAllRecipeQueryVariables,
} from "../../generated/graphql";

export const GET_ALL_RECIPES = gql`
  query GetAllRecipe($_like: String = "%") {
    recipe(
      order_by: { created_at: desc_nulls_last }
      where: { title: { _ilike: $_like } }
    ) {
      id
      img
      title
      total_time
    }
  }
`;

export default function useGetAllRecipes(_like: string | null = "%%") {
  const { error, loading, data } = useQuery<
    GetAllRecipeQuery,
    GetAllRecipeQueryVariables
  >(GET_ALL_RECIPES, { variables: { _like } });

  return {
    error,
    loading,
    data,
  };
}
