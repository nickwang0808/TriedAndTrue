import { combineReducers, configureStore } from "@reduxjs/toolkit";
import addOrEditRecipeSlice from "./AddOrEditRecipe/AddOrEditRecipeSlice";
import plannerDateRangeSlice from "./Planner/PlannerDateRangeSlice";
import plannerModalSlice from "./Planner/PlannerModalSlice";

const rootReducer = combineReducers({
  addOrEditRecipeSlice,
  plannerDateRangeSlice,
  plannerModalSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type IAppState = ReturnType<typeof store.getState>;
