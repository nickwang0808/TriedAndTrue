import styled from "@emotion/styled";
import {
  IonContent,
  IonLabel,
  IonList,
  IonPage,
  IonSegment,
  IonSegmentButton,
  useIonViewWillEnter,
} from "@ionic/react";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import CookTime from "../../components/detailsPageComp/CookTime";
import DetailsPageTitle from "../../components/detailsPageComp/DetailsPageTitle";
import DirectionsListItem from "../../components/listItem/DirectionsListItem";
import IngredientListItem from "../../components/listItem/IngredientListItem";
import useGetRecipeDetails from "../../gql/query/useGetRecipeDetails";

interface IProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const RecipeDetailsPage: React.FC<IProps> = ({
  match: {
    params: { id },
  },
}) => {
  const { error, loading, recipe_by_pk, refetch } = useGetRecipeDetails(id);

  const [showDirections, setShowDirections] = useState(false);

  useIonViewWillEnter(() => refetch());

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (!recipe_by_pk) return <p>404 recipe not found</p>;
  return (
    <IonPage>
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
          mode="md"
          color="secondary"
          value={showDirections ? "directions" : "ingredients"}
          onIonChange={(e) =>
            setShowDirections(e.detail.value === "ingredients" ? false : true)
          }
        >
          <IonSegmentButton value="ingredients">
            <IonLabel>Ingredients</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="directions">
            <IonLabel>Directions</IonLabel>
          </IonSegmentButton>
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
    </IonPage>
  );
};
export default RecipeDetailsPage;

const StyledIngredientList = styled(IonList)`
  padding: 8px;
`;
