import { gql, useMutation } from "@apollo/client";
import { format } from "date-fns";
import {
  AddRecipesToPlannerMutation,
  AddRecipesToPlannerMutationVariables,
} from "../../generated/graphql";
import { store } from "../../redux/store";
import getPlannerRecipeCount from "../../utils/getPlannerRecipeCount";

export const ADD_RECIPES_TO_PLANNER = gql`
  mutation addRecipesToPlanner($objects: [planner_insert_input!]!) {
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

export default function useAddRecipesToPlanner() {
  const [
    addRecipesToPlanner,
    { loading: loading_m, error: error_m },
  ] = useMutation<
    AddRecipesToPlannerMutation,
    AddRecipesToPlannerMutationVariables
  >(ADD_RECIPES_TO_PLANNER, {
    optimisticResponse: {
      __typename: "mutation_root",
      insert_planner: {
        returning: store
          .getState()
          .plannerModalSlice.selectedRecipes.map((id, index) => {
            const { dateToModify } = store.getState().plannerModalSlice;
            const indexOffset = getPlannerRecipeCount(dateToModify);
            return {
              __typename: "planner",
              date: dateToModify,
              index: index + indexOffset,
              recipe: {
                __typename: "recipe",
                id,
              },
            };
          }),
      },
    },
    update: (cache, { data }) => {
      const { dateToModify } = store.getState().plannerModalSlice;
      const date = format(new Date(dateToModify), "yyyy-MM-dd");
      cache.modify({
        fields: {
          [`planner({"where":{"date":{"_eq":"${date}"}}})`]: (
            curr,
            { toReference }
          ) => {
            const recipes = data?.insert_planner?.returning.map(
              ({ __typename, recipe }, i) => {
                const indexOffset = getPlannerRecipeCount(date);
                return {
                  __typename,
                  date,
                  index: i + indexOffset,
                  recipe: toReference(recipe),
                };
              }
            );
            console.log(curr);
            return [...curr, ...recipes!];
          },
        },
      });
    },
  });

  return {
    addRecipesToPlanner,
    loading_m,
    error_m,
  };
}
