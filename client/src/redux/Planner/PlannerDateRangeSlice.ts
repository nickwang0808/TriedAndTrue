import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { startOfWeek } from "date-fns";

interface IState {
  dateRange: null | string[][];
  selectedWeek: string;
}

const initialState: IState = {
  dateRange: null,
  selectedWeek: String(startOfWeek(new Date(), { weekStartsOn: 1 })),
};

const plannerDateRangeSlice = createSlice({
  name: "plannerDateRange",
  initialState,
  reducers: {
    setDateRange: (state, action: PayloadAction<IState["dateRange"]>) => {
      state.dateRange = action.payload;
    },

    setSelectedWeek: (state, action: PayloadAction<IState["selectedWeek"]>) => {
      state.selectedWeek = String(action.payload);
    },
  },
});

export const { setDateRange, setSelectedWeek } = plannerDateRangeSlice.actions;
export default plannerDateRangeSlice.reducer;
