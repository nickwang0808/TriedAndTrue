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
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import xclose from "../../assets/svg/close-x.svg";
import CookTime from "../../components/detailsPageComp/CookTime";
import DetailsPageTitle from "../../components/detailsPageComp/DetailsPageTitle";
import DirectionsListItem from "../../components/listItem/DirectionsListItem";
import IngredientListItem from "../../components/listItem/IngredientListItem";
import DetailsSkeleton from "../../components/loading/DetailsSkeleton";
import { FancyModalWithRoundTop } from "../../components/modals/FancyModalWithRoundTop";
import useGetRecipeDetails from "../../gql/query/useGetRecipeDetails";
import { setRecipeDetailsId } from "../../redux/RecipeDetailsSlice/recipeDetailsSlice";
import { IAppState } from "../../redux/store";

const RecipeDetailsPage: React.FC = () => {
  const { id } = useSelector(
    ({ recipeDetailsSlice }: IAppState) => recipeDetailsSlice
  );
  const { error, loading, data, getRecipeDetails } = useGetRecipeDetails();

  const dispatch = useDispatch();
  const handleDismiss = () => dispatch(setRecipeDetailsId(null));
  const runQuery = () => getRecipeDetails({ variables: { id: id! } });

  const [showDirections, setShowDirections] = useState(false);

  let content;
  if (loading) {
    content = <DetailsSkeleton />;
  } else if (error) {
    content = <p>{error.message}</p>;
  } else if (!data || !data.recipe_by_pk) {
    content = <p>404 recipe not found</p>;
  } else {
    //prettier-ignore
    const { id, img, title, total_time, yields, directions, recipe_ingredients_list } = data.recipe_by_pk;
    content = (
      <>
        <IonFab vertical="top" horizontal="start" slot="fixed">
          <IonFabButton size="small" color="light" onClick={handleDismiss}>
            <IonIcon src={xclose} />
          </IonFabButton>
        </IonFab>
        <DetailsPageTitle id={id} img={img || null} title={title} />
        <CookTime total_time={total_time || null} servings={yields || null} />
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
            ? (directions as [{ value: string }])?.map(({ value }, i) => (
                <DirectionsListItem
                  key={i}
                  content={value}
                  showBackground={i % 2 === 0 ? true : false}
                  index={i + 1}
                />
              ))
            : recipe_ingredients_list?.map(
                ({ name, quantity, unit, comment }, i) => (
                  <IngredientListItem
                    key={(name || "") + i}
                    materialText={`${name || ""}${
                      comment ? ", " + comment : ""
                    }`}
                    quantityText={`${quantity || ""} ${unit || ""}`}
                    showBackground={i % 2 === 0 ? true : false}
                  />
                )
              )}
        </StyledIngredientList>
      </>
    );
  }
  return (
    <FancyModalWithRoundTop
      isOpen={!!id}
      onDidDismiss={handleDismiss}
      onWillPresent={runQuery}
    >
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
