import { gql, useQuery } from "@apollo/client";
import { format } from "date-fns";
import {
  GetAllIngredientsInweekQuery,
  GetAllIngredientsInweekQueryVariables,
  GetOneRecipeFromPlannerQuery,
  GetOneRecipeFromPlannerQueryVariables,
} from "../../generated/graphql";
import { store } from "../../redux/store";

export const GET_ALL_INGREDIENTS_IN_WEEK = gql`
  query GetAllIngredientsInweek($_gte: date!, $_lte: date!) {
    planner(
      where: { _and: [{ date: { _gte: $_gte } }, { date: { _lte: $_lte } }] }
      order_by: { date: asc, index: asc }
    ) {
      date
      index
      recipe {
        id
        title
        recipe_ingredients {
          id
          comment
          quantity
          unit
          name
        }
      }
    }
  }
`;

export const GET_RERIPE_FROM_PLANNER = gql`
  query GetOneRecipeFromPlanner($_eq: uuid!) {
    planner(order_by: { date: asc, index: asc }, limit: 1) {
      date
      index
      recipe {
        id
        title
        recipe_ingredients(where: { recipe: { id: { _eq: $_eq } } }) {
          id
          comment
          quantity
          unit
          name
        }
      }
    }
  }
`;

export default function useGetAllIngredientsInWeek(recipeId: string | null) {
  const allRecipe = useQuery<
    GetAllIngredientsInweekQuery,
    GetAllIngredientsInweekQueryVariables
  >(GET_ALL_INGREDIENTS_IN_WEEK, {
    variables: getMonAndSun(),
  });

  const oneRecipe = useQuery<
    GetOneRecipeFromPlannerQuery,
    GetOneRecipeFromPlannerQueryVariables
  >(GET_RERIPE_FROM_PLANNER, { variables: { _eq: recipeId! } });

  if (recipeId) {
    return oneRecipe;
  } else {
    return allRecipe;
  }
}

export function getMonAndSun(): GetAllIngredientsInweekQueryVariables {
  const { selectedWeek, dateRange } = store.getState().plannerDateRangeSlice;
  const sun = format(
    new Date(
      dateRange!.find((e) => e[0] === selectedWeek)![dateRange![0].length - 1]
    ),
    "yyyy-MM-dd"
  );

  const mon = format(new Date(), "yyyy-MM-dd");

  return { _gte: mon, _lte: sun };
}
