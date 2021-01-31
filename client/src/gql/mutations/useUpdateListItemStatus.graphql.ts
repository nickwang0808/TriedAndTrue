import { gql, useMutation } from "@apollo/client";
import {
  UpdateListItemStatusMutation,
  UpdateListItemStatusMutationVariables,
} from "../../generated/graphql";

export const UPDATE_LIST_ITEM_STATUS = gql`
  mutation UpdateListItemStatus(
    $pk_columns: list_items_pk_columns_input!
    $is_completed: Boolean!
  ) {
    update_list_items_by_pk(
      pk_columns: $pk_columns
      _set: { is_completed: $is_completed }
    ) {
      id
      is_completed
    }
  }
`;

export default function useUpdateListItemStatus() {
  const [updateListItemStatus, { data, loading, error }] = useMutation<
    UpdateListItemStatusMutation,
    UpdateListItemStatusMutationVariables
  >(UPDATE_LIST_ITEM_STATUS);

  return { updateListItemStatus, data, loading, error };
}
