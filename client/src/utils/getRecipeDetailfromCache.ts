import client from "../config/apoloConfig";
import {
  GetRecipeDetailsQuery,
  GetRecipeDetailsQueryVariables,
} from "../generated/graphql";
import { GET_RECIPE_DETAILS } from "../gql/query/useGetRecipeDetails";

export default function getRecipeDetailfromCache(id: string) {
  const result = client.readQuery<
    GetRecipeDetailsQuery,
    GetRecipeDetailsQueryVariables
  >({
    query: GET_RECIPE_DETAILS,
    variables: { id },
  });

  return result?.recipe_by_pk;
}
