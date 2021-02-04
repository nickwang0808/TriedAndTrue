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
import HorizontalLineWithText from "../../components/misc/HorizontalLineWithText";
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
    dispatch(setShowToast({ text: "Recipe Import Successful" }));
    handleDismiss();
  };

  const handleManualAddRecipe = () => {
    handleDismiss();
    dispatch(setShowAddOrEditRecipe(true));
  };

  let content = (
    <>
      <StyledImportContainer lines="none">
        <IonLabel position="stacked">Save Recipe From Website</IonLabel>
        <StyledFlex>
          <StyledIonInput
            color="primary"
            type="text"
            value={url}
            placeholder="Paste Recipe Link"
            onIonChange={(e) => setUrl(e.detail.value!)}
          />
          <IonButton expand="block" color="secondary" onClick={handleImport}>
            Save
          </IonButton>
        </StyledFlex>
      </StyledImportContainer>
      {warning && (
        <StyledWarningSpan>
          We'll do our best to import this recipe.
        </StyledWarningSpan>
      )}

      <StyledLineContainer>
        <HorizontalLineWithText color="#DCDCDC" text="OR" />
      </StyledLineContainer>

      <StyledFullWidthButton
        expand="block"
        fill="outline"
        color="secondary"
        onClick={handleManualAddRecipe}
      >
        Manually Add Recipe
      </StyledFullWidthButton>
    </>
  );
  if (loading) {
    content = <SavingImport />;
  }

  return (
    <FancyModalWithRoundTop
      height="270px"
      isOpen={showAddRecipeControlModal}
      backdropDismiss
      onDidDismiss={handleDismiss}
    >
      <ModalHeader title="Create New Recipe" handleClose={handleDismiss} />

      <IonContent>{content}</IonContent>
    </FancyModalWithRoundTop>
  );
}

const StyledFlex = styled.div`
  margin-top: 8px; // push the label up

  display: flex;
  align-items: center;
  width: 100%;
  gap: 4px;
`;

const StyledLineContainer = styled.div`
  width: 100%;
  padding: 16px;
`;

const StyledImportContainer = styled(IonItem)`
  display: flex;
  flex-direction: column;
`;

const StyledFullWidthButton = styled(IonButton)`
  margin: 8px 16px;
`;

const StyledWarningSpan = styled.div`
  text-align: center;
  padding: 4px 8px 0 8px;
  font-size: 14px;
`;

const StyledIonInput = styled(IonInput)`
  --padding-start: 8px !important; // specificity problem
  --padding-end: 8px !important;
  border: 1px solid var(--ion-color-primary);
`;
