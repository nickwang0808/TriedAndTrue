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

export type mealType =
  | "breakfast"
  | "lunch"
  | "dinner"
  | "snack"
  | "desert"
  | "uncategorized";

export interface IRecipeForm {
  title: string | null;
  meal_type: mealType | null;
  total_time: number | null;
  yields: string | null;
  cuisine: string | null;
  img: string | null;

  ingredients: Array<{ value: string }> | null;
  directions: Array<{ value: string }> | null;
}

export const recipeFormSchema = object().shape({
  title: string().required(),
  meal_type: mixed().oneOf(mealTypeArray).nullable(),
  total_time: number().nullable(),
  yields: string().nullable(),
  cuisine: string().nullable(),
  img: string().nullable(),
  ingredients: array(object().shape({ value: string() })).nullable(),
  directions: array(object().shape({ value: string() })).nullable(),
});

export const emptyDefaultValue: IRecipeForm = {
  cuisine: null,
  total_time: null,
  img: null,
  meal_type: null,
  yields: null,
  title: null,
  directions: [],
  ingredients: [],
};
