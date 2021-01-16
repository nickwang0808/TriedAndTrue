import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  showModifyModal: string | null;
  showRecreateModal: string | null;
  showSelectWeekModal: string | null;
  showSelectDayModal: string | null;
}

const initialState: IState = {
  showModifyModal: null,
  showRecreateModal: null,
  showSelectWeekModal: null,
  showSelectDayModal: null,
};

const PlannerItemModalSlice = createSlice({
  name: "plannerItemModal",
  initialState,
  reducers: {
    setShowModifyModal: (state, { payload }: PayloadAction<string | null>) => {
      state = { ...initialState, showModifyModal: payload };
    },
    setShowRecreateModal: (
      state,
      { payload }: PayloadAction<string | null>
    ) => {
      state = { ...initialState, showRecreateModal: payload };
    },
    setShowSelectWeekModal: (
      state,
      { payload }: PayloadAction<string | null>
    ) => {
      state = { ...initialState, showSelectWeekModal: payload };
    },
    setShowSelectDayModal: (
      state,
      { payload }: PayloadAction<string | null>
    ) => {
      state = { ...initialState, showSelectDayModal: payload };
    },
  },
});

export const {
  setShowModifyModal,
  setShowRecreateModal,
  setShowSelectDayModal,
  setShowSelectWeekModal,
} = PlannerItemModalSlice.actions;
export default PlannerItemModalSlice.reducer;
