import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  showModal: boolean;
  selectedRecipes: string[];
}

const initialState: IState = {
  selectedRecipes: [],
  showModal: true,
};

const plannerModalSlice = createSlice({
  name: "planner-modal",
  initialState,
  reducers: {
    openPlannerModal: (state) => {
      state.showModal = true;
    },
    closePlannerModal: (state) => {
      state.showModal = false;
    },
    appendSelectedRecipe: (state, action: PayloadAction<string>) => {
      state.selectedRecipes = [...state.selectedRecipes, action.payload];
    },
    deSelectRecipe: (state, action: PayloadAction<string>) => {
      state.selectedRecipes = [
        ...state.selectedRecipes.filter((elem) => elem !== action.payload),
      ];
    },
    clearSelectedRecipe: (state) => {
      state.selectedRecipes = [];
    },
  },
});

export const {
  closePlannerModal,
  openPlannerModal,
  appendSelectedRecipe,
  deSelectRecipe,
  clearSelectedRecipe,
} = plannerModalSlice.actions;
export default plannerModalSlice.reducer;
