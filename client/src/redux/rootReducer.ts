import { combineReducers } from "@reduxjs/toolkit";
import addOrEditRecipeSlice from "./AddOrEditRecipe/AddOrEditRecipeSlice";
import AddRecipeControlSlice from "./AddOrEditRecipe/AddRecipeControlSlice";
import addIngredientsToListSlice from "./Planner/AddIngredientsToListSlice";
import plannerDateRangeSlice from "./Planner/PlannerDateRangeSlice";
import PlannerItemModalSlice from "./Planner/PlannerItemModalSlice";
import plannerModalSlice from "./Planner/PlannerModalSlice";
import profileSlice from "./profileSlice/profileSlice";
import recipeDetailsSlice from "./RecipeDetailsSlice/recipeDetailsSlice";
import shoppingListDetailSlice from "./ShoppingList/ShoppingListDetailsSlice";
import shoppingListHomeSlice from "./ShoppingList/ShoppingListHomeSlice";
import toastSlice from "./toastSlice/toastSlice";

const rootReducer = combineReducers({
  addOrEditRecipeSlice,
  plannerDateRangeSlice,
  plannerModalSlice,
  PlannerItemModalSlice,
  recipeDetailsSlice,
  AddRecipeControlSlice,
  toastSlice,
  shoppingListDetailSlice,
  addIngredientsToListSlice,
  shoppingListHomeSlice,
  profileSlice,
});

export default rootReducer;
