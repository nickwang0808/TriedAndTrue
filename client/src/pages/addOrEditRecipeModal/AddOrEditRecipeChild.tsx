import { yupResolver } from "@hookform/resolvers/yup";
import { IonContent } from "@ionic/react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import AddDirections from "../../components/AddRecipeComp/AddDirections";
import AddIngredients from "../../components/AddRecipeComp/AddIngredients";
import MainFormArea from "../../components/AddRecipeComp/MainFormArea";
import SaveFooterButton from "../../components/layout/SaveFooterButton";
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
  const { formState, handleSubmit, control, reset, watch } = useForm<IRecipeForm>({
    resolver: yupResolver(recipeFormSchema),
    defaultValues,
  });

  console.log(watch());

  useEffect(() => {
    reset(defaultValues);
    // eslint-disable-next-line
  }, []);

  const { isDirty } = formState;
  const onSubmit = (data: IRecipeForm) => {
    // amp ingredient out to write to raw_text column
    const { ingredients, ...dataWIthOutIngredients } = data;
    let mappedIngredients: Array<{ raw_text: string }> | [] = [];
    if (ingredients) {
      mappedIngredients = ingredients.map((ing) => {
        return { raw_text: ing.value };
      });
    }

    if (isCreateNew) {
      console.log("submit");
      try {
        insertRecipeOne({
          variables: {
            object: {
              ...dataWIthOutIngredients,
              recipe_ingredients_list: {
                data: mappedIngredients,
              },
            },
          },
          // TODO: use optimistic ui
          // optimisticResponse: {
          //   __typename: "mutation_root",
          //   InsertRecipeOneDerived: {
          //     __typename: "InsertRecipeOneDerivedOutput",
          //     recipe: {
          //       __typename: "recipe",
          //       ...dataWIthOutIngredients!,
          //       id: "dwad",
          //     },
          //   },
          // },
        });
        dispatch(setShowToast("Recipe Created"));
      } catch (error) {
        console.log(error);
      }
    } else {
      if (isDirty && id) {
        // perform update recipe
        try {
          updateRecipeDetails({
            variables: {
              _set: {
                ...dataWIthOutIngredients,
              },
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

  if (loading_insert) return <p>loading...</p>;
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
