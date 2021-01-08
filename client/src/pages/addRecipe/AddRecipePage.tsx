import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import AddDirections from "../../components/AddRecipeComp/AddDirections";
import AddIngredients from "../../components/AddRecipeComp/AddIngredients";
import MainFormArea from "../../components/AddRecipeComp/MainFormArea";
import BlockSeparator from "../../components/misc/BlockSeparator";
import {
  InsertRecipeMutation,
  InsertRecipeMutationVariables,
} from "../../generated/graphql";
import { INSERT_RECIPE_ONE } from "../../gql/mutations/insertRecipeOne.graphql";
import { IRecipeForm, recipeFormSchema } from "../../utils/recipeSchema";

export default function AddRecipePage() {
  const {
    formState,
    handleSubmit,
    watch,
    control,
    errors,
  } = useForm<IRecipeForm>({
    resolver: yupResolver(recipeFormSchema),
    defaultValues: {
      cuisine: null,
      total_time: null,
      meal_type: null,
      yields: null,
      title: null,
    },
  });

  const [insertRecipeOne, { loading, data, error }] = useMutation<
    InsertRecipeMutation,
    InsertRecipeMutationVariables
  >(INSERT_RECIPE_ONE);

  const onSubmit = (data: IRecipeForm) => {
    console.log({ data, formState });

    // amp ingredient out to write to raw_text column
    const { ingredients, ...dataWIthOutIngredients } = data;
    let mappedIngredients: Array<{ raw_text: string }> | [] = [];
    if (ingredients) {
      mappedIngredients = ingredients.map((ing) => {
        return { raw_text: ing.value };
      });
    }

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
  };

  console.log(errors);
  // console.log(watch());

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <IonPage>
      <Header />

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
    </IonPage>
  );
}

function Header() {
  const history = useHistory();

  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonButton onClick={() => history.goBack()}>
            <IonIcon icon={"close"} color="secondary" />
          </IonButton>
        </IonButtons>
        <IonTitle color="primary">Create Recipe</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}
