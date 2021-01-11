import { useQuery } from "@apollo/client";
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import xclose from "../../assets/svg/close-x.svg";
import { StyledFullScreenModal } from "../../components/modals/fullScreenModalBase";
import { GetRecipeDetailsQuery } from "../../generated/graphql";
import { GET_RECIPE_DETAILS } from "../../gql/query/getRecipeDetails";
import { resetAddOrEditRecipe } from "../../redux/AddOrEditRecipe/AddOrEditRecipeSlice";
import { IAppState } from "../../redux/store";
import { emptyDefaultValue, mealType } from "../../utils/recipeSchema";
import AddOrEditRecipeChild from "./AddOrEditRecipeChild";

export default function AddOrEditRecipeModal() {
  const dispatch = useDispatch();

  const { id, showAddOrEditRecipe } = useSelector(
    (state: IAppState) => state.addOrEditRecipeSlice
  );

  const {
    loading,
    error,
    data: { recipe_by_pk } = {} as GetRecipeDetailsQuery,
  } = useQuery<GetRecipeDetailsQuery>(GET_RECIPE_DETAILS, {
    skip: !showAddOrEditRecipe || !id,
    variables: { id },
  });

  // useEffect(() => {
  //   if (id !== "null") {
  //     getRecipeDetails({ variables: { id } });
  //   }
  // }, [id]);

  if (loading) return <p>loading ...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <StyledFullScreenModal
      isOpen={showAddOrEditRecipe}
      onDidDismiss={() => dispatch(resetAddOrEditRecipe())}
    >
      <Header isNew={id === "null" ? true : false} />
      <AddOrEditRecipeChild
        id={id}
        isCreateNew={id === null ? true : false}
        defaultValues={
          id === "null"
            ? emptyDefaultValue
            : {
                cuisine: recipe_by_pk?.cuisine || null,
                total_time: recipe_by_pk?.total_time || null,
                meal_type: (recipe_by_pk?.meal_type as mealType) || null,
                yields: recipe_by_pk?.yields || null,
                title: recipe_by_pk?.title || null,
                directions:
                  (recipe_by_pk?.directions as Array<{ value: string }>) || [],
                ingredients:
                  recipe_by_pk?.recipe_ingredients_list.map((ing) => ({
                    value: ing.formatted_text as string,
                  })) || [],
              }
        }
      />
    </StyledFullScreenModal>
  );
}

function Header({ isNew }: { isNew: boolean }) {
  const dispatch = useDispatch();

  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonButton onClick={() => dispatch(resetAddOrEditRecipe())}>
            <IonIcon icon={xclose} color="secondary" />
          </IonButton>
        </IonButtons>
        <IonTitle color="primary">
          {isNew ? "Create Recipe" : "Edit Recipe"}
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}
