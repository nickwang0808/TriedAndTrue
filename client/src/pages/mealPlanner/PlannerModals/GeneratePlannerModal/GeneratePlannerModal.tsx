import {
  IonButton,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalHeader from "../../../../components/headers/ModalHeader";
import { StyledCheckBox } from "../../../../components/listItem/ShoppingListCheckBox";
import { FancyModalWithRoundTop } from "../../../../components/modals/FancyModalWithRoundTop";
import useGeneratePlanner from "../../../../gql/mutations/useGeneratePlanner.graphql";
import {
  checkMealType,
  setShowGeneratePlannerModal,
} from "../../../../redux/Planner/GeneratePlannerModalSlice";
import { IAppState } from "../../../../redux/store";
import getMonAndSunDate from "../../../../utils/getMonAndSunDate";
import { mealTypeArray } from "../../../../utils/recipeSchema";

export default function GeneratePlannerModal() {
  const dispatch = useDispatch();
  const { showGeneratePlannerModal, mealTypes } = useSelector(
    ({ generatePlannerModalSlice }: IAppState) => generatePlannerModalSlice
  );
  const { selectedWeek } = useSelector(
    ({ plannerDateRangeSlice }: IAppState) => plannerDateRangeSlice
  );

  const { date_start, date_end } = getMonAndSunDate(selectedWeek, "MMM d");

  const handleDismiss = () => dispatch(setShowGeneratePlannerModal(false));

  const { handleGenerate, loading } = useGeneratePlanner();
  const generate = async () => {
    const { date_start, date_end } = getMonAndSunDate(
      selectedWeek,
      "yyyy-MM-dd"
    );
    await handleGenerate(mealTypes, date_start, date_end);
    handleDismiss();
  };

  const buttonText = loading
    ? "Generating..."
    : `Create Meal Plan for ${date_start} - ${date_end}`;

  return (
    <FancyModalWithRoundTop
      isOpen={showGeneratePlannerModal}
      onDidDismiss={handleDismiss}
      height="544px"
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
              <IonItem key={meal}>
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
        <IonButton
          fill="solid"
          color="secondary"
          expand="full"
          disabled={loading}
          onClick={generate}
        >
          {buttonText}
        </IonButton>
      </IonContent>
    </FancyModalWithRoundTop>
  );
}
