import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import useUpdateRecipeDetails from "../gql/mutations/updateRecipeDetails.graphql";
import useInsertRecipeOne from "../gql/mutations/useInsertRecipeOne.graphql";
import { setFormIsDirty } from "../redux/AddOrEditRecipe/AddOrEditRecipeSlice";
import { setShowToast } from "../redux/toastSlice/toastSlice";
import { IRecipeForm, recipeFormSchema } from "../utils/recipeSchema";

export default function useRecipeFormSubmit(
  isCreateNew: boolean,
  id: string | null,
  handleDismiss: () => void,
  defaultValues: IRecipeForm
) {
  const { insertRecipeOne } = useInsertRecipeOne();
  const { updateRecipeDetails } = useUpdateRecipeDetails(id);

  const dispatch = useDispatch();

  // prettier-ignore
  const { formState, handleSubmit, control, reset, setValue } = useForm <IRecipeForm>({
      resolver: yupResolver(recipeFormSchema),
      defaultValues,
    });

  // formState needed to be read before it starts to work per rhf doc
  const { isDirty } = formState;

  useEffect(() => {
    if (!isDirty) {
      reset(defaultValues);
    }
  }, [defaultValues]);

  // only show cancel confirmation when form is dirty
  useEffect(() => {
    if (formState.isDirty) {
      dispatch(setFormIsDirty(true));
    }
  }, [formState]);

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
        dispatch(setShowToast({ text: "Recipe Created" }));
      } catch (error) {
        console.log(error);
        dispatch(setShowToast({ text: "Something Went Wrong", color: "red" }));
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
          dispatch(setShowToast({ text: "Recipe Updated" }));
        } catch (error) {
          console.log(error);
          dispatch(
            setShowToast({ text: "Something Went Wrong", color: "red" })
          );
        }
      } else return;
    }
    handleDismiss();
  };

  return {
    onSubmit,
    handleSubmit,
    control,
    setValue,
    isDirty,
  };
}
