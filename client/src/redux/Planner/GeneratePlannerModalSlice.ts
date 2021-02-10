import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mealTypeArray } from "../../utils/recipeSchema";

interface IState {
  showGeneratePlannerModal: boolean;
  mealTypes: string[];
}

const initialState: IState = {
  showGeneratePlannerModal: false,
  mealTypes: mealTypeArray.filter((e) => !!e) as string[],
};

const generatePlannerModalSlice = createSlice({
  name: "generatePlanner",
  initialState,
  reducers: {
    setShowGeneratePlannerModal: (
      state,
      { payload }: PayloadAction<IState["showGeneratePlannerModal"]>
    ) => {
      state.showGeneratePlannerModal = payload;
    },

    checkMealType: (
      state,
      {
        payload: { checked, value },
      }: PayloadAction<{ checked: boolean; value: string }>
    ) => {
      const tempSet = new Set(state.mealTypes);
      if (checked) {
        tempSet.add(value);
      } else {
        tempSet.delete(value);
      }
      state.mealTypes = Array.from(tempSet);
    },
  },
});

export const {
  setShowGeneratePlannerModal,
  checkMealType,
} = generatePlannerModalSlice.actions;
export default generatePlannerModalSlice.reducer;
