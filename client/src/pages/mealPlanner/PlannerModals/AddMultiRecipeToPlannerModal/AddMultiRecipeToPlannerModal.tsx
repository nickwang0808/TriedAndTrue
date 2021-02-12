import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from "@ionic/react";
import { format } from "date-fns";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RecipeCard from "../../../../components/card/RecipeCard";
import SaveFooterButton from "../../../../components/layout/SaveFooterButton";
import StyledRecipeGrid from "../../../../components/layout/StyledRecipeGrid";
import StyledSearchBar from "../../../../components/misc/SearchBar";
import { FancyModalWithRoundTop } from "../../../../components/modals/FancyModalWithRoundTop";
import useAddRecipesToPlanner from "../../../../gql/mutations/useInsertRecipeToPlanner";
import useGetAllRecipes from "../../../../gql/query/useGetAllRecipes";
import {
  appendSelectedRecipe,
  clearSelectedRecipe,
  closePlannerModal,
  deSelectRecipe,
} from "../../../../redux/Planner/PlannerModalSlice";
import { IAppState } from "../../../../redux/store";
import { setShowToast } from "../../../../redux/toastSlice/toastSlice";
import getPlannerRecipeCount from "../../../../utils/getPlannerRecipeCount";
import Header from "./Header";

export default function AddMultiRecipeToPlannerModal() {
  const { addRecipesToPlanner, error_m } = useAddRecipesToPlanner();
  const [keyword, setKeyword] = useState<string>();
  const { data, loading, error, fetchMore } = useGetAllRecipes(keyword);

  const { selectedRecipes, showModal, dateToModify } = useSelector(
    (state: IAppState) => state.plannerModalSlice
  );

  const dispatch = useDispatch();

  const handleFetchMore = async ($event: CustomEvent<void>) => {
    await fetchMore({
      variables: {
        offset: data?.recipe.length,
      },
    });
    ($event.target as HTMLIonInfiniteScrollElement).complete();
  };

  const handleSelect = (recipe_id: string) =>
    selectedRecipes.find((e) => e === recipe_id)
      ? dispatch(deSelectRecipe(recipe_id))
      : dispatch(appendSelectedRecipe(recipe_id));

  const handleSubmit = async () => {
    const date = format(new Date(dateToModify as string), "yyyy-MM-dd");
    const indexOffset = getPlannerRecipeCount(date);
    const objects = selectedRecipes.map((id, index) => {
      return { date, index: index + indexOffset, recipe_id: id };
    });

    dispatch(closePlannerModal());
    try {
      await addRecipesToPlanner({ variables: { objects } });
      dispatch(setShowToast({ text: "Recipe added to meal plan!" }));
    } catch (err) {
      console.log(err);
      dispatch(setShowToast({ text: "Something went wrong", color: "red" }));
    }
    dispatch(clearSelectedRecipe());
    return;
  };

  // if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (error_m) return <p>{error_m.message}</p>;
  return (
    <FancyModalWithRoundTop
      onDidDismiss={() => dispatch(closePlannerModal())}
      isOpen={showModal}
    >
      <Header />
      <IonContent>
        <StyledSearchBar
          animated
          debounce={500}
          value={keyword?.slice(1, -1)}
          onIonChange={(e) => {
            const { value } = e.detail;
            console.log(value);
            if (value === keyword) return;
            setKeyword(`%${value}%`);
          }}
        />

        {/* {loading && <p>loading...</p>} */}

        <StyledRecipeGrid>
          {data?.recipe.map((recipe) => {
            return (
              <RecipeCard
                key={recipe.id}
                {...recipe}
                onClick={() => handleSelect(recipe.id)}
                showOverlay={!!selectedRecipes.find((e) => e === recipe.id)}
              />
            );
          })}
        </StyledRecipeGrid>

        <IonInfiniteScroll
          threshold="100px"
          // disabled={disableInfiniteScroll}
          onIonInfinite={(e: CustomEvent<void>) => handleFetchMore(e)}
        >
          <IonInfiniteScrollContent loadingText="Loading more recipes ..."></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
      <SaveFooterButton
        text={`Add ${selectedRecipes.length} Recipe to List`}
        action={handleSubmit}
        disabled={selectedRecipes.length === 0}
      />
    </FancyModalWithRoundTop>
  );
}
