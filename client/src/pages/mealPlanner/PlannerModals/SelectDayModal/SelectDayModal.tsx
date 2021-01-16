import { IonContent, IonItem, IonLabel, IonList } from "@ionic/react";
import { format } from "date-fns";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalHeader from "../../../../components/headers/ModalHeader";
import { StyledFullScreenModal } from "../../../../components/modals/fullScreenModalBase";
import client from "../../../../config/apoloConfig";
import {
  GetPlannerRecipeByDateQuery,
  GetPlannerRecipeByDateQueryVariables,
  Planner_Insert_Input,
} from "../../../../generated/graphql";
import useOverWritePlannerByDates from "../../../../gql/mutations/useOverWritePlannerByDates.graphql";
import { GET_PLANNER_RECIPE_BY_DATE } from "../../../../gql/query/useGetPlannerRecipeByDate";
import {
  closePlannerItemModal,
  IRecipeToModify,
} from "../../../../redux/Planner/PlannerItemModalSlice";
import { IAppState, store } from "../../../../redux/store";

export default function SelectDayModal() {
  const { showSelectDayModal, recipeToModify } = useSelector(
    ({ PlannerItemModalSlice }: IAppState) => PlannerItemModalSlice
  );
  const dispatch = useDispatch();

  const handleDismiss = () =>
    dispatch(closePlannerItemModal("showSelectDayModal"));

  const daysInWeek = store
    .getState()
    .plannerDateRangeSlice.dateRange!.find(
      (elem) => elem[0] === showSelectDayModal
    );

  const {
    data,
    error,
    overWritePlannerByDates,
    client,
  } = useOverWritePlannerByDates();

  const handleClick = async (date: string) => {
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
    await overWritePlannerByDates({
      variables: { dates: [fromDate, toDate], objects },
    });
  };

  return (
    <StyledFullScreenModal
      height="420px"
      isOpen={!!showSelectDayModal}
      backdropDismiss
      onDidDismiss={handleDismiss}
    >
      <ModalHeader title="Select Recipe Day" handleClose={handleDismiss} />

      <IonContent>
        <IonList lines="full">
          {daysInWeek?.map((date) => (
            <IonItem key={date} onClick={() => handleClick(date)}>
              <IonLabel color="primary">
                {format(new Date(date), "EEEE '('do')'")}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </StyledFullScreenModal>
  );
}

function getRecipesInPlanner(
  date: string,
  { id, index }: IRecipeToModify,
  excludeSelectedRecipe: boolean = false
): Planner_Insert_Input[] {
  const cache = client.readQuery<
    GetPlannerRecipeByDateQuery,
    GetPlannerRecipeByDateQueryVariables
  >({ query: GET_PLANNER_RECIPE_BY_DATE, variables: { date } });

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
