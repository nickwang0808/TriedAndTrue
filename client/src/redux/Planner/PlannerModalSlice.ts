import { createSlice } from "@reduxjs/toolkit";

interface IState {
  showModal: boolean;
  selectedRecipes: string[] | null;
}

const initialState: IState = {
  selectedRecipes: null,
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
  },
});

export const {
  closePlannerModal,
  openPlannerModal,
} = plannerModalSlice.actions;
export default plannerModalSlice.reducer;
