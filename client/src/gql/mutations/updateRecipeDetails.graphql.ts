import { gql, useMutation } from "@apollo/client";
import {
  UpdateRecipeDetailMutation,
  UpdateRecipeDetailMutationVariables,
} from "../../generated/graphql";
import { GET_RECIPE_DETAILS } from "../query/useGetRecipeDetails";

export const UPDATE_RECIPE_DETAILS = gql`
  mutation UpdateRecipeDetail(
    $id: String!
    $_set: recipe_set_input!
    $ingredientsStrings: [String!]!
  ) {
    update_recipe_by_pk(pk_columns: { id: $id }, _set: $_set) {
      cuisine
      directions
      id
      img
      meal_type
      owner
      title
      total_time
      yields
    }
    overRideIngredients(
      ingredientsStrings: $ingredientsStrings
      recipe_id: $id
    ) {
      id
    }
  }
`;

export default function useUpdateRecipeDetails(id: string | null) {
  const [
    updateRecipeDetails,
    { loading: loading_update, data: data_update, error: error_update },
  ] = useMutation<
    UpdateRecipeDetailMutation,
    UpdateRecipeDetailMutationVariables
  >(UPDATE_RECIPE_DETAILS, {
    refetchQueries: [{ query: GET_RECIPE_DETAILS, variables: { id } }],
    // awaitRefetchQueries: true,
  });

  return {
    updateRecipeDetails,
    loading_update,
    data_update,
    error_update,
  };
}
