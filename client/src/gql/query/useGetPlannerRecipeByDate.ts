import { gql, useQuery } from "@apollo/client";
import {
  GetPlannerRecipeByDateQuery,
  GetPlannerRecipeByDateQueryVariables,
} from "../../generated/graphql";

export const GET_PLANNER_RECIPE_BY_DATE = gql`
  query GetPlannerRecipeByDate($date: date) {
    planner(where: { date: { _eq: $date } }) {
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

export default function useGetPlannerRecipeByDate(date: string) {
  const {
    data: { planner } = {} as GetPlannerRecipeByDateQuery,
    loading,
    error,
  } = useQuery<
    GetPlannerRecipeByDateQuery,
    GetPlannerRecipeByDateQueryVariables
  >(GET_PLANNER_RECIPE_BY_DATE, { variables: { date } });

  return { planner, loading, error };
}
