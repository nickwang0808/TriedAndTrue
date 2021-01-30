import { gql, useQuery } from "@apollo/client";
import groupBy from "lodash.groupby";
import {
  GetListItemsByIdQuery,
  GetListItemsByIdQueryVariables,
} from "../../generated/graphql";

export const GET_LIST_ITEMS_BY_ID = gql`
  query GetListItemsById($_eq: uuid) {
    list_items(
      where: { list: { _eq: $_eq } }
      order_by: { category: asc_nulls_last }
    ) {
      quantity
      other
      name
      list
      is_completed
      comment
      id
      category
    }
  }
`;

export default function useGetListItemsById(id: string) {
  const { data, loading, error } = useQuery<
    GetListItemsByIdQuery,
    GetListItemsByIdQueryVariables
  >(GET_LIST_ITEMS_BY_ID, {
    variables: {
      _eq: id,
    },
  });

  const groupedData = () => {
    if (!data) return null;
    return groupBy(data.list_items, "category");
  };
  console.log(groupedData());
  return { data: groupedData(), loading, error };
}
