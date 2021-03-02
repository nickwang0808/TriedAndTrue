import client from "../config/apoloConfig";
import {
  GetPlannerRecipeByWeekQuery,
  GetPlannerRecipeByWeekQueryVariables,
} from "../generated/graphql";
import { GET_PLANNER_RECIPE_BY_WEEK } from "../gql/query/useGetPlannerRecipeByWeek";
import getMonAndSunDate from "./getMonAndSunDate";

export default function getPlannerRecipeCount(date: string) {
  const { date_end, date_start } = getMonAndSunDate(date);

  const getPlanner = client.readQuery<
    GetPlannerRecipeByWeekQuery,
    GetPlannerRecipeByWeekQueryVariables
  >({
    query: GET_PLANNER_RECIPE_BY_WEEK,
    variables: { _gte: date_start, _lte: date_end },
  });

  return getPlanner?.planner?.length ?? 0;
}
