import { useLazyQuery } from "@apollo/client";
import styled from "@emotion/styled";
import {
  IonContent,
  IonLabel,
  IonList,
  IonPage,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import React, { useLayoutEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import CookTime from "../../components/detailsPageComp/CookTime";
import DetailsPageTitle from "../../components/detailsPageComp/DetailsPageTitle";
import DirectionsListItem from "../../components/listItem/DirectionsListItem";
import IngredientListItem from "../../components/listItem/IngredientListItem";
import {
  GetRecipeDetailsQuery,
  GetRecipeDetailsQueryVariables,
} from "../../generated/graphql";
import { GET_RECIPE_DETAILS } from "../../gql/query/getRecipeDetails";

interface IProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const RecipeDetailsPage: React.FC<IProps> = ({ match }) => {
  const [getRecipeDetails, { error, loading, data }] = useLazyQuery<
    GetRecipeDetailsQuery,
    GetRecipeDetailsQueryVariables
  >(GET_RECIPE_DETAILS);

  const [showDirections, setShowDirections] = useState(false);

  useLayoutEffect(() => {
    console.log(match.params.id);
    const { id } = match.params;
    getRecipeDetails({
      variables: { id },
    });
  }, [match.params.id]);

  if (loading || !data) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (!data.recipe_by_pk) return <p>404 recipe not found</p>;
  return (
    <IonPage>
      <IonContent>
        <DetailsPageTitle
          img={data.recipe_by_pk.img || null}
          title={data.recipe_by_pk.title}
        />

        <CookTime
          total_time={data.recipe_by_pk.total_time || null}
          servings={data.recipe_by_pk.yields || null}
        />

        <IonSegment
          mode="md"
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
            ? (data.recipe_by_pk.directions as [
                { value: string }
              ]).map(({ value }, i) => (
                <DirectionsListItem
                  key={i}
                  content={value}
                  showBackground={i % 2 === 0 ? true : false}
                  index={i + 1}
                />
              ))
            : data.recipe_by_pk.recipe_ingredients_list.map(
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
