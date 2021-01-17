import { IonContent, IonItem, IonLabel, IonList } from "@ionic/react";
import { format } from "date-fns";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalHeader from "../../../../components/headers/ModalHeader";
import { FancyModalWithRoundTop } from "../../../../components/modals/FancyModalWithRoundTop";
import useDeleteRecipeFromPlanner from "../../../../gql/mutations/useDeleteRecipeFromPlanner.graphql";
import {
  closePlannerItemModal,
  setShowSelectWeekModal,
} from "../../../../redux/Planner/PlannerItemModalSlice";
import { setRecipeDetailsId } from "../../../../redux/RecipeDetailsSlice/recipeDetailsSlice";
import { IAppState } from "../../../../redux/store";

export default function EditPlannerItemModal() {
  const { showModifyModal, recipeToModify } = useSelector(
    ({ PlannerItemModalSlice }: IAppState) => PlannerItemModalSlice
  );
  const dispatch = useDispatch();

  const handleDismiss = () =>
    dispatch(closePlannerItemModal("showModifyModal"));

  const { deleteRecipeFromPlanner } = useDeleteRecipeFromPlanner();
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
    handleDismiss();
  };

  return (
    <FancyModalWithRoundTop
      height="220px"
      isOpen={!!showModifyModal}
      backdropDismiss
      onDidDismiss={handleDismiss}
    >
      <ModalHeader title="Add Recipe" handleClose={handleDismiss} />

      <IonContent>
        <IonList lines="full">
          <IonItem
            onClick={() => dispatch(setShowSelectWeekModal(showModifyModal))}
          >
            <IonLabel color="primary">Move to Another Day</IonLabel>
          </IonItem>
          <IonItem
            onClick={() => {
              dispatch(setRecipeDetailsId(showModifyModal));
              handleDismiss();
            }}
          >
            <IonLabel color="primary">Recipe Details</IonLabel>
          </IonItem>
          <IonItem onClick={handleDelete}>
            <IonLabel color="primary">Remove Recipe</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </FancyModalWithRoundTop>
  );
}
