import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  showAddIngredientToListModal: boolean;
  selectedIngredients: IRecipeIngredients[];
}

export interface IRecipeIngredients {
  date: string;
  recipe_id: string;
  recipe_index: number;
  ingredients: string[];
}

export interface setCheckedIngType
  extends Omit<IRecipeIngredients, "ingredients"> {
  id: string;
}

const initialState: IState = {
  selectedIngredients: [],
  showAddIngredientToListModal: false,
};

const addIngredientsToListSlice = createSlice({
  name: "addIngredientsToList",
  initialState,
  reducers: {
    setShowIngredientToListModal: (
      state,
      { payload }: PayloadAction<IState["showAddIngredientToListModal"]>
    ) => {
      state.showAddIngredientToListModal = payload;
    },

    setSelectedIngredient: (
      state,
      { payload }: PayloadAction<IState["selectedIngredients"]>
    ) => {
      state.selectedIngredients = payload;
    },

    unCheckIngredients: (
      state,
      { payload }: PayloadAction<setCheckedIngType>
    ) => {
      const foundIndex = state.selectedIngredients.findIndex(
        ({ date, ingredients, recipe_id, recipe_index }) =>
          date === payload.date &&
          recipe_index === payload.recipe_index &&
          recipe_id === payload.recipe_id
      );

      if (foundIndex !== -1) {
        state.selectedIngredients[
          foundIndex
        ].ingredients = state.selectedIngredients[
          foundIndex
        ]!.ingredients.filter((elem) => elem !== payload.id);
      }
    },
    checkIngredients: (
      state,
      { payload }: PayloadAction<setCheckedIngType>
    ) => {
      const found = state.selectedIngredients.find(
        ({ date, ingredients, recipe_id, recipe_index }) =>
          date === payload.date &&
          recipe_index === payload.recipe_index &&
          recipe_id === payload.recipe_id
      )!.ingredients;
      if (found.find((e) => e === payload.id)) {
        return state;
      } else {
        state.selectedIngredients
          .find(
            ({ date, ingredients, recipe_id, recipe_index }) =>
              date === payload.date &&
              recipe_index === payload.recipe_index &&
              recipe_id === payload.recipe_id
          )!
          .ingredients.push(payload.id);
      }
    },
  },
});

export const {
  setShowIngredientToListModal,
  checkIngredients,
  unCheckIngredients,
  setSelectedIngredient,
} = addIngredientsToListSlice.actions;
export default addIngredientsToListSlice.reducer;
