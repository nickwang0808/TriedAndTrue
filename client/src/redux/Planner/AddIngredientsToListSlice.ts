import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  showAddIngredientToListModal: boolean;
  selectedIngredients: IRecipeIngredients[];
  showSelectListModal: boolean;
  /*this field control whether or not to only add one recipes ingredient in or
  all ingredient in*/
  singleRecipeId: string | null;
}

export interface IRecipeIngredients {
  date: string;
  recipe_id: string;
  recipe_index: number;
  ingredients: string[]; // ids
}

export interface setCheckedIngType
  extends Omit<IRecipeIngredients, "ingredients"> {
  id: string;
}

export const initialState: IState = {
  selectedIngredients: [],
  showAddIngredientToListModal: false,
  showSelectListModal: false,
  singleRecipeId: null,
};

const checkMatch = (arg: IRecipeIngredients, payload: setCheckedIngType) => {
  if (
    arg.date === payload.date &&
    arg.recipe_index === payload.recipe_index &&
    arg.recipe_id === payload.recipe_id
  ) {
    return true;
  } else {
    return false;
  }
};

const addIngredientsToListSlice = createSlice({
  name: "addIngredientsToList",
  initialState,
  reducers: {
    setSingleRecipeId: (
      state,
      { payload }: PayloadAction<IState["singleRecipeId"]>
    ) => {
      state.singleRecipeId = payload;
    },

    setShowIngredientToListModal: (
      state,
      { payload }: PayloadAction<IState["showAddIngredientToListModal"]>
    ) => {
      state.showAddIngredientToListModal = payload;
      if (!payload) {
        state.singleRecipeId = null;
      }
    },

    setShowSelectListModal: (
      state,
      { payload }: PayloadAction<IState["showSelectListModal"]>
    ) => {
      state.showSelectListModal = payload;
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
      const foundIndex = state.selectedIngredients.findIndex((elem) =>
        checkMatch(elem, payload)
      );

      if (foundIndex !== -1) {
        state.selectedIngredients[
          foundIndex
        ].ingredients = state.selectedIngredients[
          foundIndex
        ]!.ingredients.filter((elem) => elem !== payload.id);
      }
    },
    /* pull initial list of data in the component nad by checking one ingredient,
    we push the id into the ingredients array */
    checkIngredients: (
      state,
      { payload }: PayloadAction<setCheckedIngType>
    ) => {
      const found = state.selectedIngredients.find((elem) =>
        checkMatch(elem, payload)
      )?.ingredients;
      if (!found) {
        return state;
      } else if (found?.find((e) => e === payload.id)) {
        return state;
      } else {
        found.push(payload.id);
      }
    },
  },
});

export const {
  setSingleRecipeId,
  setShowIngredientToListModal,
  checkIngredients,
  unCheckIngredients,
  setSelectedIngredient,
  setShowSelectListModal,
} = addIngredientsToListSlice.actions;
export default addIngredientsToListSlice.reducer;
