import { yupResolver } from "@hookform/resolvers/yup";
import { IonContent } from "@ionic/react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import AddDirections from "../../components/AddRecipeComp/AddDirections";
import AddIngredients from "../../components/AddRecipeComp/AddIngredients";
import SaveFooterButton from "../../components/layout/SaveFooterButton";
import BlockSeparator from "../../components/misc/BlockSeparator";
import useRecipeFormSubmit from "../../hooks/useRecipeFormSubmit";
import { setFormIsDirty } from "../../redux/AddOrEditRecipe/AddOrEditRecipeSlice";
import { IRecipeForm, recipeFormSchema } from "../../utils/recipeSchema";
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
  // prettier-ignore
  const { formState, handleSubmit, control, reset, setValue } = useForm<IRecipeForm>({
    resolver: yupResolver(recipeFormSchema),
    defaultValues,
  });

  const { isDirty } = formState;

  useEffect(() => {
    if (!isDirty) {
      reset(defaultValues);
    }
  }, [defaultValues]);

  // formState needed to be read before it starts to work per rhf doc

  const { onSubmit } = useRecipeFormSubmit(
    isCreateNew,
    id,
    handleDismiss,
    isDirty
  );

  // only show cancel confirmation when form is dirty
  const dispatch = useDispatch();
  useEffect(() => {
    if (formState.isDirty) {
      dispatch(setFormIsDirty(true));
    }
  }, [formState]);

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
