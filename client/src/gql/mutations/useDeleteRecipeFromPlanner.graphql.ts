import { gql, useMutation } from "@apollo/client";
import { endOfWeek, format, startOfWeek } from "date-fns";
import {
  DeleteRecipeFromPlannerMutation,
  DeleteRecipeFromPlannerMutationVariables,
  GetAllIngredientsInweekQuery,
} from "../../generated/graphql";
import { store } from "../../redux/store";
import {
  getMonAndSun,
  GET_ALL_INGREDIENTS_IN_WEEK,
} from "../query/useGetAllIngredientsInWeek.graphql";

export const DELETE_RECIPE_FROM_PLANNER = gql`
  mutation DeleteRecipeFromPlanner(
    $index: Int!
    $date: date!
    $recipe_id: uuid!
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
  >(DELETE_RECIPE_FROM_PLANNER, {
    refetchQueries: [
      { query: GET_ALL_INGREDIENTS_IN_WEEK, variables: getMonAndSun() },
    ],
  });

  const { recipeToModify } = store.getState().PlannerItemModalSlice;

  const handleDelete = async () => {
    const { index, id } = recipeToModify!;
    const date = format(new Date(recipeToModify!.date), "yyyy-MM-dd");
    const date_start = format(
      startOfWeek(new Date(date), { weekStartsOn: 1 }),
      "yyyy-MM-dd"
    );
    const date_end = format(
      endOfWeek(new Date(date), { weekStartsOn: 1 }),
      "yyyy-MM-dd"
    );
    console.log({ date, date_end });
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
            [`planner({"where":{"_and":[{"date":{"_gte":"${date_start}"}},{"date":{"_lte":"${date_end}"}}]}})`]: (
              curr: GetAllIngredientsInweekQuery["planner"],
              { toReference }
            ) => {
              return curr.filter((elem) => {
                /* keep everything that does not match date,
                if date match then check the index */
                if (elem.date !== date) {
                  return true;
                } else {
                  if (elem.index !== index) {
                    return true;
                  }
                  return false;
                }
              });
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
