import { gql, useMutation } from "@apollo/client";
import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import {
  AddRecipeMutation,
  AddRecipeMutationVariables,
} from "../../generated/graphql";

const ADD_RECIPE = gql`
  mutation AddRecipe(
    $img: String
    $ingredients: json
    $title: String!
    $total_time: Int
    $yields: String
  ) {
    insert_recipe(
      objects: [
        {
          img: $img
          ingredients: $ingredients
          title: $title
          total_time: $total_time
          yields: $yields
        }
      ]
    ) {
      returning {
        id
        img
        ingredients
        title
        total_time
        yields
      }
    }
  }
`;

export default function RecipePage() {
  const [addRecipe] = useMutation<
    AddRecipeMutation,
    AddRecipeMutationVariables
  >(ADD_RECIPE);

  const handleAddRecipe = () => {
    addRecipe({
      variables: {},
    });
  };

  return (
    <IonPage>
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
}
