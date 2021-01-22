import styled from "@emotion/styled";
import { IonContent, IonItem, IonLabel, IonList } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalHeader from "../../components/headers/ModalHeader";
import { FancyModalWithRoundTop } from "../../components/modals/FancyModalWithRoundTop";
import {
  setRecipeId,
  setShowAddOrEditRecipe,
} from "../../redux/AddOrEditRecipe/AddOrEditRecipeSlice";
import {
  setShowDeleteRecipeConfirmationModal,
  setShowDetailsOptionModal,
} from "../../redux/RecipeDetailsSlice/recipeDetailsSlice";
import { IAppState } from "../../redux/store";

export default function DetailsOptionsModal() {
  const { showDetailsOptionModal, id } = useSelector(
    ({ recipeDetailsSlice }: IAppState) => recipeDetailsSlice
  );

  const dispatch = useDispatch();
  const handleDismiss = () => dispatch(setShowDetailsOptionModal(false));

  const handleOpenEditRecipe = () => {
    dispatch(setShowAddOrEditRecipe(true));
    dispatch(setRecipeId(id!));
    handleDismiss();
  };

  const showConfirmDelete = () => {
    dispatch(setShowDeleteRecipeConfirmationModal(true));
    handleDismiss();
  };

  return (
    <StyledFancyModalWithBackdrop
      height="165px"
      isOpen={showDetailsOptionModal}
      onDidDismiss={handleDismiss}
    >
      <ModalHeader title="More Options" handleClose={handleDismiss} />
      <IonContent>
        <IonList lines="full">
          <IonItem>
            <IonLabel color="primary" onClick={handleOpenEditRecipe}>
              Edit Recipe
            </IonLabel>
          </IonItem>
          <IonItem lines="none" onClick={showConfirmDelete}>
            <IonLabel color="primary">Delete Recipe Recipe</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </StyledFancyModalWithBackdrop>
  );
}

const StyledFancyModalWithBackdrop = styled(FancyModalWithRoundTop)`
  --backdrop-opacity: var(--ion-backdrop-opacity, 0.4);
`;
