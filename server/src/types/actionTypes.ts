export type Maybe<T> = T | null;

export type json = string;

export type ParsedIngredients = {
  name: string;
};

export type UpdatedRecipeIngredients = {
  id: string;
};

export type ImportedRecipe = {
  id: string;
};

export type InsertRecipeOneOutput = {
  id: string;
};

export type shoppingListItems = {
  id: string;
};

export type insertRecipeOneDerivedInput = {
  title: string;
  img?: Maybe<string>;
  total_time?: Maybe<number>;
  yields?: Maybe<string>;
  cuisine?: Maybe<string>;
  meal_type?: Maybe<string>;
  ingredients: Array<string>;
  directions?: Maybe<json>;
};

export type Query = {
  parseIngredients: Array<ParsedIngredients>;
};

export type Mutation = {
  importRecipe: ImportedRecipe;
  insertIngredientToList: Array<shoppingListItems>;
  insertRecipeOneDerived: InsertRecipeOneOutput;
  overRideIngredients: Array<UpdatedRecipeIngredients>;
};

export type parseIngredientsArgs = {
  ingredientsToParse?: Maybe<Array<Maybe<string>>>;
};

export type importRecipeArgs = {
  url: string;
  wildMode?: Maybe<boolean>;
};

export type insertIngredientToListArgs = {
  ingredientsIds: Array<string>;
};

export type insertRecipeOneDerivedArgs = {
  object: insertRecipeOneDerivedInput;
};

export type overRideIngredientsArgs = {
  ingredientsStrings: Array<string>;
  recipe_id: string;
};
