import { array, mixed, number, object, string } from "yup";

const mealTypeArray = [
  "breakfast",
  "lunch",
  "dinner",
  "snack",
  "desert",
  "uncategorized",
  null,
];

type mealType =
  | "breakfast"
  | "lunch"
  | "dinner"
  | "snack"
  | "desert"
  | "uncategorized";

export interface IRecipeForm {
  title: string | null;
  mealType: mealType | null;
  totalTime: number | null;
  servings: string | null;
  cuisine: string | null;

  ingredients: Array<{ value: string }> | null;
  directions: Array<{ value: string }> | null;
}

export const recipeFormSchema = object().shape({
  title: string().required(),
  mealType: mixed().oneOf(mealTypeArray).nullable(),
  totalTime: number().nullable(),
  servings: string().nullable(),
  cuisine: string().nullable(),

  ingredients: array(object().shape({ value: string() })).nullable(),
  directions: array(object().shape({ value: string() })).nullable(),
});
