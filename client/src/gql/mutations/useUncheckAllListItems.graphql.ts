import { gql, useMutation } from "@apollo/client";
import {
  UncheckAllListItemsMutation,
  UncheckAllListItemsMutationVariables,
} from "../../generated/graphql";
export const UNCHECK_ALL_LIST_ITEMS = gql`
  mutation UncheckAllListItems($_eq: uuid!) {
    update_list_items(
      where: { list: { _eq: $_eq } }
      _set: { is_completed: false }
    ) {
      returning {
        id
        is_completed
      }
    }
  }
`;

export default function useUncheckAllListItems(id: string) {
  const [uncheckAllListItems, { data, loading, error }] = useMutation<
    UncheckAllListItemsMutation,
    UncheckAllListItemsMutationVariables
  >(UNCHECK_ALL_LIST_ITEMS, {
    variables: { _eq: id },
  });

  return { uncheckAllListItems, data, loading, error };
}
