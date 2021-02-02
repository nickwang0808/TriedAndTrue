import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  showAddOrEditRecipe: boolean;
  id: null | string;
  showConfirmCancelModal: boolean;
  formIsDirty: boolean;
}

const initialState: IState = {
  showAddOrEditRecipe: false,
  id: null,
  showConfirmCancelModal: false,
  formIsDirty: false,
};

const addOrEditRecipeSlice = createSlice({
  name: "addRecipe",
  initialState,
  reducers: {
    setRecipeId: (state, actions: PayloadAction<IState["id"]>) => {
      state.id = actions.payload;
      state.showAddOrEditRecipe = true;
    },
    setShowAddOrEditRecipe: (state, action: PayloadAction<boolean>) => {
      state.showAddOrEditRecipe = action.payload;
    },
    setShowConfirmCancelModal: (
      state,
      { payload }: PayloadAction<IState["showConfirmCancelModal"]>
    ) => {
      state.showConfirmCancelModal = payload;
    },

    resetAddOrEditRecipe: (state) => initialState,
    setFormIsDirty: (
      state,
      { payload }: PayloadAction<IState["formIsDirty"]>
    ) => {
      state.formIsDirty = payload;
    },
  },
});

export const {
  setRecipeId,
  setShowAddOrEditRecipe,
  resetAddOrEditRecipe,
  setShowConfirmCancelModal,
  setFormIsDirty,
} = addOrEditRecipeSlice.actions;
export default addOrEditRecipeSlice.reducer;
