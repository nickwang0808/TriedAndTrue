import styled from "@emotion/styled";
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { close } from "ionicons/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetAddOrEditRecipe,
  setShowConfirmCancelModal,
} from "../../redux/AddOrEditRecipe/AddOrEditRecipeSlice";
import { IAppState } from "../../redux/store";
import StyledIonIcon from "../misc/StyledIonIcon";

interface IProps {
  isNew: boolean;
}

export default function AddOrEditRecipeHeader({ isNew }: IProps) {
  const dispatch = useDispatch();
  const { formIsDirty } = useSelector(
    ({ addOrEditRecipeSlice }: IAppState) => addOrEditRecipeSlice
  );

  const handleClose = () => {
    if (formIsDirty) {
      dispatch(setShowConfirmCancelModal(true));
    } else {
      dispatch(resetAddOrEditRecipe());
    }
  };

  return (
    <IonHeader>
      <IonToolbar>
        <StyledHeader color="primary">
          {isNew ? "Create Recipe" : "Edit Recipe"}
        </StyledHeader>
        <IonButtons slot="start">
          <IonButton onClick={handleClose}>
            <StyledIonIcon icon={close} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
}

const StyledHeader = styled(IonTitle)`
  padding-inline: 0 !important;
`;
