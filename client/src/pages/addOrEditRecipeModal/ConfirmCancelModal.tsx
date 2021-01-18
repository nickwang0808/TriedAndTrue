import styled from "@emotion/styled";
import { IonButton, IonContent, IonItem } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalHeader from "../../components/headers/ModalHeader";
import { FancyModalWithRoundTop } from "../../components/modals/FancyModalWithRoundTop";
import {
  resetAddOrEditRecipe,
  setShowConfirmCancelModal,
} from "../../redux/AddOrEditRecipe/AddOrEditRecipeSlice";
import { IAppState } from "../../redux/store";

export default function ConfirmCancelModal() {
  const { showConfirmCancelModal } = useSelector(
    ({ addOrEditRecipeSlice }: IAppState) => addOrEditRecipeSlice
  );
  const dispatch = useDispatch();

  const handleDismissSelf = () => dispatch(setShowConfirmCancelModal(false));
  const handleDismissAll = () => {
    dispatch(setShowConfirmCancelModal(false));
    dispatch(resetAddOrEditRecipe());
  };
  return (
    <StyledFullScreenModalWithNewBackDrop
      height="200px"
      isOpen={showConfirmCancelModal}
      backdropDismiss
      onDidDismiss={handleDismissSelf}
    >
      <ModalHeader
        title="Recreate Weekly Meal Plan"
        handleClose={handleDismissSelf}
      />

      <IonContent>
        <IonItem lines="none">
          <p>Any changes made to this recipe will be discarded... FOREVER!</p>
        </IonItem>
        <StyledButtonContainer>
          <IonButton
            color="secondary"
            fill="outline"
            onClick={handleDismissSelf}
          >
            No Go Back
          </IonButton>
          <IonButton color="secondary" fill="solid" onClick={handleDismissAll}>
            Yes, Cancel Change
          </IonButton>
        </StyledButtonContainer>
      </IonContent>
    </StyledFullScreenModalWithNewBackDrop>
  );
}

const StyledFullScreenModalWithNewBackDrop = styled(FancyModalWithRoundTop)`
  /* force  this modal to displace backdrop, when multi modal are present, 
only the first one will get the backdrop
 */
  --backdrop-opacity: var(--ion-backdrop-opacity, 0.4);
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 16px;
`;
