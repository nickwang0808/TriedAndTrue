import { gql, useMutation } from "@apollo/client";
import {
  GeneratePlannerMutation,
  GeneratePlannerMutationVariables,
} from "../../generated/graphql";
import { GET_PLANNER_RECIPE_BY_WEEK } from "../query/useGetPlannerRecipeByWeek";

export const GENERATE_PLANNER = gql`
  mutation GeneratePlanner(
    $_gte: String!
    $_lte: String!
    $mealTypes: [String!]!
  ) {
    generatePlanner(_gte: $_gte, _lte: $_lte, mealTypes: $mealTypes) {
      id
    }
  }
`;

export default function useGeneratePlanner() {
  const [generatePlanner, { data, loading, error }] = useMutation<
    GeneratePlannerMutation,
    GeneratePlannerMutationVariables
  >(GENERATE_PLANNER, { awaitRefetchQueries: true });

  const handleGenerate = async (
    mealTypes: string[],
    _gte: string,
    _lte: string
  ) => {
    await generatePlanner({
      variables: { _gte, _lte, mealTypes },
      refetchQueries: [
        { query: GET_PLANNER_RECIPE_BY_WEEK, variables: { _gte, _lte } },
      ],
    });
  };

  return { handleGenerate, data, loading, error };
}
