import { gql } from "@apollo/client";
import client from "../config/apoloConfig";
import {
  GetPlannerRecipeByDateQuery,
  GetPlannerRecipeByDateQueryVariables,
} from "../generated/graphql";

export default function getPlannerRecipeCount(date: string) {
  const getPlanner = client.readQuery<
    GetPlannerRecipeByDateQuery,
    GetPlannerRecipeByDateQueryVariables
  >({
    query: gql`
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
    `,
    variables: { date },
  });

  return getPlanner?.planner?.length || 0;
}
