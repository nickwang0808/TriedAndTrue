import styled from "@emotion/styled";
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonLabel,
  IonList,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import xclose from "../../assets/svg/close-x.svg";
import CookTime from "../../components/detailsPageComp/CookTime";
import DetailsPageTitle from "../../components/detailsPageComp/DetailsPageTitle";
import DirectionsListItem from "../../components/listItem/DirectionsListItem";
import IngredientListItem from "../../components/listItem/IngredientListItem";
import { FancyModalWithRoundTop } from "../../components/modals/FancyModalWithRoundTop";
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

  useEffect(() => {
    if (error) {
      console.log("error");
    }
    if (loading) {
      console.log("loading");
    }
    if (recipe_by_pk) {
      console.log(recipe_by_pk);
    }
  }, [error, loading, recipe_by_pk]);

  let content;
  if (loading) {
    content = <p>loading...</p>;
  } else if (error) {
    content = <p>{error.message}</p>;
  } else if (!recipe_by_pk) {
    content = <p>404 recipe not found</p>;
  } else {
    content = (
      <>
        <IonFab vertical="top" horizontal="start" slot="fixed">
          <IonFabButton size="small" color="light" onClick={handleDismiss}>
            <IonIcon src={xclose} />
          </IonFabButton>
        </IonFab>
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
      </>
    );
  }
  return (
    <FancyModalWithRoundTop isOpen={!!id} onDidDismiss={handleDismiss}>
      <IonContent>{content}</IonContent>
    </FancyModalWithRoundTop>
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
