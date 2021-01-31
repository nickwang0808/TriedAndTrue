import { gql, useMutation } from "@apollo/client";
import {
  DeleteAllListItemsMutation,
  DeleteAllListItemsMutationVariables,
} from "../../generated/graphql";

export const DELETE_ALL_LIST_ITEMS = gql`
  mutation DeleteAllListItems($_eq: uuid!) {
    delete_list_items(where: { list: { _eq: $_eq } }) {
      returning {
        list
      }
    }
  }
`;

export default function useDeleteAllListItems(id: string) {
  const [deleteAllListItems, { data, loading, error }] = useMutation<
    DeleteAllListItemsMutation,
    DeleteAllListItemsMutationVariables
  >(DELETE_ALL_LIST_ITEMS, {
    variables: { _eq: id },

    optimisticResponse: {
      __typename: "mutation_root",
      delete_list_items: {
        __typename: "list_items_mutation_response",
        returning: [
          {
            __typename: "list_items",
            list: id,
          },
        ],
      },
    },

    update: (cache, { data }) => {
      if (!data) return;
      const { delete_list_items } = data;
      const listId = delete_list_items!.returning[0].list as string;
      cache.modify({
        fields: {
          [`list_items({"order_by":{"category":"asc_nulls_last"},"where":{"list":{"_eq":"${listId}"}}})`]: () => {
            return [];
          },
        },
      });
    },
  });

  return { deleteAllListItems, data, loading, error };
}
