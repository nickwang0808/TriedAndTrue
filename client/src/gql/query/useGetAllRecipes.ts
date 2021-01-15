import { gql, useQuery } from "@apollo/client";
import { GetAllRecipeQuery } from "../../generated/graphql";

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

export default function useGetAllRecipes() {
  const { error, loading, data } = useQuery<GetAllRecipeQuery>(GET_ALL_RECIPES);

  return {
    error,
    loading,
    data,
  };
}
