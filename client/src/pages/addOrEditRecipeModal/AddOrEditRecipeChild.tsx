import { yupResolver } from "@hookform/resolvers/yup";
import { IonContent } from "@ionic/react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import AddDirections from "../../components/AddRecipeComp/AddDirections";
import AddIngredients from "../../components/AddRecipeComp/AddIngredients";
import MainFormArea from "../../components/AddRecipeComp/MainFormArea";
import SaveFooterButton from "../../components/layout/SaveFooterButton";
import BlockSeparator from "../../components/misc/BlockSeparator";
import useUpdateRecipeDetails from "../../gql/mutations/updateRecipeDetails.graphql";
import useInsertRecipeOne from "../../gql/mutations/useInsertRecipeOne.graphql";
import { IRecipeForm, recipeFormSchema } from "../../utils/recipeSchema";

interface IProps {
  isCreateNew: boolean;
  defaultValues: IRecipeForm;
  id: string | null;
}

export default function AddOrEditRecipeChild({
  defaultValues,
  isCreateNew,
  id,
}: IProps) {
  const {
    formState,
    handleSubmit,
    watch,
    control,
    errors,
    reset,
  } = useForm<IRecipeForm>({
    resolver: yupResolver(recipeFormSchema),
    defaultValues,
  });

  console.log(watch());

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);

  const {
    data_insert,
    error_insert,
    insertRecipeOne,
    loading_insert,
  } = useInsertRecipeOne();

  const {
    updateRecipeDetails,
    loading_update,
    data_update,
    error_update,
  } = useUpdateRecipeDetails(id);

  const { isDirty, dirtyFields } = formState;
  const onSubmit = (data: IRecipeForm) => {
    // console.log({ data });

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
        });
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
        } catch (error) {
          console.log(error);
        }
      } else return;
    }
  };

  // console.log(errors);
  // // console.log(watch());

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
        text="Save Recipe"
        action={() => handleSubmit(onSubmit)()}
      />
    </>
  );
}
