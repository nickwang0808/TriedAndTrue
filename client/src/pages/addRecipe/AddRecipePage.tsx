import { useLazyQuery } from "@apollo/client";
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useLayoutEffect } from "react";
import { RouteComponentProps, useHistory } from "react-router";
import { GetRecipeDetailsQuery } from "../../generated/graphql";
import { GET_RECIPE_DETAILS } from "../../gql/query/getRecipeDetails";
import { IRecipeForm, mealType } from "../../utils/recipeSchema";
import AddRecipeChild from "./AddRecipeChild";

const emptyDefaultValue: IRecipeForm = {
  cuisine: null,
  total_time: null,
  meal_type: null,
  yields: null,
  title: null,
  directions: null,
  ingredients: null,
};

interface IProps
  extends RouteComponentProps<{
    // if "null" then it's not create new recipe
    id: string;
  }> {}

export default function AddRecipePage({
  match: {
    params: { id },
  },
}: IProps) {
  const [
    getRecipeDetails,
    { loading, error, data: { recipe_by_pk } = {} as GetRecipeDetailsQuery },
  ] = useLazyQuery<GetRecipeDetailsQuery>(GET_RECIPE_DETAILS);

  useLayoutEffect(() => {
    if (id !== "null") {
      getRecipeDetails({ variables: { id } });
    }
  }, [id]);

  if (loading) return <p>loading ...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <IonPage>
      <Header />

      <AddRecipeChild
        isCreateNew={id !== "null" ? true : false}
        defaultValue={
          id === "null"
            ? emptyDefaultValue
            : {
                cuisine: recipe_by_pk?.cuisine || null,
                total_time: recipe_by_pk?.total_time || null,
                meal_type: (recipe_by_pk?.meal_type as mealType) || null,
                yields: recipe_by_pk?.yields || null,
                title: recipe_by_pk?.title || null,
                directions:
                  (recipe_by_pk?.directions as Array<{ value: string }>) ||
                  null,
                ingredients:
                  recipe_by_pk?.recipe_ingredients_list.map((ing) => ({
                    value: ing.formatted_text as string,
                  })) || null,
              }
        }
      />
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
