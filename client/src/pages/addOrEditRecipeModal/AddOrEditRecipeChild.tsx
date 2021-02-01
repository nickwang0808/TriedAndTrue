import { yupResolver } from "@hookform/resolvers/yup";
import { IonContent } from "@ionic/react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import AddDirections from "../../components/AddRecipeComp/AddDirections";
import AddIngredients from "../../components/AddRecipeComp/AddIngredients";
import MainFormArea from "../../components/AddRecipeComp/MainFormArea";
import SaveFooterButton from "../../components/layout/SaveFooterButton";
import LoaderCentered from "../../components/loading/LoaderCentered";
import BlockSeparator from "../../components/misc/BlockSeparator";
import useUpdateRecipeDetails from "../../gql/mutations/updateRecipeDetails.graphql";
import useInsertRecipeOne from "../../gql/mutations/useInsertRecipeOne.graphql";
import { setFormIsDirty } from "../../redux/AddOrEditRecipe/AddOrEditRecipeSlice";
import { setShowToast } from "../../redux/toastSlice/toastSlice";
import { IRecipeForm, recipeFormSchema } from "../../utils/recipeSchema";

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
  const { error_insert, insertRecipeOne, loading_insert } = useInsertRecipeOne();
  const { updateRecipeDetails } = useUpdateRecipeDetails(id);

  // --------------------- Form Control ---------------------------------
  // prettier-ignore
  const { formState, handleSubmit, control, reset } = useForm<IRecipeForm>({
    resolver: yupResolver(recipeFormSchema),
    defaultValues,
  });

  // console.log(watch());

  /*  do not use viewDidenter, additional modals with cause that to trigger,
  use normal useEffect instead */
  useEffect(() => {
    reset(defaultValues);
    // eslint-disable-next-line
  }, []);

  // formState needed to be read before it starts to work per rhf doc
  const { isDirty } = formState;
  const onSubmit = (data: IRecipeForm) => {
    const { ingredients, ...dataWIthOutIngredients } = data;

    if (isCreateNew) {
      console.log("submit");
      try {
        insertRecipeOne({
          variables: {
            object: {
              ...dataWIthOutIngredients,
              title: dataWIthOutIngredients.title!,
              ingredients: ingredients?.map((e) => e.value) || [],
            },
          },
        });
        dispatch(setShowToast("Recipe Created"));
      } catch (error) {
        console.log(error);
      }
    } else {
      // make sure the form is dirty to run the update mutation
      if (isDirty && id) {
        try {
          updateRecipeDetails({
            variables: {
              _set: { ...dataWIthOutIngredients },
              id,
              ingredientsStrings: ingredients?.map((ing) => ing.value) || [],
            },
          });
          dispatch(setShowToast("Recipe Updated"));
        } catch (error) {
          console.log(error);
        }
      } else return;
    }
    handleDismiss();
  };
  // --------------------- Form Control ---------------------------------

  // only show cancel confirmation when form is dirty
  const dispatch = useDispatch();
  useEffect(() => {
    if (formState.isDirty) {
      dispatch(setFormIsDirty(true));
    }
  }, [formState]);

  if (loading_insert) return <LoaderCentered />;
  if (error_insert) return <p>{error_insert.message}</p>;
  return (
    <>
      <IonContent fullscreen>
        <form onSubmit={handleSubmit(onSubmit)}>
          <MainFormArea control={control} />

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
