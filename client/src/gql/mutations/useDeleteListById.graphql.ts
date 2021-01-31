import { gql, useMutation } from "@apollo/client";
import {
  DeleteListByIdMutation,
  DeleteListByIdMutationVariables,
} from "../../generated/graphql";

export const DELETE_LIST_BY_ID = gql`
  mutation DeleteListById($id: uuid!) {
    delete_list_by_pk(id: $id) {
      id
    }
  }
`;

export default function useDeleteListById(id: string) {
  const [deleteListById, { data, loading, error }] = useMutation<
    DeleteListByIdMutation,
    DeleteListByIdMutationVariables
  >(DELETE_LIST_BY_ID, {
    variables: { id },
    optimisticResponse: {
      __typename: "mutation_root",
      delete_list_by_pk: { id, __typename: "list" },
    },

    update: (cache, { data }) => {
      if (!data) return;
      const { id } = data!.delete_list_by_pk!;
      cache.modify({
        fields: {
          [`list({"limit":50})`]: (curr: Array<{ __ref: string }>) => {
            return curr.filter(({ __ref }) => __ref !== `list:${id}`);
          },
        },
      });
    },
  });

  return { deleteListById, data, loading, error };
}
