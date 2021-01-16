import { combineReducers } from "@reduxjs/toolkit";
import addOrEditRecipeSlice from "./AddOrEditRecipe/AddOrEditRecipeSlice";
import plannerDateRangeSlice from "./Planner/PlannerDateRangeSlice";
import PlannerItemModalSlice from "./Planner/PlannerItemModalSlice";
import plannerModalSlice from "./Planner/PlannerModalSlice";
import recipeDetailsSlice from "./RecipeDetailsSlice/recipeDetailsSlice";

const rootReducer = combineReducers({
  addOrEditRecipeSlice,
  plannerDateRangeSlice,
  plannerModalSlice,
  PlannerItemModalSlice,
  recipeDetailsSlice,
});

export default rootReducer;
