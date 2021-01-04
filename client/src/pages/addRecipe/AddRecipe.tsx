import { useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import AddDirections from "../../components/AddRecipeComp/AddDirections";
import AddIngredients from "../../components/AddRecipeComp/AddIngredients";
import BlockSeparator from "../../components/misc/BlockSeparator";
import {
  AddRecipeMutation,
  AddRecipeMutationVariables,
} from "../../generated/graphql";
import { ADD_RECIPE } from "../../gql/mutations/addRecipe.graphql";

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

  const { register, formState, handleSubmit, watch, control } = useForm();

  const onSubmit = (data: any) => console.log({ data, formState });

  console.log(watch());

  return (
    <IonPage>
      <Header />

      <IonContent fullscreen>
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonList lines="none">
            <IonItem>
              <IonLabel position="stacked">Title</IonLabel>
              <Controller
                control={control}
                name="title"
                rules={{ required: true }}
                render={({ onChange, ref }) => (
                  <IonInput
                    placeholder="Recipe Title"
                    onIonChange={(e) => onChange(e.detail.value)}
                    ref={ref}
                  />
                )}
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Meal Type</IonLabel>
              <Controller
                control={control}
                name="type"
                rules={{ required: true }}
                defaultValue="unset"
                render={({ onChange, value, ref }) => (
                  <IonSelect
                    value={value}
                    placeholder="Select One"
                    onIonChange={(e) => onChange(e.detail.value)}
                    ref={ref}
                    defaultValue="lunch"
                  >
                    <IonSelectOption value="breakfast">
                      breakfast
                    </IonSelectOption>
                    <IonSelectOption value="lunch">lunch</IonSelectOption>
                    <IonSelectOption value="dinner">dinner</IonSelectOption>
                    <IonSelectOption value="snack">snack</IonSelectOption>
                    <IonSelectOption value="desert">desert</IonSelectOption>
                  </IonSelect>
                )}
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Total Time</IonLabel>
              <Controller
                name="time"
                control={control}
                defaultValue={0}
                render={({ onChange, ref }) => (
                  <IonInput
                    type="number"
                    placeholder="minutes"
                    ref={ref}
                    onIonChange={(e) => onChange(e.detail.value)}
                  />
                )}
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Servings</IonLabel>

              <Controller
                name="serving"
                control={control}
                defaultValue={0}
                render={({ onChange, ref }) => (
                  <IonInput
                    type="number"
                    placeholder="servings"
                    ref={ref}
                    onIonChange={(e) => onChange(e.detail.value)}
                  />
                )}
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Cuisine</IonLabel>

              <Controller
                name="serving"
                control={control}
                defaultValue={0}
                render={({ onChange, ref }) => (
                  <IonInput
                    type="text"
                    placeholder="Select Cuisine"
                    ref={ref}
                    onIonChange={(e) => onChange(e.detail.value)}
                  />
                )}
              />
            </IonItem>
          </IonList>
        </form>

        <div className="ion-margin-vertical" />

        <BlockSeparator title="Ingredients" />

        <AddIngredients control={control} />

        <BlockSeparator title="Directions" />
        <AddDirections control={control} />
      </IonContent>

      <IonFooter>
        {/* <IonToolbar> */}
        <IonButton
          onClick={() => handleSubmit(onSubmit)()}
          className="ion-margin-horizontal"
          expand="full"
        >
          Save Recipe
        </IonButton>
        {/* </IonToolbar> */}
      </IonFooter>
    </IonPage>
  );
}

const StyledIngredientList = styled(IonList)`
  padding: 8px;
`;

function Header() {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonButton>
            <IonIcon name="close" />
          </IonButton>
        </IonButtons>
        <IonTitle>Create Recipe</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}
