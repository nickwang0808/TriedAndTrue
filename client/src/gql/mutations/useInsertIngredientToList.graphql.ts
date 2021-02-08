import { gql, useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import {
  InsertIngredientToListMutation,
  InsertIngredientToListMutationVariables,
} from "../../generated/graphql";
import { setShowIngredientToListModal } from "../../redux/Planner/AddIngredientsToListSlice";
import { store } from "../../redux/store";
import { setShowToast } from "../../redux/toastSlice/toastSlice";

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

  const dispatch = useDispatch();

  const handleSubmit = async (listId: string) => {
    try {
      const {
        selectedIngredients,
      } = store.getState().addIngredientsToListSlice;
      await insertIngredientToList({
        variables: {
          ingredientsToAddToList: selectedIngredients,
          shoppingListId: listId,
        },
        update: (cache, { data }) => {
          if (!data?.insertIngredientToList) return;
          const { insertIngredientToList } = data;
          cache.modify({
            fields: {
              [`list_items({"order_by":{"category":"asc_nulls_last"},"where":{"list":{"_eq":"${listId}"}}})`]: (
                curr,
                { toReference }
              ) => {
                const newItems = insertIngredientToList.map((listItem) =>
                  toReference(listItem)
                );
                return [...newItems, ...curr];
              },
            },
          });
        },
      });

      dispatch(setShowToast({ text: "shopping list update" }));
    } catch (err) {
      console.log(err);
      dispatch(setShowToast({ text: "Something Went Wrong", color: "red" }));
    }
    dispatch(setShowIngredientToListModal(false));
  };

  return { handleSubmit, data, loading, error };
}
