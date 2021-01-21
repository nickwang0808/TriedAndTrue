import styled from "@emotion/styled";
import { IonContent, IonItem, IonLabel, IonList } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalHeader from "../../components/headers/ModalHeader";
import { FancyModalWithRoundTop } from "../../components/modals/FancyModalWithRoundTop";
import useDeleteRecipe from "../../gql/mutations/useDeleteRecipeOne.graphql";
import {
  setRecipeId,
  setShowAddOrEditRecipe,
} from "../../redux/AddOrEditRecipe/AddOrEditRecipeSlice";
import {
  setRecipeDetailsId,
  setShowDetailsOptionModal,
} from "../../redux/RecipeDetailsSlice/recipeDetailsSlice";
import { IAppState } from "../../redux/store";

export default function DetailsOptionsModal() {
  const { showDetailsOptionModal, id } = useSelector(
    ({ recipeDetailsSlice }: IAppState) => recipeDetailsSlice
  );

  const dispatch = useDispatch();
  const handleDismiss = () => dispatch(setShowDetailsOptionModal(false));

  const handleOpenEditRecipe = () => {
    dispatch(setShowAddOrEditRecipe(true));
    dispatch(setRecipeId(id!));
    handleDismiss();
  };

  const { deleteRecipe } = useDeleteRecipe();
  const handleDeleteRecipe = () => {
    if (!id) return;
    const idInMem = id;

    dispatch(setRecipeDetailsId(null));

    deleteRecipe({
      variables: { id },

      optimisticResponse: {
        __typename: "mutation_root",
        delete_recipe_by_pk: {
          id: idInMem,
          __typename: "recipe",
        },
      },
      update: (cache, { data }) => {
        /*update function will throw data is undefined err,
         maybe add conditional chain to data*/
        if (!data || !data.delete_recipe_by_pk) return;
        const { id } = data.delete_recipe_by_pk;
        cache.modify({
          // id: `recipe:${id}`,
          fields: {
            [`recipe:{"where":{"title":{"_ilike":"%%"}}}`]: (
              curr,
              { readField }
            ) => {
              console.log(curr);
              // return [...curr];
              return curr.filter((elem: any) => readField("id", elem) !== id);
            },
          },
        });
      },
    });
    handleDismiss();
  };

  return (
    <StyledFancyModalWithBackdrop
      height="165px"
      isOpen={showDetailsOptionModal}
      onDidDismiss={handleDismiss}
    >
      <ModalHeader title="More Options" handleClose={handleDismiss} />
      <IonContent>
        <IonList lines="full">
          <IonItem>
            <IonLabel color="primary" onClick={handleOpenEditRecipe}>
              Edit Recipe
            </IonLabel>
          </IonItem>
          <IonItem lines="none" onClick={handleDeleteRecipe}>
            <IonLabel color="primary">Delete Recipe Recipe</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </StyledFancyModalWithBackdrop>
  );
}

const StyledFancyModalWithBackdrop = styled(FancyModalWithRoundTop)`
  --backdrop-opacity: var(--ion-backdrop-opacity, 0.4);
`;
