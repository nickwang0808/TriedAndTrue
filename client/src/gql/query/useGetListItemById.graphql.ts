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
interface IRecipes {
  title: string;
  img: string;
  date: string;
}
export default function useGetListItemById(id: string) {
  const { data, loading, error } = useQuery<
    GetListItemByIdQuery,
    GetListItemByIdQueryVariables
  >(GET_LIST_ITEM_BY_ID, { variables: { id } });

  type resultType = typeof data;

  const deDuplicateData = (data: resultType) => {
    if (!data?.list_items_by_pk) return;
    const { list_items_by_pk } = data;
    const stringified = (list_items_by_pk.recipes as IRecipes[]).map((recipe) =>
      JSON.stringify(recipe)
    );
    return deDupeRecipes(stringified);
  };

  return { data, recipes: deDuplicateData(data), loading, error };
}

interface deDupedRecipesArray extends IRecipes {
  count: number;
}

function deDupeRecipes(arr: string[]) {
  const uniqueArr = Array.from(new Set(arr));

  const result = uniqueArr.map((recipe) => {
    const length = arr.filter((elem) => elem === recipe).length;
    const mainData = JSON.parse(recipe);
    mainData.count = length;
    return mainData as deDupedRecipesArray;
  });

  return result;
}
