import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { IonButton, IonContent, IonFooter } from "@ionic/react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import AddDirections from "../../components/AddRecipeComp/AddDirections";
import AddIngredients from "../../components/AddRecipeComp/AddIngredients";
import MainFormArea from "../../components/AddRecipeComp/MainFormArea";
import BlockSeparator from "../../components/misc/BlockSeparator";
import {
  InsertRecipeMutation,
  InsertRecipeMutationVariables,
  UpdateRecipeDetailMutation,
  UpdateRecipeDetailMutationVariables,
} from "../../generated/graphql";
import { INSERT_RECIPE_ONE } from "../../gql/mutations/insertRecipeOne.graphql";
import { UPDATE_RECIPE_DETAILS } from "../../gql/mutations/updateRecipeDetails.graphql";
import { GET_ALL_RECIPES } from "../../gql/query/getAllRecipes";
import { GET_RECIPE_DETAILS } from "../../gql/query/getRecipeDetails";
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

  const [
    insertRecipeOne,
    { loading: loading_insert, data: data_insert, error: error_insert },
  ] = useMutation<InsertRecipeMutation, InsertRecipeMutationVariables>(
    INSERT_RECIPE_ONE,
    { refetchQueries: [{ query: GET_ALL_RECIPES }] }
  );

  const [
    updateRecipeDetails,
    { loading: loading_update, data: data_update, error: error_pdate },
  ] = useMutation<
    UpdateRecipeDetailMutation,
    UpdateRecipeDetailMutationVariables
  >(UPDATE_RECIPE_DETAILS, {
    refetchQueries: [{ query: GET_RECIPE_DETAILS, variables: { id } }],
    awaitRefetchQueries: true,
  });

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
    } else {
      if (isDirty && id) {
        // perform update recipe
        updateRecipeDetails({
          variables: {
            _set: {
              ...dataWIthOutIngredients,
            },
            id,
            ingredientsStrings: ingredients?.map((ing) => ing.value) || [],
          },
        });
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

      <IonFooter>
        <IonButton
          onClick={() => handleSubmit(onSubmit)()}
          className="ion-margin-horizontal"
          expand="full"
          color="secondary"
        >
          Save Recipe
        </IonButton>
      </IonFooter>
    </>
  );
}
