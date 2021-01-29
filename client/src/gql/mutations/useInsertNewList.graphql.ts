import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import {
  InsertNewListOneMutation,
  InsertNewListOneMutationVariables,
} from "../../generated/graphql";

export const INSERT_NEW_LIST = gql`
  mutation InsertNewListOne($object: list_insert_input!) {
    insert_list_one(object: $object) {
      id
      name
    }
  }
`;

export default function useInsertNewList() {
  const [value, setValue] = useState("");

  const [insertNewList, { data, loading, error }] = useMutation<
    InsertNewListOneMutation,
    InsertNewListOneMutationVariables
  >(INSERT_NEW_LIST, {
    variables: {
      object: {
        name: value,
      },
    },
    optimisticResponse: {
      __typename: "mutation_root",
      insert_list_one: {
        id: `optimistic_response_ ${Math.random()}`,
        name: value,
        __typename: "list",
      },
    },
    update: (cache, { data }) => {
      if (!data?.insert_list_one) return;
      const { insert_list_one } = data!;
      cache.modify({
        fields: {
          [`list({"limit":50})`]: (curr, { toReference }) => {
            return [toReference(insert_list_one!), ...curr];
          },
        },
      });
    },
  });

  return { insertNewList, data, loading, error, value, setValue };
}
