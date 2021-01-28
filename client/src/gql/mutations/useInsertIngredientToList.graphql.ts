import { gql, useMutation } from "@apollo/client";
import {
  InsertIngredientToListMutation,
  InsertIngredientToListMutationVariables,
} from "../../generated/graphql";

export const INSERT_INGREDIENT_TO_LIST = gql`
  mutation InsertIngredientToList($ingredientsIds: [String!]!, $date: String!) {
    insertIngredientToList(ingredientsIds: $ingredientsIds, date: $date) {
      id
    }
  }
`;

export default function useInsertIngredientToList() {
  const [insertIngredientToList, { data, loading, error }] = useMutation<
    InsertIngredientToListMutation,
    InsertIngredientToListMutationVariables
  >(INSERT_INGREDIENT_TO_LIST);

  return { insertIngredientToList, data, loading, error };
}
