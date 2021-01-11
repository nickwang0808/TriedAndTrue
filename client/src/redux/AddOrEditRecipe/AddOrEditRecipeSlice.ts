import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAddOrEditRecipe {
  showAddOrEditRecipe: boolean;
  id: null | string;
}

const initialState: IAddOrEditRecipe = {
  showAddOrEditRecipe: false,
  id: null,
};

const addOrEditRecipeSlice = createSlice({
  name: "addRecipe",
  initialState,
  reducers: {
    setRecipeId: (state, actions: PayloadAction<IAddOrEditRecipe["id"]>) => {
      state.id = actions.payload;
      state.showAddOrEditRecipe = true;
    },
    setShowAddOrEditRecipe: (state, action: PayloadAction<boolean>) => {
      state.showAddOrEditRecipe = action.payload;
    },
    resetAddOrEditRecipe: (state) => {
      state.showAddOrEditRecipe = false;
      state.id = null;
    },
  },
});

export const {
  setRecipeId,
  setShowAddOrEditRecipe,
  resetAddOrEditRecipe,
} = addOrEditRecipeSlice.actions;
export default addOrEditRecipeSlice.reducer;
