import { gql, useQuery } from "@apollo/client";
import {
  GetListItemByIdQuery,
  GetListItemByIdQueryVariables,
} from "../../generated/graphql";

export const GET_LIST_ITEM_BY_ID = gql`
  query GetListItemById($id: uuid!) {
    list_items_by_pk(id: $id) {
      id
      name
      quantity
      recipes
      other
      comment
      unit
    }
  }
`;

export interface IListItemRecipeRef {
  title: string;
  img: string;
  date: string;
}

export default function useGetListItemById(id: string) {
  return useQuery<GetListItemByIdQuery, GetListItemByIdQueryVariables>(
    GET_LIST_ITEM_BY_ID,
    { variables: { id } }
  );
}
