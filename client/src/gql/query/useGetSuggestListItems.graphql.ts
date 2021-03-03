import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import {
  SuggestPastListItemsQuery,
  SuggestPastListItemsQueryVariables,
} from "../../generated/graphql";

const GET_SUGGEST_PLANNERS = gql`
  query SuggestPastListItems($_like: String = "%eg%") {
    list_items(limit: 20, where: { name: { _like: $_like } }) {
      quantity
      unit
      name
      comment
      other
      id
    }
  }
`;

export default function useGetSuggestListItems() {
  const [_keyword, _setKeyword] = useState("%%");
  const setKeyword = (value: string) => {
    console.log(value);
    if (value === _keyword) return;
    _setKeyword(`%${value}%`);
  };

  const { data, loading, error } = useQuery<
    SuggestPastListItemsQuery,
    SuggestPastListItemsQueryVariables
  >(GET_SUGGEST_PLANNERS, { variables: { _like: _keyword } });

  return {
    keyword: _keyword?.slice(1, -1),
    setKeyword,
    data,
    loading,
    error,
  };
}
