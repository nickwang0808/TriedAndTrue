import { gql, useMutation } from "@apollo/client";
import { format } from "date-fns";
import {
  DeleteRecipeFromPlannerMutation,
  DeleteRecipeFromPlannerMutationVariables,
} from "../../generated/graphql";
import { store } from "../../redux/store";

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

  const { recipeToModify } = store.getState().PlannerItemModalSlice;

  const handleDelete = async () => {
    const { index, id } = recipeToModify!;
    const date = format(new Date(recipeToModify!.date), "yyyy-MM-dd");
    deleteRecipeFromPlanner({
      variables: { index, date, recipe_id: id },
      optimisticResponse: {
        __typename: "mutation_root",
        delete_planner_by_pk: {
          __typename: "planner",
          recipe: {
            __typename: "recipe",
            id,
          },
        },
      },

      update: (cache, { data }) => {
        if (!data || !data.delete_planner_by_pk) return;
        cache.modify({
          fields: {
            [`planner({"where":{"date":{"_eq":"${date}"}}})`]: (
              curr,
              { toReference }
            ) => {
              return curr.filter((elem: any) => elem.index !== index);
            },
          },
        });
      },
    });
  };

  return {
    handleDelete,
    data,
    error,
    loading,
  };
}
