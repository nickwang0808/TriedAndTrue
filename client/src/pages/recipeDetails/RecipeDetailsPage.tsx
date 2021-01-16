import styled from "@emotion/styled";
import {
  IonContent,
  IonLabel,
  IonList,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CookTime from "../../components/detailsPageComp/CookTime";
import DetailsPageTitle from "../../components/detailsPageComp/DetailsPageTitle";
import DirectionsListItem from "../../components/listItem/DirectionsListItem";
import IngredientListItem from "../../components/listItem/IngredientListItem";
import { StyledFullScreenModal } from "../../components/modals/fullScreenModalBase";
import useGetRecipeDetails from "../../gql/query/useGetRecipeDetails";
import { setRecipeDetailsId } from "../../redux/RecipeDetailsSlice/recipeDetailsSlice";
import { IAppState } from "../../redux/store";

const RecipeDetailsPage: React.FC = () => {
  const { id } = useSelector(
    ({ recipeDetailsSlice }: IAppState) => recipeDetailsSlice
  );
  const { error, loading, recipe_by_pk } = useGetRecipeDetails(id);

  const dispatch = useDispatch();
  const handleDismiss = () => dispatch(setRecipeDetailsId(null));

  const [showDirections, setShowDirections] = useState(false);

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (!recipe_by_pk) return <p>404 recipe not found</p>;
  return (
    <StyledFullScreenModal isOpen onDidDismiss={handleDismiss}>
      <IonContent>
        <DetailsPageTitle
          id={recipe_by_pk.id}
          img={recipe_by_pk.img || null}
          title={recipe_by_pk.title}
        />

        <CookTime
          total_time={recipe_by_pk.total_time || null}
          servings={recipe_by_pk.yields || null}
        />

        <IonSegment
          // color="secondary"
          value={showDirections ? "directions" : "ingredients"}
          onIonChange={(e) =>
            setShowDirections(e.detail.value === "ingredients" ? false : true)
          }
        >
          <StyledSegmentButton value="ingredients">
            <IonLabel>Ingredients</IonLabel>
          </StyledSegmentButton>
          <StyledSegmentButton value="directions">
            <IonLabel>Directions</IonLabel>
          </StyledSegmentButton>
        </IonSegment>

        <StyledIngredientList lines="none">
          {showDirections
            ? recipe_by_pk.directions &&
              (recipe_by_pk.directions as [
                { value: string }
              ]).map(({ value }, i) => (
                <DirectionsListItem
                  key={i}
                  content={value}
                  showBackground={i % 2 === 0 ? true : false}
                  index={i + 1}
                />
              ))
            : recipe_by_pk.recipe_ingredients_list &&
              recipe_by_pk.recipe_ingredients_list.map(
                (
                  { name, quantity_denominator, quantity_numerator, unit },
                  i
                ) => (
                  <IngredientListItem
                    key={(name || "") + i}
                    materialText={name || ""}
                    quantityText={
                      quantity_denominator && quantity_numerator
                        ? String(quantity_numerator / quantity_denominator) +
                          " " +
                          (unit || "")
                        : ""
                    }
                    showBackground={i % 2 === 0 ? true : false}
                  />
                )
              )}
        </StyledIngredientList>
      </IonContent>
    </StyledFullScreenModal>
  );
};
export default RecipeDetailsPage;

const StyledIngredientList = styled(IonList)`
  padding: 8px;
`;

const StyledSegmentButton = styled(IonSegmentButton)`
  /* had to took off segment color to disable ripple */
  --color-checked: var(--ion-color-secondary);
`;
