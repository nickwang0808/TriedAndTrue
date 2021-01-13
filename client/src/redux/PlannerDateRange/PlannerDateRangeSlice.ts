import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { startOfWeek } from "date-fns";

interface IPlannerDateRange {
  dateRange: null | string[][];
  selectedWeek: string;
}

const initialState: IPlannerDateRange = {
  dateRange: null,
  selectedWeek: String(startOfWeek(new Date(), { weekStartsOn: 1 })),
};

const plannerDateRangeSlice = createSlice({
  name: "plannerDateRange",
  initialState,
  reducers: {
    setDateRange: (
      state,
      action: PayloadAction<IPlannerDateRange["dateRange"]>
    ) => {
      state.dateRange = action.payload;
    },

    setSelectedWeek: (
      state,
      action: PayloadAction<IPlannerDateRange["selectedWeek"]>
    ) => {
      state.selectedWeek = String(action.payload);
    },
  },
});

export const { setDateRange, setSelectedWeek } = plannerDateRangeSlice.actions;
export default plannerDateRangeSlice.reducer;
