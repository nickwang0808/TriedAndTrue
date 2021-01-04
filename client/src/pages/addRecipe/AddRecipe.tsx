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
import AddInstructionLIstItem from "../../components/listItem/AddInstructionLIstItem";
import DirectionsListItem from "../../components/listItem/DirectionsListItem";
import IngredientListItem from "../../components/listItem/IngredientListItem";
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

  return (
    <IonPage>
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

      <IonContent fullscreen>
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Title</IonLabel>
            <IonInput placeholder="Recipe Title" />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Meal Type</IonLabel>
            <IonSelect
              /* value={gender} */ placeholder="Select One"
              // onIonChange={(e) => setGender(e.detail.value)}
            >
              <IonSelectOption value="breakfast">breakfast</IonSelectOption>
              <IonSelectOption value="lunch">lunch</IonSelectOption>
              <IonSelectOption value="dinner">dinner</IonSelectOption>
              <IonSelectOption value="snack">snack</IonSelectOption>
              <IonSelectOption value="desert">desert</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Total Time</IonLabel>
            <IonInput type="number" placeholder="minutes" defaultValue={1} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Servings</IonLabel>
            <IonInput type="number" />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Cuisine</IonLabel>
            <IonInput type="text" placeholder="Select Cuisine" />
          </IonItem>
        </IonList>

        <div className="ion-margin-vertical" />

        <BlockSeparator title="Ingredients" />

        <StyledIngredientList lines="none">
          <IngredientListItem
            materialText="beef"
            quantityText="1 1/2 lbs"
            showBackground
          />
          <IngredientListItem materialText="beef" quantityText="1 1/2 lbs" />
          <IngredientListItem
            materialText="beef"
            quantityText="1 1/2 lbs"
            showBackground
          />
          <IngredientListItem materialText="beef" quantityText="1 1/2 lbs" />
          <IonButton fill="outline">Add Ingredient</IonButton>
        </StyledIngredientList>
        <BlockSeparator title="Directions" />
        <StyledIngredientList lines="none">
          <DirectionsListItem
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quibusdam autem sapiente delectus culpa unde quas nulla consequatur enim. At accusantium velit similique optio a temporibus, nobis et! Placeat, eaque!"
            index={1}
            showBackground
          />
          <DirectionsListItem
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quibusdam autem sapiente delectus culpa unde quas nulla consequatur enim. At accusantium velit similique optio a temporibus, nobis et! Placeat, eaque!"
            index={2}
            // showBackground
          />
          <DirectionsListItem
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quibusdam autem sapiente delectus culpa unde quas nulla consequatur enim. At accusantium velit similique optio a temporibus, nobis et! Placeat, eaque!"
            index={3}
            showBackground
          />
          <AddInstructionLIstItem index={4} />

          <IonButton fill="outline">Add Instructions</IonButton>
        </StyledIngredientList>
      </IonContent>

      <IonFooter>
        {/* <IonToolbar> */}
        <IonButton className="ion-margin-horizontal" expand="full">
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
