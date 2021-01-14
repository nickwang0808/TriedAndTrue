import { gql, useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import {
  OverWriteRecipeToPlannerMutation,
  OverWriteRecipeToPlannerMutationVariables,
} from "../../generated/graphql";
import { IAppState } from "../../redux/store";

export const OVER_WRITE_RECIPE_TO_PLANNER = gql`
  mutation OverWriteRecipeToPlanner(
    $date: date!
    $objects: [planner_insert_input!]!
  ) {
    delete_planner(where: { date: { _eq: $date } }) {
      affected_rows
    }
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

export default function useOverWriteRecipeToPlanner() {
  const { dateToModify } = useSelector(
    (state: IAppState) => state.plannerModalSlice
  );
  const [
    overWriteRecipeToPlanner,
    { loading: loading_m, error: error_m },
  ] = useMutation<
    OverWriteRecipeToPlannerMutation,
    OverWriteRecipeToPlannerMutationVariables
  >(OVER_WRITE_RECIPE_TO_PLANNER, {
    update: (cache, { data }) => {
      cache.modify({
        fields: {
          planner: (_, { toReference }) => {
            const recipes = data?.insert_planner?.returning.map(
              ({ recipe, index, date }) => {
                return {
                  __typename: "planner",
                  date,
                  index,
                  recipe: toReference(recipe.id),
                };
              }
            );
            return recipes;
          },
        },
      });
    },
  });

  return {
    overWriteRecipeToPlanner,
    loading_m,
    error_m,
  };
}
