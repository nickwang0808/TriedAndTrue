import { gql, useMutation } from "@apollo/client";
import {
  DeleteRecipeFromPlannerMutation,
  DeleteRecipeFromPlannerMutationVariables,
} from "../../generated/graphql";

export const DELETE_RECIPE_FROM_PLANNER = gql`
  mutation DeleteRecipeFromPlanner(
    $index: Int!
    $date: date!
    $recipe_id: String!
  ) {
    delete_planner_by_pk(date: $date, recipe_id: $recipe_id, index: $index) {
      recipe {
        id
      }
    }
  }
`;

export default function useDeleteRecipeFromPlanner() {
  const [deleteRecipeFromPlanner, { data, error, loading }] = useMutation<
    DeleteRecipeFromPlannerMutation,
    DeleteRecipeFromPlannerMutationVariables
  >(DELETE_RECIPE_FROM_PLANNER);

  return {
    deleteRecipeFromPlanner,
    data,
    error,
    loading,
  };
}
