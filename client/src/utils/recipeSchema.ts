import { array, mixed, number, object, string } from "yup";

const mealTypeArray = [
  "breakfast",
  "lunch",
  "dinner",
  "snack",
  "desert",
  "uncategorized",
];

type mealType =
  | "breakfast"
  | "lunch"
  | "dinner"
  | "snack"
  | "desert"
  | "uncategorized";

export interface IRecipeForm {
  title: string;
  mealType: mealType;
  totalTime: number;
  servings: number;
  cuisine: string;

  ingredients: string[];
  directions: string[];
}

export const recipeFormSchema = object().shape({
  title: string().required(),
  mealType: mixed().oneOf(mealTypeArray as string[]),
  totalTime: number(),
  servings: number(),
  cuisine: string(),

  ingredients: array(string()),
  directions: array(string()),
});
