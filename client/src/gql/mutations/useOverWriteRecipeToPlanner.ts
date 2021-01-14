import { gql, useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import {
  AddRecipesToPlannerMutation,
  AddRecipesToPlannerMutationVariables,
} from "../../generated/graphql";
import { IAppState } from "../../redux/store";
import getPlannerRecipeCount from "../../utils/getPlannerRecipeCount";

export const ADD_RECIPES_TO_PLANNER = gql`
  mutation addRecipesToPlanner($objects: [planner_insert_input!]!) {
    insert_planner(objects: $objects) {
      returning {
        date
        index
        recipe {
          id
          img
          title
        }
      }
    }
  }
`;

export default function useAddRecipesToPlanner() {
  const { dateToModify } = useSelector(
    (state: IAppState) => state.plannerModalSlice
  );
  const [
    addRecipesToPlanner,
    { loading: loading_m, error: error_m },
  ] = useMutation<
    AddRecipesToPlannerMutation,
    AddRecipesToPlannerMutationVariables
  >(ADD_RECIPES_TO_PLANNER, {
    update: (cache, { data }) => {
      cache.modify({
        fields: {
          planner: (curr, { toReference }) => {
            const recipes = data?.insert_planner?.returning.map(
              ({ recipe, index, date }) => {
                const indexOffset = getPlannerRecipeCount(date);
                return {
                  __typename: "planner",
                  date,
                  index: index + indexOffset,
                  recipe: toReference(recipe.id),
                };
              }
            );
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
