import { gql, useQuery } from "@apollo/client";
import {
  GetShoppingListNameQuery,
  GetShoppingListNameQueryVariables,
} from "../../generated/graphql";

export const GET_SHOPPING_LIST_NAME = gql`
  query GetShoppingListName($id: uuid!) {
    list_by_pk(id: $id) {
      name
      id
    }
  }
`;

export default function useGetShoppingListName(id: string) {
  const { data } = useQuery<
    GetShoppingListNameQuery,
    GetShoppingListNameQueryVariables
  >(GET_SHOPPING_LIST_NAME, { variables: { id } });

  let title = "";
  if (data?.list_by_pk) {
    const { list_by_pk } = data!;
    title = list_by_pk!.name;
  }

  return title;
}
