import { gql, useQuery } from "@apollo/client";
import {
  GetAllShoppingListsQuery,
  GetAllShoppingListsQueryVariables,
} from "../../generated/graphql";

export const GET_ALL_SHOPPING_LISTS = gql`
  query getAllShoppingLists {
    list(limit: 50) {
      name
      id
    }
  }
`;

export default function useGetAllShoppingLists() {
  const { data, loading, error } = useQuery<
    GetAllShoppingListsQuery,
    GetAllShoppingListsQueryVariables
  >(GET_ALL_SHOPPING_LISTS);

  return { data, loading, error };
}
