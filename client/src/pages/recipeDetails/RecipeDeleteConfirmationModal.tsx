import styled from "@emotion/styled";
import { IonButton, IonContent, IonItem } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalHeader from "../../components/headers/ModalHeader";
import { FancyModalWithRoundTop } from "../../components/modals/FancyModalWithRoundTop";
import useDeleteRecipe from "../../gql/mutations/useDeleteRecipeOne.graphql";
import { setShowDeleteRecipeConfirmationModal } from "../../redux/RecipeDetailsSlice/recipeDetailsSlice";
import { IAppState } from "../../redux/store";

export default function RecipeDeleteConfirmationModal() {
  const { showDeleteRecipeConfirmationModal, id } = useSelector(
    ({ recipeDetailsSlice }: IAppState) => recipeDetailsSlice
  );
  const dispatch = useDispatch();

  const handleDismiss = () =>
    dispatch(setShowDeleteRecipeConfirmationModal(false));

  const { handleDeleteRecipe } = useDeleteRecipe();

  return (
    <StyledFancyModalWithBackdrop
      height="200px"
      isOpen={showDeleteRecipeConfirmationModal}
      onDidDismiss={handleDismiss}
    >
      <ModalHeader title="Delete Recipe" handleClose={handleDismiss} />
      <IonContent>
        <IonItem lines="none">
          <p>Are you sure you want to remove this recipe?”</p>
        </IonItem>
        <StyledButtonContainer>
          <IonButton
            color="secondary"
            fill="outline"
            onClick={() => {
              handleDeleteRecipe(id);
              handleDismiss();
            }}
          >
            Delete
          </IonButton>
        </StyledButtonContainer>
      </IonContent>
    </StyledFancyModalWithBackdrop>
  );
}

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 16px;
`;

const StyledFancyModalWithBackdrop = styled(FancyModalWithRoundTop)`
  --backdrop-opacity: var(--ion-backdrop-opacity, 0.4);
`;
