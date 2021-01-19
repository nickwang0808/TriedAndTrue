import styled from "@emotion/styled";
import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalHeader from "../../components/headers/ModalHeader";
import SavingImport from "../../components/loading/SavingImport";
import { FancyModalWithRoundTop } from "../../components/modals/FancyModalWithRoundTop";
import useImportRecipe from "../../gql/mutations/useImportRecipe.graphql";
import { setShowAddOrEditRecipe } from "../../redux/AddOrEditRecipe/AddOrEditRecipeSlice";
import { setShowAddRecipeControlModal } from "../../redux/AddOrEditRecipe/AddRecipeControlSlice";
import { IAppState } from "../../redux/store";

export default function ImportRecipeModal() {
  const { showAddRecipeControlModal } = useSelector(
    ({ AddRecipeControlSlice }: IAppState) => AddRecipeControlSlice
  );
  const dispatch = useDispatch();
  const handleDismiss = () => dispatch(setShowAddRecipeControlModal(false));

  const [url, setUrl] = useState("");

  const { importRecipe, data, loading } = useImportRecipe();

  const handleImport = async () => {
    if (!url.length) return;
    await importRecipe({ variables: { url } });
    handleDismiss();
  };

  const handleManualAddRecipe = () => {
    handleDismiss();
    dispatch(setShowAddOrEditRecipe(true));
  };

  let content = (
    <>
      <IonItem lines="none">
        <IonLabel position="stacked">Save Recipe From Website</IonLabel>
        <StyledIonInput
          color="primary"
          type="text"
          value={url}
          placeholder="Paste Recipe Link"
          onIonChange={(e) => setUrl(e.detail.value!)}
        />
      </IonItem>
      <StyledFullWidhtButton
        expand="block"
        color="secondary"
        onClick={handleImport}
      >
        Save
      </StyledFullWidhtButton>
      <StyledFullWidhtButton
        expand="block"
        color="secondary"
        onClick={handleManualAddRecipe}
      >
        Manually Add Recipe
      </StyledFullWidhtButton>
    </>
  );
  if (loading) {
    content = <SavingImport />;
  }

  return (
    <FancyModalWithRoundTop
      height="300px"
      isOpen={showAddRecipeControlModal}
      backdropDismiss
      onDidDismiss={handleDismiss}
    >
      <ModalHeader title="Create New Recipe" handleClose={handleDismiss} />

      <IonContent>{content}</IonContent>
    </FancyModalWithRoundTop>
  );
}

const StyledFullWidhtButton = styled(IonButton)`
  margin: 8px 16px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 16px;
`;

const StyledIonInput = styled(IonInput)`
  margin-top: 8px;
  --padding-start: 8px !important; // specificity problem
  --padding-end: 8px !important;
  border: 1px solid var(--ion-color-primary);
`;
