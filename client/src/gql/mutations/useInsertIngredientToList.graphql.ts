import { gql, useMutation } from "@apollo/client";
import {
  InsertIngredientToListMutation,
  InsertIngredientToListMutationVariables,
} from "../../generated/graphql";

export const INSERT_INGREDIENT_TO_LIST = gql`
  mutation InsertIngredientToList(
    $ingredientsToAddToList: [insertIngredientToListInput!]!
    $shoppingListId: String!
  ) {
    insertIngredientToList(
      ingredientsToAddToList: $ingredientsToAddToList
      shoppingListId: $shoppingListId
    ) {
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
