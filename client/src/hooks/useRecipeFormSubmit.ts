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
  const { updateRecipeDetails, loading_update } = useUpdateRecipeDetails(id);

  const dispatch = useDispatch();

  // prettier-ignore
  const { formState, handleSubmit, control, reset, setValue,errors } = useForm <IRecipeForm>({
      resolver: yupResolver(recipeFormSchema),
      defaultValues,
    });

  console.log(errors);
  // console.log(watch());

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

  const onSubmit = async (data: IRecipeForm) => {
    const { ingredients, ...dataWIthOutIngredients } = data;

    console.log("submit");
    if (isCreateNew) {
      try {
        insertRecipeOne({
          variables: {
            ...dataWIthOutIngredients,
            title: dataWIthOutIngredients.title!,
            ingredients: ingredients?.map((e) => e.value) || [],
            directions:
              dataWIthOutIngredients.directions?.map((e) => e.value) || [],
          },
        });
        dispatch(setShowToast({ text: "Recipe created!" }));
      } catch (error) {
        console.log(error);
        dispatch(setShowToast({ text: "Something went wrong", color: "red" }));
      }
    } else {
      // make sure the form is dirty to run the update mutation
      if (isDirty && id) {
        try {
          await updateRecipeDetails({
            variables: {
              _set: {
                ...dataWIthOutIngredients,
                directions:
                  dataWIthOutIngredients.directions?.map((e) => e.value) || [],
              },
              id,
              ingredientsStrings: ingredients?.map((ing) => ing.value) || [],
            },
          });
          setTimeout(() => {
            dispatch(setShowToast({ text: "Recipe Updated" }));
          }, 500);
        } catch (error) {
          console.log(error);
          dispatch(
            setShowToast({ text: "Something went wrong", color: "red" })
          );
        }
      } else return;
    }
    handleDismiss();
  };

  return {
    handleSubmit: handleSubmit(onSubmit),
    control,
    setValue,
    isDirty,
    loading_update,
  };
}
