import { gql, useQuery } from "@apollo/client";
import { format } from "date-fns";
import {
  GetAllIngredientsInweekQuery,
  GetAllIngredientsInweekQueryVariables,
} from "../../generated/graphql";
import { store } from "../../redux/store";

export const GET_ALL_INGREDIENTS_IN_WEEK = gql`
  query GetAllIngredientsInweek($_gte: date!, $_lte: date!) {
    planner(
      where: { _and: [{ date: { _gte: $_gte } }, { date: { _lte: $_lte } }] }
      order_by: { date: asc, index: asc }
    ) {
      date
      recipe {
        id
        title
        recipe_ingredients_list {
          id
          comment
          quantity
          unit
          name
        }
      }
    }
  }
`;

export default function useGetAllIngredientsInWeek() {
  const getMonAndSun = (): GetAllIngredientsInweekQueryVariables => {
    const { selectedWeek, dateRange } = store.getState().plannerDateRangeSlice;
    const sun = format(
      new Date(
        dateRange!.find((e) => e[0] === selectedWeek)![dateRange![0].length - 1]
      ),
      "yyyy-MM-dd"
    );

    const mon = format(new Date(), "yyyy-MM-dd");

    return { _gte: mon, _lte: sun };
  };

  const { data, loading, error } = useQuery<
    GetAllIngredientsInweekQuery,
    GetAllIngredientsInweekQueryVariables
  >(GET_ALL_INGREDIENTS_IN_WEEK, {
    variables: getMonAndSun(),
  });

  return { data, loading, error };
}
