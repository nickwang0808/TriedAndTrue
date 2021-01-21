import styled from "@emotion/styled";
import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalHeader from "../../components/headers/ModalHeader";
import SavingImport from "../../components/loading/SavingImport";
import { FancyModalWithRoundTop } from "../../components/modals/FancyModalWithRoundTop";
import useImportRecipe from "../../gql/mutations/useImportRecipe.graphql";
import { setShowAddOrEditRecipe } from "../../redux/AddOrEditRecipe/AddOrEditRecipeSlice";
import { setShowAddRecipeControlModal } from "../../redux/AddOrEditRecipe/AddRecipeControlSlice";
import { IAppState } from "../../redux/store";
import { setShowToast } from "../../redux/toastSlice/toastSlice";
import validateImportUrl from "../../utils/validateImportUrl";

export default function ImportRecipeModal() {
  const { showAddRecipeControlModal } = useSelector(
    ({ AddRecipeControlSlice }: IAppState) => AddRecipeControlSlice
  );
  const [url, setUrl] = useState("");
  const [warning, setWarning] = useState(false);
  useEffect(() => {
    if (!url.length) {
      setWarning(false);
      return;
    }
    const warning = validateImportUrl(url);
    setWarning(!warning);
  }, [url]);

  const dispatch = useDispatch();
  const handleDismiss = () => {
    setUrl("");
    setWarning(false);
    dispatch(setShowAddRecipeControlModal(false));
  };

  const { importRecipe, data, loading } = useImportRecipe();

  const handleImport = async () => {
    if (!url.length) return;
    await importRecipe({ variables: { url, wildMode: !!warning } });
    dispatch(setShowToast("Recipe Import Successful"));
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
      {warning && <span>This website may not be imported properly</span>}
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
