import { gql, useMutation } from "@apollo/client";
import {
  GetShoppingLIstByDateQuery,
  GetShoppingLIstByDateQueryVariables,
} from "../../generated/graphql";

export const GET_SHOPPING_LISt_BY_Date = gql`
  query GetShoppingLIstByDate($_gte: date!, $_lte: date!) {
    list(
      where: { _and: [{ date: { _gte: $_gte } }, { date: { _lte: $_lte } }] }
    ) {
      id
      date
      comment
      category
      is_completed
      other
      quantity
    }
  }
`;

export default function useGetShoppingListByWeek() {
  const [GetShoppingLIstByDate, { data, loading, error }] = useMutation<
    GetShoppingLIstByDateQuery,
    GetShoppingLIstByDateQueryVariables
  >(GET_SHOPPING_LISt_BY_Date);

  return { GetShoppingLIstByDate, data, loading, error };
}
