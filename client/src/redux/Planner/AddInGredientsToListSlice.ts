import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  showAddIngredientToListModal: boolean;
  selectedIngredients: IRecipeIngredients[];
  showSelectListModal: boolean;
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
    /* pull initial list of data in the component nad by checking one ingredient,
    we push the id into the ingredients array */
    checkIngredients: (
      state,
      { payload }: PayloadAction<setCheckedIngType>
    ) => {
      const findCriteria = (arg: IRecipeIngredients) => {
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

      const found = state.selectedIngredients.find((arg) => findCriteria(arg))
        ?.ingredients;
      if (found?.find((e) => e === payload.id)) {
        return state;
      } else {
        state.selectedIngredients
          .find((arg) => findCriteria(arg))!
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
  setShowSelectListModal,
} = addIngredientsToListSlice.actions;
export default addIngredientsToListSlice.reducer;
