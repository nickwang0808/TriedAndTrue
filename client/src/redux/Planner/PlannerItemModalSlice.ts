import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IRecipeToModify {
  id: string;
  date: string;
  index: number;
}

interface IState {
  showModifyModal: string | null;
  showRecreateModal: string | null;
  showSelectWeekModal: string | null;
  showSelectDayModal: string | null;
  recipeToModify: null | IRecipeToModify;
}

const initialState: IState = {
  showModifyModal: null,
  showRecreateModal: null,
  showSelectWeekModal: null,
  showSelectDayModal: null,
  recipeToModify: null,
};

const PlannerItemModalSlice = createSlice({
  name: "plannerItemModal",
  initialState,
  reducers: {
    setShowModifyModal: (
      { recipeToModify },
      { payload }: PayloadAction<IRecipeToModify>
    ) => {
      return {
        ...initialState,
        showModifyModal: payload.id,
        recipeToModify: payload,
      };
    },
    setShowRecreateModal: (
      { recipeToModify },
      { payload }: PayloadAction<string | null>
    ) => {
      return {
        ...initialState,
        showRecreateModal: payload,
        recipeToModify,
      };
    },
    setShowSelectWeekModal: (
      { recipeToModify },
      { payload }: PayloadAction<string | null>
    ) => {
      return { ...initialState, showSelectWeekModal: payload, recipeToModify };
    },
    setShowSelectDayModal: (
      { recipeToModify },
      { payload }: PayloadAction<string | null>
    ) => {
      return { ...initialState, showSelectDayModal: payload, recipeToModify };
    },

    closePlannerItemModal: (
      state,
      { payload }: PayloadAction<keyof IState>
    ) => {
      if (payload === "recipeToModify") {
        return state;
      }
      //@ts-ignore
      state[payload] = null;
    },
  },
});

export const {
  setShowModifyModal,
  setShowRecreateModal,
  setShowSelectDayModal,
  setShowSelectWeekModal,
  closePlannerItemModal,
} = PlannerItemModalSlice.actions;
export default PlannerItemModalSlice.reducer;
