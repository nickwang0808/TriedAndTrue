import { combineReducers, configureStore } from "@reduxjs/toolkit";
import addOrEditRecipeSlice from "./AddOrEditRecipe/AddOrEditRecipeSlice";
import plannerDateRangeSlice from "./PlannerDateRange/PlannerDateRangeSlice";

const rootReducer = combineReducers({
  addOrEditRecipeSlice,
  plannerDateRangeSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type IAppState = ReturnType<typeof store.getState>;
