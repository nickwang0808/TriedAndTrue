import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  showModal: boolean;
  selectedRecipes: string[];
  dateToModify: string;
}

const initialState: IState = {
  selectedRecipes: [],
  showModal: false,
  dateToModify: String(new Date()),
};

const plannerModalSlice = createSlice({
  name: "planner-modal",
  initialState,
  reducers: {
    openPlannerModal: (state, action: PayloadAction<string>) => {
      state.showModal = true;
      if (action.payload) {
        state.dateToModify = action.payload;
      }
    },
    closePlannerModal: (state) => {
      state.showModal = false;
      state.dateToModify = String(new Date());
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
