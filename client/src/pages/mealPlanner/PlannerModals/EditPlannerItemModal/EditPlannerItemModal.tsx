import { IonContent, IonItem, IonLabel, IonList } from "@ionic/react";
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
  const { showModifyModal } = useSelector(
    ({ PlannerItemModalSlice }: IAppState) => PlannerItemModalSlice
  );
  const dispatch = useDispatch();

  const handleDismiss = () =>
    dispatch(closePlannerItemModal("showModifyModal"));

  const { handleDelete } = useDeleteRecipeFromPlanner();

  return (
    <FancyModalWithRoundTop
      height="270px"
      isOpen={!!showModifyModal}
      backdropDismiss
      onDidDismiss={handleDismiss}
    >
      <ModalHeader title="Recipe Options" handleClose={handleDismiss} />

      <IonContent>
        <IonList lines="full">
          <IonItem
            onClick={() => {
              dispatch(setRecipeDetailsId(showModifyModal));
              handleDismiss();
            }}
          >
            <IonLabel color="primary">View Details</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel color="primary">Add Ingredients to List</IonLabel>
          </IonItem>
          <IonItem
            onClick={() => dispatch(setShowSelectWeekModal(showModifyModal))}
          >
            <IonLabel color="primary">Move to Another Day</IonLabel>
          </IonItem>
          <IonItem
            onClick={() => {
              handleDelete();
              handleDismiss();
            }}
          >
            <IonLabel color="primary">Remove from Meal Plan</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </FancyModalWithRoundTop>
  );
}
