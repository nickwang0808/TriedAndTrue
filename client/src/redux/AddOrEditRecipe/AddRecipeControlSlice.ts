import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  showAddRecipeControlModal: boolean;
}

export const initialState: IState = {
  showAddRecipeControlModal: false,
};

const AddRecipeControlSlice = createSlice({
  name: "importRecipe",
  initialState,
  reducers: {
    setShowAddRecipeControlModal: (
      state,
      { payload }: PayloadAction<IState["showAddRecipeControlModal"]>
    ) => {
      state.showAddRecipeControlModal = payload;
    },
  },
});

export const { setShowAddRecipeControlModal } = AddRecipeControlSlice.actions;
export default AddRecipeControlSlice.reducer;
