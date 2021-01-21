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
        <IonTitle color="primary">
          {isNew ? "Create Recipe" : "Edit Recipe"}
        </IonTitle>
        <IonButtons slot="start">
          <IonButton onClick={handleClose}>
            <IonIcon icon={xclose} color="secondary" />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
}
