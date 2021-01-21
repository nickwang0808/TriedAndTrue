import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import xclose from "../../assets/svg/close-x.svg";
import {
  resetAddOrEditRecipe,
  setShowConfirmCancelModal,
} from "../../redux/AddOrEditRecipe/AddOrEditRecipeSlice";
import { IAppState } from "../../redux/store";
import styled from "@emotion/styled";


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
            <IonIcon icon={xclose} color="secondary" />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
}

const StyledHeader = styled(IonTitle)`
  padding-inline: 0 !important;
`;

