import { gql, useMutation } from "@apollo/client";
import {
  InsertRecipeMutation,
  InsertRecipeMutationVariables,
} from "../../generated/graphql";
import { GET_ALL_RECIPES } from "../query/useGetAllRecipes";

export const INSERT_RECIPE_ONE = gql`
  mutation InsertRecipe($object: InsertRecipeOneDerivedRecipeInsertInput!) {
    InsertRecipeOneDerived(object: $object) {
      id
      title
      directions
      owner
      meal_type
      img
      yields
      total_time
      cuisine
    }
  }
`;

export default function useInsertRecipeOne() {
  const [
    insertRecipeOne,
    { loading: loading_insert, data: data_insert, error: error_insert },
  ] = useMutation<InsertRecipeMutation, InsertRecipeMutationVariables>(
    INSERT_RECIPE_ONE,
    { refetchQueries: [{ query: GET_ALL_RECIPES }] }
  );

  return {
    insertRecipeOne,
    loading_insert,
    data_insert,
    error_insert,
  };
}
