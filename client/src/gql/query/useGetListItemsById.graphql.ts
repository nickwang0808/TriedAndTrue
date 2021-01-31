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
      unit
      recipes
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

  const groupItemsByCategory = () => {
    /*  use the item's category field to read category data, this is a 2 dim
    entional array chunked by category */
    if (!data) return null;
    let arr: GetListItemsByIdQuery["list_items"][] = [];
    const groups = groupBy(data.list_items, "category");
    for (const group in groups) {
      arr.push(groups[group]);
    }
    return arr;
  };

  // console.log(groupItemsByCategory());
  return { data: groupItemsByCategory(), loading, error };
}
