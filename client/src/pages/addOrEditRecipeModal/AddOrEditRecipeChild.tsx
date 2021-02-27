import { IonContent } from "@ionic/react";
import React from "react";
import SaveFooterButton from "../../components/layout/SaveFooterButton";
import BlockSeparator from "../../components/misc/BlockSeparator";
import useRecipeFormSubmit from "../../hooks/useRecipeFormSubmit";
import { IRecipeForm } from "../../utils/recipeSchema";
import AddDirections from "./AddRecipeComp/AddDirections";
import AddIngredients from "./AddRecipeComp/AddIngredients";
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
    loading_update,
  } = useRecipeFormSubmit(isCreateNew, id, handleDismiss, defaultValues);

  const buttonText = loading_update ? "Saving Changes..." : "Save";

  return (
    <>
      <IonContent fullscreen>
        <form onSubmit={handleSubmit(onSubmit)}>
          <MainFormArea control={control} setValue={setValue} />

          <div className="ion-margin-vertical" />

          <BlockSeparator title="Ingredients" />
          <AddIngredients control={control} />

          <BlockSeparator title="Directions" />
          <AddDirections control={control} />
        </form>
      </IonContent>

      <SaveFooterButton
        disabled={!isDirty || loading_update}
        text={buttonText}
        action={() => handleSubmit(onSubmit)()}
      />
    </>
  );
}
