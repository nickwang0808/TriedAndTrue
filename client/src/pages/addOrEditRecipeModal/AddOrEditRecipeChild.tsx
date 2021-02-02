import { IonContent } from "@ionic/react";
import React from "react";
import AddDirections from "../../components/AddRecipeComp/AddDirections";
import AddIngredients from "../../components/AddRecipeComp/AddIngredients";
import SaveFooterButton from "../../components/layout/SaveFooterButton";
import BlockSeparator from "../../components/misc/BlockSeparator";
import useRecipeFormSubmit from "../../hooks/useRecipeFormSubmit";
import { IRecipeForm } from "../../utils/recipeSchema";
import MainFormArea from "./MainFormArea";

interface IProps {
  isCreateNew: boolean;
  defaultValues: IRecipeForm;
  id: string | null;
  handleDismiss: () => void;
}

export default function AddOrEditRecipeChild({
  defaultValues,
  isCreateNew,
  id,
  handleDismiss,
}: IProps) {
  const {
    onSubmit,
    handleSubmit,
    control,
    setValue,
    isDirty,
  } = useRecipeFormSubmit(isCreateNew, id, handleDismiss, defaultValues);

  return (
    <>
      <IonContent fullscreen>
        <form onSubmit={handleSubmit(onSubmit)}>
          <MainFormArea control={control} setValue={setValue} />
          {/* dummy field to hold the img url */}

          <div className="ion-margin-vertical" />

          <BlockSeparator title="Ingredients" />
          <AddIngredients control={control} />

          <BlockSeparator title="Directions" />
          <AddDirections control={control} />
        </form>
      </IonContent>

      <SaveFooterButton
        disabled={!isDirty}
        text="Save Recipe"
        action={() => handleSubmit(onSubmit)()}
      />
    </>
  );
}
