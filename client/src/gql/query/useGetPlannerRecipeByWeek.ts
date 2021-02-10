import { gql, useQuery } from "@apollo/client";
import { format } from "date-fns";
import {
  GetPlannerRecipeByWeekQuery,
  GetPlannerRecipeByWeekQueryVariables,
} from "../../generated/graphql";
import { store } from "../../redux/store";

export const GET_PLANNER_RECIPE_BY_DATE = gql`
  query GetPlannerRecipeByWeek($_gte: date!, $_lte: date!) {
    planner(
      where: { _and: [{ date: { _gte: $_gte } }, { date: { _lte: $_lte } }] }
    ) {
      date
      index
      recipe {
        id
        img
        title
      }
    }
  }
`;

export default function useGetPlannerRecipeByWeek() {
  const getMonAndSunDate = () => {
    const { dateRange, selectedWeek } = store.getState().plannerDateRangeSlice;

    let currentWeekDates = (dateRange as string[][]).find(
      (elem) => String(elem[0]) === String(selectedWeek)
    )!;

    return {
      date_start: format(new Date(currentWeekDates[0]), "yyyy-MM-dd"),
      date_end: format(
        new Date(currentWeekDates[currentWeekDates.length - 1]),
        "yyyy-MM-dd"
      ),
      currentWeekDates,
    };
  };

  const { date_end, date_start, currentWeekDates } = getMonAndSunDate();
  const { data, loading, error } = useQuery<
    GetPlannerRecipeByWeekQuery,
    GetPlannerRecipeByWeekQueryVariables
  >(GET_PLANNER_RECIPE_BY_DATE, {
    variables: { _gte: date_start, _lte: date_end },
  });

  const plannerByDate = (date: string) => {
    const _date = format(new Date(date), "yyyy-MM-dd");
    const result = data?.planner?.filter((elem) => elem.date === _date);
    console.log({ result });
    return result ?? [];
  };

  return { plannerByDate, loading, error, currentWeekDates };
}
