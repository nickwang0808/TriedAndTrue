import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  id: string | null;
  showDetailsOptionModal: boolean;
}

const initialState: IState = {
  id: null,
  showDetailsOptionModal: false,
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
  },
});

export const {
  setRecipeDetailsId,
  setShowDetailsOptionModal,
} = recipeDetailsSlice.actions;
export default recipeDetailsSlice.reducer;
