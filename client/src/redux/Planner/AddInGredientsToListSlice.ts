import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  showAddIngredientToListModal: boolean;
  selectedIngredients: string[];
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

    setSelectedIngredient: (state, { payload }: PayloadAction<IState["selectedIngredients"]> ) => {
      state.selectedIngredients = [...payload];
    },
  },
});

export const {
  setShowIngredientToListModal,
  setSelectedIngredient,
} = addIngredientsToListSlice.actions;
export default addIngredientsToListSlice.reducer;
