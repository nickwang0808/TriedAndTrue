type Maybe<T> = T | null;

type json = string;

type uuid = string;

enum InsertRecipeOneDerivedRecipeConstraint {
  recipe_id_key = "recipe_id_key",
  recipe_pkey = "recipe_pkey",
}

enum InsertRecipeOneDerivedRecipeUpdateColumn {
  cuisine = "cuisine",
  directions = "directions",
  img = "img",
  meal_type = "meal_type",
  title = "title",
  total_time = "total_time",
  yields = "yields",
}

enum InsertRecipeOneDerivedRecipeIngredientsConstraint {
  recipe_ingredients_id_key = "recipe_ingredients_id_key",
  recipe_ingredients_pkey = "recipe_ingredients_pkey",
}

enum InsertRecipeOneDerivedRecipeIngredientsUpdateColumn {
  raw_text = "raw_text",
}

type ParsedIngredients = {
  name: string;
};

type Status = {
  status: string;
};

type InsertRecipeOneDerivedOutput = {
  cuisine?: Maybe<string>;
  directions?: Maybe<json>;
  id: string;
  img?: Maybe<string>;
  meal_type?: Maybe<string>;
  owner: string;
  title: string;
  total_time?: Maybe<number>;
  yields?: Maybe<string>;
};

type InsertRecipeOneDerivedRecipeInsertInput = {
  cuisine?: Maybe<string>;
  directions?: Maybe<json>;
  img?: Maybe<string>;
  meal_type?: Maybe<string>;
  recipe_ingredients_list?: Maybe<InsertRecipeOneDerivedRecipeIngredientsArrRelInsertInput>;
  title?: Maybe<string>;
  total_time?: Maybe<number>;
  yields?: Maybe<string>;
};

type InsertRecipeOneDerivedRecipeIngredientsArrRelInsertInput = {
  data: Array<InsertRecipeOneDerivedRecipeIngredientsInsertInput>;
  on_conflict?: Maybe<InsertRecipeOneDerivedRecipeIngredientsOnConflict>;
};

type InsertRecipeOneDerivedRecipeIngredientsInsertInput = {
  raw_text?: Maybe<string>;
  recipe?: Maybe<InsertRecipeOneDerivedRecipeObjRelInsertInput>;
  recipe_id?: Maybe<string>;
};

type InsertRecipeOneDerivedRecipeObjRelInsertInput = {
  data: InsertRecipeOneDerivedRecipeInsertInput;
  on_conflict?: Maybe<InsertRecipeOneDerivedRecipeOnConflict>;
};

type InsertRecipeOneDerivedRecipeOnConflict = {
  constraint: InsertRecipeOneDerivedRecipeConstraint;
  update_columns: Array<InsertRecipeOneDerivedRecipeUpdateColumn>;
  where?: Maybe<InsertRecipeOneDerivedRecipeBoolExp>;
};

type InsertRecipeOneDerivedRecipeBoolExp = {
  _and?: Maybe<Array<Maybe<InsertRecipeOneDerivedRecipeBoolExp>>>;
  _not?: Maybe<InsertRecipeOneDerivedRecipeBoolExp>;
  _or?: Maybe<Array<Maybe<InsertRecipeOneDerivedRecipeBoolExp>>>;
  cuisine?: Maybe<InsertRecipeOneDerivedStringComparisonExp>;
  directions?: Maybe<InsertRecipeOneDerivedJsonComparisonExp>;
  id?: Maybe<InsertRecipeOneDerivedStringComparisonExp>;
  img?: Maybe<InsertRecipeOneDerivedStringComparisonExp>;
  meal_type?: Maybe<InsertRecipeOneDerivedStringComparisonExp>;
  owner?: Maybe<InsertRecipeOneDerivedStringComparisonExp>;
  recipe_ingredients_list?: Maybe<InsertRecipeOneDerivedRecipeIngredientsBoolExp>;
  title?: Maybe<InsertRecipeOneDerivedStringComparisonExp>;
  total_time?: Maybe<InsertRecipeOneDerivedIntComparisonExp>;
  user?: Maybe<InsertRecipeOneDerivedUserBoolExp>;
  yields?: Maybe<InsertRecipeOneDerivedStringComparisonExp>;
};

type InsertRecipeOneDerivedStringComparisonExp = {
  _eq?: Maybe<string>;
  _gt?: Maybe<string>;
  _gte?: Maybe<string>;
  _ilike?: Maybe<string>;
  _in: Array<string>;
  _is_null?: Maybe<boolean>;
  _like?: Maybe<string>;
  _lt?: Maybe<string>;
  _lte?: Maybe<string>;
  _neq?: Maybe<string>;
  _nilike?: Maybe<string>;
  _nin: Array<string>;
  _nlike?: Maybe<string>;
  _nsimilar?: Maybe<string>;
  _similar?: Maybe<string>;
};

type InsertRecipeOneDerivedJsonComparisonExp = {
  _eq?: Maybe<json>;
  _gt?: Maybe<json>;
  _gte?: Maybe<json>;
  _in: Array<json>;
  _is_null?: Maybe<boolean>;
  _lt?: Maybe<json>;
  _lte?: Maybe<json>;
  _neq?: Maybe<json>;
  _nin: Array<json>;
};

type InsertRecipeOneDerivedRecipeIngredientsBoolExp = {
  _and?: Maybe<Array<Maybe<InsertRecipeOneDerivedRecipeIngredientsBoolExp>>>;
  _not?: Maybe<InsertRecipeOneDerivedRecipeIngredientsBoolExp>;
  _or?: Maybe<Array<Maybe<InsertRecipeOneDerivedRecipeIngredientsBoolExp>>>;
  formatted_text?: Maybe<InsertRecipeOneDerivedStringComparisonExp>;
  id?: Maybe<InsertRecipeOneDerivedUuidComparisonExp>;
  name?: Maybe<InsertRecipeOneDerivedStringComparisonExp>;
  optional?: Maybe<InsertRecipeOneDerivedBooleanComparisonExp>;
  preparation?: Maybe<InsertRecipeOneDerivedStringComparisonExp>;
  quantity_denominator?: Maybe<InsertRecipeOneDerivedIntComparisonExp>;
  quantity_numerator?: Maybe<InsertRecipeOneDerivedIntComparisonExp>;
  raw_text?: Maybe<InsertRecipeOneDerivedStringComparisonExp>;
  recipe?: Maybe<InsertRecipeOneDerivedRecipeBoolExp>;
  recipe_id?: Maybe<InsertRecipeOneDerivedStringComparisonExp>;
  unit?: Maybe<InsertRecipeOneDerivedStringComparisonExp>;
};

type InsertRecipeOneDerivedUuidComparisonExp = {
  _eq?: Maybe<uuid>;
  _gt?: Maybe<uuid>;
  _gte?: Maybe<uuid>;
  _in: Array<uuid>;
  _is_null?: Maybe<boolean>;
  _lt?: Maybe<uuid>;
  _lte?: Maybe<uuid>;
  _neq?: Maybe<uuid>;
  _nin: Array<uuid>;
};

type InsertRecipeOneDerivedBooleanComparisonExp = {
  _eq?: Maybe<boolean>;
  _gt?: Maybe<boolean>;
  _gte?: Maybe<boolean>;
  _in: Array<boolean>;
  _is_null?: Maybe<boolean>;
  _lt?: Maybe<boolean>;
  _lte?: Maybe<boolean>;
  _neq?: Maybe<boolean>;
  _nin: Array<boolean>;
};

type InsertRecipeOneDerivedIntComparisonExp = {
  _eq?: Maybe<number>;
  _gt?: Maybe<number>;
  _gte?: Maybe<number>;
  _in: Array<number>;
  _is_null?: Maybe<boolean>;
  _lt?: Maybe<number>;
  _lte?: Maybe<number>;
  _neq?: Maybe<number>;
  _nin: Array<number>;
};

type InsertRecipeOneDerivedUserBoolExp = {
  _and?: Maybe<Array<Maybe<InsertRecipeOneDerivedUserBoolExp>>>;
  _not?: Maybe<InsertRecipeOneDerivedUserBoolExp>;
  _or?: Maybe<Array<Maybe<InsertRecipeOneDerivedUserBoolExp>>>;
  email?: Maybe<InsertRecipeOneDerivedStringComparisonExp>;
  id?: Maybe<InsertRecipeOneDerivedStringComparisonExp>;
  img?: Maybe<InsertRecipeOneDerivedStringComparisonExp>;
  name?: Maybe<InsertRecipeOneDerivedStringComparisonExp>;
  recipes_list?: Maybe<InsertRecipeOneDerivedRecipeBoolExp>;
};

type InsertRecipeOneDerivedRecipeIngredientsOnConflict = {
  constraint: InsertRecipeOneDerivedRecipeIngredientsConstraint;
  update_columns: Array<InsertRecipeOneDerivedRecipeIngredientsUpdateColumn>;
  where?: Maybe<InsertRecipeOneDerivedRecipeIngredientsBoolExp>;
};

type Query = {
  parseIngredients: Array<ParsedIngredients>;
};

type Mutation = {
  InsertRecipeOneDerived?: Maybe<InsertRecipeOneDerivedOutput>;
  overRideIngredients: Status;
};

type parseIngredientsArgs = {
  ingredientsToParse?: Maybe<Array<Maybe<string>>>;
};

type InsertRecipeOneDerivedArgs = {
  object: InsertRecipeOneDerivedRecipeInsertInput;
};

type overRideIngredientsArgs = {
  ingredientsStrings: Array<string>;
  recipe_id: string;
};
