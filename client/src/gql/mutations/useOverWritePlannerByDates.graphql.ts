import { gql, useMutation } from "@apollo/client";
import {
  OverWritePlannerByDatesMutation,
  OverWritePlannerByDatesMutationVariables,
} from "../../generated/graphql";

export const OVER_WRITE_PLANNER_BY_DATES = gql`
  mutation OverWritePlannerByDates(
    $dates: [date!]!
    $objects: [planner_insert_input!]!
  ) {
    delete_planner(where: { date: { _in: $dates } }) {
      affected_rows
    }
    insert_planner(objects: $objects) {
      returning {
        date
        index
        recipe {
          id
        }
      }
    }
  }
`;

export default function useOverWritePlannerByDates() {
  const [overWritePlannerByDates, { data, error, client }] = useMutation<
    OverWritePlannerByDatesMutation,
    OverWritePlannerByDatesMutationVariables
  >(OVER_WRITE_PLANNER_BY_DATES);

  return { overWritePlannerByDates, data, error, client };
}
