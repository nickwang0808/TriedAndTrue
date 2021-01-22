import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  id: string | null;
  showDetailsOptionModal: boolean;
  showDeleteRecipeConfirmationModal: boolean;
}

const initialState: IState = {
  id: null,
  showDetailsOptionModal: false,
  showDeleteRecipeConfirmationModal: false,
};

const recipeDetailsSlice = createSlice({
  name: "recipeDetails",
  initialState,
  reducers: {
    setRecipeDetailsId: (state, { payload }: PayloadAction<IState["id"]>) => {
      state.id = payload;
    },
    setShowDetailsOptionModal: (
      state,
      { payload }: PayloadAction<IState["showDetailsOptionModal"]>
    ) => {
      state.showDetailsOptionModal = payload;
    },
    setShowDeleteRecipeConfirmationModal: (
      state,
      { payload }: PayloadAction<IState["showDeleteRecipeConfirmationModal"]>
    ) => {
      state.showDeleteRecipeConfirmationModal = payload;
    },
  },
});

export const {
  setRecipeDetailsId,
  setShowDetailsOptionModal,
  setShowDeleteRecipeConfirmationModal,
} = recipeDetailsSlice.actions;
export default recipeDetailsSlice.reducer;
