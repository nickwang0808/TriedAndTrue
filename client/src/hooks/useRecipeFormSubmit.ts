import { useDispatch } from "react-redux";
import useUpdateRecipeDetails from "../gql/mutations/updateRecipeDetails.graphql";
import useInsertRecipeOne from "../gql/mutations/useInsertRecipeOne.graphql";
import { setShowToast } from "../redux/toastSlice/toastSlice";
import { IRecipeForm } from "../utils/recipeSchema";

export default function useRecipeFormSubmit(
  isCreateNew: boolean,
  id: string | null,
  handleDismiss: () => void,
  isDirty: boolean
) {
  const {
    error_insert,
    insertRecipeOne,
    loading_insert,
  } = useInsertRecipeOne();
  const { updateRecipeDetails } = useUpdateRecipeDetails(id);

  const dispatch = useDispatch();

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

  return {
    onSubmit,
  };
}
