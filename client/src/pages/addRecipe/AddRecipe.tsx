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
import AddDirections from "../../components/AddRecipeComp/AddDirections";
import AddIngredients from "../../components/AddRecipeComp/AddIngredients";
import MainFormArea from "../../components/AddRecipeComp/MainFormArea";
import BlockSeparator from "../../components/misc/BlockSeparator";
import {
  AddRecipeMutation,
  AddRecipeMutationVariables,
} from "../../generated/graphql";
import { ADD_RECIPE } from "../../gql/mutations/addRecipe.graphql";
import { IRecipeForm, recipeFormSchema } from "../../utils/recipeSchema";

export default function AddRecipe() {
  const [addRecipe] = useMutation<
    AddRecipeMutation,
    AddRecipeMutationVariables
  >(ADD_RECIPE);

  // const handleAddRecipe = () => {
  //   addRecipe({
  //     variables: {},
  //   });
  // };

  const {
    formState,
    handleSubmit,
    watch,
    control,
    errors,
  } = useForm<IRecipeForm>({ resolver: yupResolver(recipeFormSchema) });

  const onSubmit = (data: IRecipeForm) => console.log({ data, formState });

  console.log(errors);
  // console.log(watch());

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
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonButton>
            <IonIcon name="close" color="secondary" />
          </IonButton>
        </IonButtons>
        <IonTitle color="primary">Create Recipe</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}
