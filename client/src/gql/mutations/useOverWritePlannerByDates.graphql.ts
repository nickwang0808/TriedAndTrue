import { gql, useMutation } from "@apollo/client";
import { format } from "date-fns";
import client from "../../config/apoloConfig";
import {
  GetPlannerRecipeByWeekQuery,
  GetPlannerRecipeByWeekQueryVariables,
  OverWritePlannerByDatesMutation,
  OverWritePlannerByDatesMutationVariables,
  Planner_Insert_Input,
} from "../../generated/graphql";
import { IRecipeToModify } from "../../redux/Planner/PlannerItemModalSlice";
import { store } from "../../redux/store";
import { GET_PLANNER_RECIPE_BY_WEEK } from "../query/useGetPlannerRecipeByWeek";

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

  const { recipeToModify } = store.getState().PlannerItemModalSlice;

  const handleSelectDay = async (date: string) => {
    const f = "yyyy-MM-dd";
    // get from date and to date and format them
    const fromDate = format(new Date(recipeToModify!.date!), f);
    const toDate = format(new Date(date), f);

    // get all recipe ids and arrange them into ordered array
    const objects = [
      ...getRecipesInPlanner(fromDate, recipeToModify!, true),
      ...getRecipesInPlanner(toDate, recipeToModify!),
    ];
    // combine 2 groups of recipes
    // run query
    overWritePlannerByDates({
      variables: { dates: [fromDate, toDate], objects },
      optimisticResponse: {
        delete_planner: {
          affected_rows: 0,
          __typename: "planner_mutation_response",
        },
        insert_planner: {
          returning: objects.map(({ date, index, recipe_id }) => {
            return {
              date,
              index: index!,
              recipe: {
                id: recipe_id!,
                __typename: "recipe",
              },
              __typename: "planner",
            };
          }),
          __typename: "planner_mutation_response",
        },
        __typename: "mutation_root",
      },
      update: (cache, { data }) => {
        if (!data || !data.insert_planner) return;
        const {
          insert_planner: { returning },
        } = data;
        cache.modify({
          fields: {
            [`planner({"where":{"date":{"_eq":"${toDate}"}}})`]: (
              curr,
              { toReference }
            ) => {
              return [
                ...returning
                  .filter((elem) => elem.date === toDate)
                  .map((elem) => {
                    return {
                      ...elem,
                      recipe: toReference(elem.recipe),
                    };
                  }),
              ];
            },
            [`planner({"where":{"date":{"_eq":"${fromDate}"}}})`]: (
              curr,
              { toReference }
            ) => {
              return [
                ...returning
                  .filter((elem) => elem.date === fromDate)
                  .map((elem) => {
                    return {
                      ...elem,
                      recipe: toReference(elem.recipe),
                    };
                  }),
              ];
            },
          },
        });
      },
    });
  };

  return { handleSelectDay, data, error, client };
}

function getRecipesInPlanner(
  date: string,
  { id, index }: IRecipeToModify,
  excludeSelectedRecipe: boolean = false
): Planner_Insert_Input[] {
  const cache = client.readQuery<
    GetPlannerRecipeByWeekQuery,
    GetPlannerRecipeByWeekQueryVariables
  >({
    query: GET_PLANNER_RECIPE_BY_WEEK,
    variables: { _lte: date, _gte: date },
  });

  if (!cache) return [];

  const { planner } = cache;
  type plannerElem = typeof planner[0]; // shut up typescript

  const filtered = planner.filter(({ recipe, index: i }: plannerElem) => {
    // remove the recipe by pk of id and idex
    if (excludeSelectedRecipe) {
      return i !== index;
    } else {
      return true;
    }
  });

  const recipeIdsSorted = filtered
    .sort((a: plannerElem, b: plannerElem) => a.index - b.index)
    .map(({ recipe }: plannerElem) => recipe.id);

  if (!excludeSelectedRecipe) {
    recipeIdsSorted.push(id);
  }

  return recipeIdsSorted.map((id, index) => {
    return { date, index, recipe_id: id };
  });
}
