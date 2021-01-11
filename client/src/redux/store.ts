import { combineReducers, configureStore } from "@reduxjs/toolkit";
import addOrEditRecipeSlice from "./AddOrEditRecipe/AddOrEditRecipeSlice";

const rootReducer = combineReducers({
  addOrEditRecipeSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type IAppState = ReturnType<typeof store.getState>;
