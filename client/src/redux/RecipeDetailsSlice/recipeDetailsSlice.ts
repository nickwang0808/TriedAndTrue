import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  id: string | null;
}

const initialState: IState = {
  id: null,
};

const recipeDetailsSlice = createSlice({
  name: "recipeDetails",
  initialState,
  reducers: {
    setRecipeDetailsId: (state, { payload }: PayloadAction<IState["id"]>) => {
      state.id = payload;
    },
  },
});

export const { setRecipeDetailsId } = recipeDetailsSlice.actions;
export default recipeDetailsSlice.reducer;
