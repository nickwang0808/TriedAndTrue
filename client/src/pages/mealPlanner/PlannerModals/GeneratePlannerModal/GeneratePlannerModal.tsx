import { IonContent, IonItem, IonLabel, IonList } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalHeader from "../../../../components/headers/ModalHeader";
import { StyledCheckBox } from "../../../../components/listItem/ShoppingListCheckBox";
import { FancyModalWithRoundTop } from "../../../../components/modals/FancyModalWithRoundTop";
import {
  checkMealType,
  setShowGeneratePlannerModal,
} from "../../../../redux/Planner/GeneratePlannerModalSlice";
import { IAppState } from "../../../../redux/store";
import { mealTypeArray } from "../../../../utils/recipeSchema";

export default function GeneratePlannerModal() {
  const dispatch = useDispatch();
  const { showGeneratePlannerModal, mealTypes } = useSelector(
    ({ generatePlannerModalSlice }: IAppState) => generatePlannerModalSlice
  );

  const handleDismiss = () => dispatch(setShowGeneratePlannerModal(false));

  return (
    <FancyModalWithRoundTop
      isOpen={showGeneratePlannerModal}
      onDidDismiss={handleDismiss}
      height="480px"
    >
      <ModalHeader
        title="Automatic Meal Planning"
        handleClose={handleDismiss}
      />
      <IonContent className="ion-padding-horizontal">
        <p>
          Which meals are you looking for this week? (Any recipes current set
          will be replaced)
        </p>
        <IonList lines="full">
          {mealTypeArray.map((meal) => {
            if (!meal) return null;
            return (
              <IonItem id={meal}>
                <IonLabel>{meal}</IonLabel>
                <StyledCheckBox
                  slot="start"
                  color="secondary"
                  value={meal}
                  checked={!!mealTypes.find((e) => e === meal)}
                  onIonChange={({ detail }) => dispatch(checkMealType(detail))}
                />
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </FancyModalWithRoundTop>
  );
}
