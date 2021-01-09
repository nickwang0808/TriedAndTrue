import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  json: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars["Boolean"]>;
  _gt?: Maybe<Scalars["Boolean"]>;
  _gte?: Maybe<Scalars["Boolean"]>;
  _in?: Maybe<Array<Scalars["Boolean"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Boolean"]>;
  _lte?: Maybe<Scalars["Boolean"]>;
  _neq?: Maybe<Scalars["Boolean"]>;
  _nin?: Maybe<Array<Scalars["Boolean"]>>;
};

export type Ingredients = {
  ingredients?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars["Int"]>;
  _gt?: Maybe<Scalars["Int"]>;
  _gte?: Maybe<Scalars["Int"]>;
  _in?: Maybe<Array<Scalars["Int"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Int"]>;
  _lte?: Maybe<Scalars["Int"]>;
  _neq?: Maybe<Scalars["Int"]>;
  _nin?: Maybe<Array<Scalars["Int"]>>;
};

export type ParsedIngredients = {
  name: Scalars["String"];
};

export type Status = {
  status: Scalars["String"];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  _nlike?: Maybe<Scalars["String"]>;
  _nsimilar?: Maybe<Scalars["String"]>;
  _similar?: Maybe<Scalars["String"]>;
};

/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars["json"]>;
  _gt?: Maybe<Scalars["json"]>;
  _gte?: Maybe<Scalars["json"]>;
  _in?: Maybe<Array<Scalars["json"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["json"]>;
  _lte?: Maybe<Scalars["json"]>;
  _neq?: Maybe<Scalars["json"]>;
  _nin?: Maybe<Array<Scalars["json"]>>;
};

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "recipe" */
  delete_recipe?: Maybe<Recipe_Mutation_Response>;
  /** delete single row from the table: "recipe" */
  delete_recipe_by_pk?: Maybe<Recipe>;
  /** delete data from the table: "recipe_ingredients" */
  delete_recipe_ingredients?: Maybe<Recipe_Ingredients_Mutation_Response>;
  /** delete single row from the table: "recipe_ingredients" */
  delete_recipe_ingredients_by_pk?: Maybe<Recipe_Ingredients>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "recipe" */
  insert_recipe?: Maybe<Recipe_Mutation_Response>;
  /** insert data into the table: "recipe_ingredients" */
  insert_recipe_ingredients?: Maybe<Recipe_Ingredients_Mutation_Response>;
  /** insert a single row into the table: "recipe_ingredients" */
  insert_recipe_ingredients_one?: Maybe<Recipe_Ingredients>;
  /** insert a single row into the table: "recipe" */
  insert_recipe_one?: Maybe<Recipe>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** perform the action: "overRideIngredients" */
  overRideIngredients: Scalars["uuid"];
  /** update data of the table: "recipe" */
  update_recipe?: Maybe<Recipe_Mutation_Response>;
  /** update single row of the table: "recipe" */
  update_recipe_by_pk?: Maybe<Recipe>;
  /** update data of the table: "recipe_ingredients" */
  update_recipe_ingredients?: Maybe<Recipe_Ingredients_Mutation_Response>;
  /** update single row of the table: "recipe_ingredients" */
  update_recipe_ingredients_by_pk?: Maybe<Recipe_Ingredients>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};

/** mutation root */
export type Mutation_RootDelete_RecipeArgs = {
  where: Recipe_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Recipe_By_PkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Recipe_IngredientsArgs = {
  where: Recipe_Ingredients_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Recipe_Ingredients_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootInsert_RecipeArgs = {
  objects: Array<Recipe_Insert_Input>;
  on_conflict?: Maybe<Recipe_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Recipe_IngredientsArgs = {
  objects: Array<Recipe_Ingredients_Insert_Input>;
  on_conflict?: Maybe<Recipe_Ingredients_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Recipe_Ingredients_OneArgs = {
  object: Recipe_Ingredients_Insert_Input;
  on_conflict?: Maybe<Recipe_Ingredients_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Recipe_OneArgs = {
  object: Recipe_Insert_Input;
  on_conflict?: Maybe<Recipe_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootOverRideIngredientsArgs = {
  ingredientsStrings: Array<Maybe<Scalars["String"]>>;
  recipe_id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootUpdate_RecipeArgs = {
  _inc?: Maybe<Recipe_Inc_Input>;
  _set?: Maybe<Recipe_Set_Input>;
  where: Recipe_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Recipe_By_PkArgs = {
  _inc?: Maybe<Recipe_Inc_Input>;
  _set?: Maybe<Recipe_Set_Input>;
  pk_columns: Recipe_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Recipe_IngredientsArgs = {
  _inc?: Maybe<Recipe_Ingredients_Inc_Input>;
  _set?: Maybe<Recipe_Ingredients_Set_Input>;
  where: Recipe_Ingredients_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Recipe_Ingredients_By_PkArgs = {
  _inc?: Maybe<Recipe_Ingredients_Inc_Input>;
  _set?: Maybe<Recipe_Ingredients_Set_Input>;
  pk_columns: Recipe_Ingredients_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = "asc",
  /** in the ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in the ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in the descending order, nulls first */
  Desc = "desc",
  /** in the descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in the descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** fields of action: "overRideIngredients" */
export type OverRideIngredients = {
  /** the time at which this action was created */
  created_at?: Maybe<Scalars["timestamptz"]>;
  /** errors related to the invocation */
  errors?: Maybe<Scalars["json"]>;
  /** the unique id of an action */
  id?: Maybe<Scalars["uuid"]>;
  /** the output fields of this action */
  output: Status;
};

/** query root */
export type Query_Root = {
  /** retrieve the result of action: "overRideIngredients" */
  overRideIngredients?: Maybe<OverRideIngredients>;
  /** perform the action: "parseIngredients" */
  parseIngredients: Array<ParsedIngredients>;
  /** fetch data from the table: "recipe" */
  recipe: Array<Recipe>;
  /** fetch aggregated fields from the table: "recipe" */
  recipe_aggregate: Recipe_Aggregate;
  /** fetch data from the table: "recipe" using primary key columns */
  recipe_by_pk?: Maybe<Recipe>;
  /** fetch data from the table: "recipe_ingredients" */
  recipe_ingredients: Array<Recipe_Ingredients>;
  /** fetch aggregated fields from the table: "recipe_ingredients" */
  recipe_ingredients_aggregate: Recipe_Ingredients_Aggregate;
  /** fetch data from the table: "recipe_ingredients" using primary key columns */
  recipe_ingredients_by_pk?: Maybe<Recipe_Ingredients>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};

/** query root */
export type Query_RootOverRideIngredientsArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type Query_RootParseIngredientsArgs = {
  ingredients?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** query root */
export type Query_RootRecipeArgs = {
  distinct_on?: Maybe<Array<Recipe_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Recipe_Order_By>>;
  where?: Maybe<Recipe_Bool_Exp>;
};

/** query root */
export type Query_RootRecipe_AggregateArgs = {
  distinct_on?: Maybe<Array<Recipe_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Recipe_Order_By>>;
  where?: Maybe<Recipe_Bool_Exp>;
};

/** query root */
export type Query_RootRecipe_By_PkArgs = {
  id: Scalars["String"];
};

/** query root */
export type Query_RootRecipe_IngredientsArgs = {
  distinct_on?: Maybe<Array<Recipe_Ingredients_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Recipe_Ingredients_Order_By>>;
  where?: Maybe<Recipe_Ingredients_Bool_Exp>;
};

/** query root */
export type Query_RootRecipe_Ingredients_AggregateArgs = {
  distinct_on?: Maybe<Array<Recipe_Ingredients_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Recipe_Ingredients_Order_By>>;
  where?: Maybe<Recipe_Ingredients_Bool_Exp>;
};

/** query root */
export type Query_RootRecipe_Ingredients_By_PkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars["String"];
};

/** columns and relationships of "recipe" */
export type Recipe = {
  cuisine?: Maybe<Scalars["String"]>;
  directions?: Maybe<Scalars["json"]>;
  id: Scalars["String"];
  img?: Maybe<Scalars["String"]>;
  meal_type?: Maybe<Scalars["String"]>;
  owner: Scalars["String"];
  /** An array relationship */
  recipe_ingredients_list: Array<Recipe_Ingredients>;
  /** An aggregated array relationship */
  recipe_ingredients_list_aggregate: Recipe_Ingredients_Aggregate;
  title: Scalars["String"];
  total_time?: Maybe<Scalars["Int"]>;
  /** An object relationship */
  user: User;
  yields?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "recipe" */
export type RecipeDirectionsArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "recipe" */
export type RecipeRecipe_Ingredients_ListArgs = {
  distinct_on?: Maybe<Array<Recipe_Ingredients_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Recipe_Ingredients_Order_By>>;
  where?: Maybe<Recipe_Ingredients_Bool_Exp>;
};

/** columns and relationships of "recipe" */
export type RecipeRecipe_Ingredients_List_AggregateArgs = {
  distinct_on?: Maybe<Array<Recipe_Ingredients_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Recipe_Ingredients_Order_By>>;
  where?: Maybe<Recipe_Ingredients_Bool_Exp>;
};

/** aggregated selection of "recipe" */
export type Recipe_Aggregate = {
  aggregate?: Maybe<Recipe_Aggregate_Fields>;
  nodes: Array<Recipe>;
};

/** aggregate fields of "recipe" */
export type Recipe_Aggregate_Fields = {
  avg?: Maybe<Recipe_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Recipe_Max_Fields>;
  min?: Maybe<Recipe_Min_Fields>;
  stddev?: Maybe<Recipe_Stddev_Fields>;
  stddev_pop?: Maybe<Recipe_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Recipe_Stddev_Samp_Fields>;
  sum?: Maybe<Recipe_Sum_Fields>;
  var_pop?: Maybe<Recipe_Var_Pop_Fields>;
  var_samp?: Maybe<Recipe_Var_Samp_Fields>;
  variance?: Maybe<Recipe_Variance_Fields>;
};

/** aggregate fields of "recipe" */
export type Recipe_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Recipe_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "recipe" */
export type Recipe_Aggregate_Order_By = {
  avg?: Maybe<Recipe_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Recipe_Max_Order_By>;
  min?: Maybe<Recipe_Min_Order_By>;
  stddev?: Maybe<Recipe_Stddev_Order_By>;
  stddev_pop?: Maybe<Recipe_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Recipe_Stddev_Samp_Order_By>;
  sum?: Maybe<Recipe_Sum_Order_By>;
  var_pop?: Maybe<Recipe_Var_Pop_Order_By>;
  var_samp?: Maybe<Recipe_Var_Samp_Order_By>;
  variance?: Maybe<Recipe_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "recipe" */
export type Recipe_Arr_Rel_Insert_Input = {
  data: Array<Recipe_Insert_Input>;
  on_conflict?: Maybe<Recipe_On_Conflict>;
};

/** aggregate avg on columns */
export type Recipe_Avg_Fields = {
  total_time?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "recipe" */
export type Recipe_Avg_Order_By = {
  total_time?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "recipe". All fields are combined with a logical 'AND'. */
export type Recipe_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Recipe_Bool_Exp>>>;
  _not?: Maybe<Recipe_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Recipe_Bool_Exp>>>;
  cuisine?: Maybe<String_Comparison_Exp>;
  directions?: Maybe<Json_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  img?: Maybe<String_Comparison_Exp>;
  meal_type?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<String_Comparison_Exp>;
  recipe_ingredients_list?: Maybe<Recipe_Ingredients_Bool_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  total_time?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  yields?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "recipe" */
export enum Recipe_Constraint {
  /** unique or primary key constraint */
  RecipeIdKey = "recipe_id_key",
  /** unique or primary key constraint */
  RecipePkey = "recipe_pkey",
}

/** input type for incrementing integer column in table "recipe" */
export type Recipe_Inc_Input = {
  total_time?: Maybe<Scalars["Int"]>;
};

/** columns and relationships of "recipe_ingredients" */
export type Recipe_Ingredients = {
  formatted_text?: Maybe<Scalars["String"]>;
  id: Scalars["uuid"];
  name?: Maybe<Scalars["String"]>;
  optional?: Maybe<Scalars["Boolean"]>;
  preparation?: Maybe<Scalars["String"]>;
  quantity_denominator?: Maybe<Scalars["Int"]>;
  quantity_numerator?: Maybe<Scalars["Int"]>;
  raw_text: Scalars["String"];
  /** An object relationship */
  recipe: Recipe;
  recipe_id: Scalars["String"];
  unit?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "recipe_ingredients" */
export type Recipe_Ingredients_Aggregate = {
  aggregate?: Maybe<Recipe_Ingredients_Aggregate_Fields>;
  nodes: Array<Recipe_Ingredients>;
};

/** aggregate fields of "recipe_ingredients" */
export type Recipe_Ingredients_Aggregate_Fields = {
  avg?: Maybe<Recipe_Ingredients_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Recipe_Ingredients_Max_Fields>;
  min?: Maybe<Recipe_Ingredients_Min_Fields>;
  stddev?: Maybe<Recipe_Ingredients_Stddev_Fields>;
  stddev_pop?: Maybe<Recipe_Ingredients_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Recipe_Ingredients_Stddev_Samp_Fields>;
  sum?: Maybe<Recipe_Ingredients_Sum_Fields>;
  var_pop?: Maybe<Recipe_Ingredients_Var_Pop_Fields>;
  var_samp?: Maybe<Recipe_Ingredients_Var_Samp_Fields>;
  variance?: Maybe<Recipe_Ingredients_Variance_Fields>;
};

/** aggregate fields of "recipe_ingredients" */
export type Recipe_Ingredients_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Recipe_Ingredients_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "recipe_ingredients" */
export type Recipe_Ingredients_Aggregate_Order_By = {
  avg?: Maybe<Recipe_Ingredients_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Recipe_Ingredients_Max_Order_By>;
  min?: Maybe<Recipe_Ingredients_Min_Order_By>;
  stddev?: Maybe<Recipe_Ingredients_Stddev_Order_By>;
  stddev_pop?: Maybe<Recipe_Ingredients_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Recipe_Ingredients_Stddev_Samp_Order_By>;
  sum?: Maybe<Recipe_Ingredients_Sum_Order_By>;
  var_pop?: Maybe<Recipe_Ingredients_Var_Pop_Order_By>;
  var_samp?: Maybe<Recipe_Ingredients_Var_Samp_Order_By>;
  variance?: Maybe<Recipe_Ingredients_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "recipe_ingredients" */
export type Recipe_Ingredients_Arr_Rel_Insert_Input = {
  data: Array<Recipe_Ingredients_Insert_Input>;
  on_conflict?: Maybe<Recipe_Ingredients_On_Conflict>;
};

/** aggregate avg on columns */
export type Recipe_Ingredients_Avg_Fields = {
  quantity_denominator?: Maybe<Scalars["Float"]>;
  quantity_numerator?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Avg_Order_By = {
  quantity_denominator?: Maybe<Order_By>;
  quantity_numerator?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "recipe_ingredients". All fields are combined with a logical 'AND'. */
export type Recipe_Ingredients_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Recipe_Ingredients_Bool_Exp>>>;
  _not?: Maybe<Recipe_Ingredients_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Recipe_Ingredients_Bool_Exp>>>;
  formatted_text?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  optional?: Maybe<Boolean_Comparison_Exp>;
  preparation?: Maybe<String_Comparison_Exp>;
  quantity_denominator?: Maybe<Int_Comparison_Exp>;
  quantity_numerator?: Maybe<Int_Comparison_Exp>;
  raw_text?: Maybe<String_Comparison_Exp>;
  recipe?: Maybe<Recipe_Bool_Exp>;
  recipe_id?: Maybe<String_Comparison_Exp>;
  unit?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "recipe_ingredients" */
export enum Recipe_Ingredients_Constraint {
  /** unique or primary key constraint */
  RecipeIngredientsIdKey = "recipe_ingredients_id_key",
  /** unique or primary key constraint */
  RecipeIngredientsPkey = "recipe_ingredients_pkey",
}

/** input type for incrementing integer column in table "recipe_ingredients" */
export type Recipe_Ingredients_Inc_Input = {
  quantity_denominator?: Maybe<Scalars["Int"]>;
  quantity_numerator?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "recipe_ingredients" */
export type Recipe_Ingredients_Insert_Input = {
  formatted_text?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  optional?: Maybe<Scalars["Boolean"]>;
  preparation?: Maybe<Scalars["String"]>;
  quantity_denominator?: Maybe<Scalars["Int"]>;
  quantity_numerator?: Maybe<Scalars["Int"]>;
  raw_text?: Maybe<Scalars["String"]>;
  recipe?: Maybe<Recipe_Obj_Rel_Insert_Input>;
  recipe_id?: Maybe<Scalars["String"]>;
  unit?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Recipe_Ingredients_Max_Fields = {
  formatted_text?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  preparation?: Maybe<Scalars["String"]>;
  quantity_denominator?: Maybe<Scalars["Int"]>;
  quantity_numerator?: Maybe<Scalars["Int"]>;
  raw_text?: Maybe<Scalars["String"]>;
  recipe_id?: Maybe<Scalars["String"]>;
  unit?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Max_Order_By = {
  formatted_text?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  preparation?: Maybe<Order_By>;
  quantity_denominator?: Maybe<Order_By>;
  quantity_numerator?: Maybe<Order_By>;
  raw_text?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
  unit?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Recipe_Ingredients_Min_Fields = {
  formatted_text?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  preparation?: Maybe<Scalars["String"]>;
  quantity_denominator?: Maybe<Scalars["Int"]>;
  quantity_numerator?: Maybe<Scalars["Int"]>;
  raw_text?: Maybe<Scalars["String"]>;
  recipe_id?: Maybe<Scalars["String"]>;
  unit?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Min_Order_By = {
  formatted_text?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  preparation?: Maybe<Order_By>;
  quantity_denominator?: Maybe<Order_By>;
  quantity_numerator?: Maybe<Order_By>;
  raw_text?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
  unit?: Maybe<Order_By>;
};

/** response of any mutation on the table "recipe_ingredients" */
export type Recipe_Ingredients_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Recipe_Ingredients>;
};

/** input type for inserting object relation for remote table "recipe_ingredients" */
export type Recipe_Ingredients_Obj_Rel_Insert_Input = {
  data: Recipe_Ingredients_Insert_Input;
  on_conflict?: Maybe<Recipe_Ingredients_On_Conflict>;
};

/** on conflict condition type for table "recipe_ingredients" */
export type Recipe_Ingredients_On_Conflict = {
  constraint: Recipe_Ingredients_Constraint;
  update_columns: Array<Recipe_Ingredients_Update_Column>;
  where?: Maybe<Recipe_Ingredients_Bool_Exp>;
};

/** ordering options when selecting data from "recipe_ingredients" */
export type Recipe_Ingredients_Order_By = {
  formatted_text?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  optional?: Maybe<Order_By>;
  preparation?: Maybe<Order_By>;
  quantity_denominator?: Maybe<Order_By>;
  quantity_numerator?: Maybe<Order_By>;
  raw_text?: Maybe<Order_By>;
  recipe?: Maybe<Recipe_Order_By>;
  recipe_id?: Maybe<Order_By>;
  unit?: Maybe<Order_By>;
};

/** primary key columns input for table: "recipe_ingredients" */
export type Recipe_Ingredients_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "recipe_ingredients" */
export enum Recipe_Ingredients_Select_Column {
  /** column name */
  FormattedText = "formatted_text",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Optional = "optional",
  /** column name */
  Preparation = "preparation",
  /** column name */
  QuantityDenominator = "quantity_denominator",
  /** column name */
  QuantityNumerator = "quantity_numerator",
  /** column name */
  RawText = "raw_text",
  /** column name */
  RecipeId = "recipe_id",
  /** column name */
  Unit = "unit",
}

/** input type for updating data in table "recipe_ingredients" */
export type Recipe_Ingredients_Set_Input = {
  formatted_text?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  optional?: Maybe<Scalars["Boolean"]>;
  preparation?: Maybe<Scalars["String"]>;
  quantity_denominator?: Maybe<Scalars["Int"]>;
  quantity_numerator?: Maybe<Scalars["Int"]>;
  raw_text?: Maybe<Scalars["String"]>;
  recipe_id?: Maybe<Scalars["String"]>;
  unit?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Recipe_Ingredients_Stddev_Fields = {
  quantity_denominator?: Maybe<Scalars["Float"]>;
  quantity_numerator?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Stddev_Order_By = {
  quantity_denominator?: Maybe<Order_By>;
  quantity_numerator?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Recipe_Ingredients_Stddev_Pop_Fields = {
  quantity_denominator?: Maybe<Scalars["Float"]>;
  quantity_numerator?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Stddev_Pop_Order_By = {
  quantity_denominator?: Maybe<Order_By>;
  quantity_numerator?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Recipe_Ingredients_Stddev_Samp_Fields = {
  quantity_denominator?: Maybe<Scalars["Float"]>;
  quantity_numerator?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Stddev_Samp_Order_By = {
  quantity_denominator?: Maybe<Order_By>;
  quantity_numerator?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Recipe_Ingredients_Sum_Fields = {
  quantity_denominator?: Maybe<Scalars["Int"]>;
  quantity_numerator?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Sum_Order_By = {
  quantity_denominator?: Maybe<Order_By>;
  quantity_numerator?: Maybe<Order_By>;
};

/** update columns of table "recipe_ingredients" */
export enum Recipe_Ingredients_Update_Column {
  /** column name */
  FormattedText = "formatted_text",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Optional = "optional",
  /** column name */
  Preparation = "preparation",
  /** column name */
  QuantityDenominator = "quantity_denominator",
  /** column name */
  QuantityNumerator = "quantity_numerator",
  /** column name */
  RawText = "raw_text",
  /** column name */
  RecipeId = "recipe_id",
  /** column name */
  Unit = "unit",
}

/** aggregate var_pop on columns */
export type Recipe_Ingredients_Var_Pop_Fields = {
  quantity_denominator?: Maybe<Scalars["Float"]>;
  quantity_numerator?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Var_Pop_Order_By = {
  quantity_denominator?: Maybe<Order_By>;
  quantity_numerator?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Recipe_Ingredients_Var_Samp_Fields = {
  quantity_denominator?: Maybe<Scalars["Float"]>;
  quantity_numerator?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Var_Samp_Order_By = {
  quantity_denominator?: Maybe<Order_By>;
  quantity_numerator?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Recipe_Ingredients_Variance_Fields = {
  quantity_denominator?: Maybe<Scalars["Float"]>;
  quantity_numerator?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "recipe_ingredients" */
export type Recipe_Ingredients_Variance_Order_By = {
  quantity_denominator?: Maybe<Order_By>;
  quantity_numerator?: Maybe<Order_By>;
};

/** input type for inserting data into table "recipe" */
export type Recipe_Insert_Input = {
  cuisine?: Maybe<Scalars["String"]>;
  directions?: Maybe<Scalars["json"]>;
  id?: Maybe<Scalars["String"]>;
  img?: Maybe<Scalars["String"]>;
  meal_type?: Maybe<Scalars["String"]>;
  owner?: Maybe<Scalars["String"]>;
  recipe_ingredients_list?: Maybe<Recipe_Ingredients_Arr_Rel_Insert_Input>;
  title?: Maybe<Scalars["String"]>;
  total_time?: Maybe<Scalars["Int"]>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  yields?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Recipe_Max_Fields = {
  cuisine?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  img?: Maybe<Scalars["String"]>;
  meal_type?: Maybe<Scalars["String"]>;
  owner?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  total_time?: Maybe<Scalars["Int"]>;
  yields?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "recipe" */
export type Recipe_Max_Order_By = {
  cuisine?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  img?: Maybe<Order_By>;
  meal_type?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  total_time?: Maybe<Order_By>;
  yields?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Recipe_Min_Fields = {
  cuisine?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  img?: Maybe<Scalars["String"]>;
  meal_type?: Maybe<Scalars["String"]>;
  owner?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  total_time?: Maybe<Scalars["Int"]>;
  yields?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "recipe" */
export type Recipe_Min_Order_By = {
  cuisine?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  img?: Maybe<Order_By>;
  meal_type?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  total_time?: Maybe<Order_By>;
  yields?: Maybe<Order_By>;
};

/** response of any mutation on the table "recipe" */
export type Recipe_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Recipe>;
};

/** input type for inserting object relation for remote table "recipe" */
export type Recipe_Obj_Rel_Insert_Input = {
  data: Recipe_Insert_Input;
  on_conflict?: Maybe<Recipe_On_Conflict>;
};

/** on conflict condition type for table "recipe" */
export type Recipe_On_Conflict = {
  constraint: Recipe_Constraint;
  update_columns: Array<Recipe_Update_Column>;
  where?: Maybe<Recipe_Bool_Exp>;
};

/** ordering options when selecting data from "recipe" */
export type Recipe_Order_By = {
  cuisine?: Maybe<Order_By>;
  directions?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  img?: Maybe<Order_By>;
  meal_type?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  recipe_ingredients_list_aggregate?: Maybe<Recipe_Ingredients_Aggregate_Order_By>;
  title?: Maybe<Order_By>;
  total_time?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  yields?: Maybe<Order_By>;
};

/** primary key columns input for table: "recipe" */
export type Recipe_Pk_Columns_Input = {
  id: Scalars["String"];
};

/** select columns of table "recipe" */
export enum Recipe_Select_Column {
  /** column name */
  Cuisine = "cuisine",
  /** column name */
  Directions = "directions",
  /** column name */
  Id = "id",
  /** column name */
  Img = "img",
  /** column name */
  MealType = "meal_type",
  /** column name */
  Owner = "owner",
  /** column name */
  Title = "title",
  /** column name */
  TotalTime = "total_time",
  /** column name */
  Yields = "yields",
}

/** input type for updating data in table "recipe" */
export type Recipe_Set_Input = {
  cuisine?: Maybe<Scalars["String"]>;
  directions?: Maybe<Scalars["json"]>;
  id?: Maybe<Scalars["String"]>;
  img?: Maybe<Scalars["String"]>;
  meal_type?: Maybe<Scalars["String"]>;
  owner?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  total_time?: Maybe<Scalars["Int"]>;
  yields?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Recipe_Stddev_Fields = {
  total_time?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "recipe" */
export type Recipe_Stddev_Order_By = {
  total_time?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Recipe_Stddev_Pop_Fields = {
  total_time?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "recipe" */
export type Recipe_Stddev_Pop_Order_By = {
  total_time?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Recipe_Stddev_Samp_Fields = {
  total_time?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "recipe" */
export type Recipe_Stddev_Samp_Order_By = {
  total_time?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Recipe_Sum_Fields = {
  total_time?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "recipe" */
export type Recipe_Sum_Order_By = {
  total_time?: Maybe<Order_By>;
};

/** update columns of table "recipe" */
export enum Recipe_Update_Column {
  /** column name */
  Cuisine = "cuisine",
  /** column name */
  Directions = "directions",
  /** column name */
  Id = "id",
  /** column name */
  Img = "img",
  /** column name */
  MealType = "meal_type",
  /** column name */
  Owner = "owner",
  /** column name */
  Title = "title",
  /** column name */
  TotalTime = "total_time",
  /** column name */
  Yields = "yields",
}

/** aggregate var_pop on columns */
export type Recipe_Var_Pop_Fields = {
  total_time?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "recipe" */
export type Recipe_Var_Pop_Order_By = {
  total_time?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Recipe_Var_Samp_Fields = {
  total_time?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "recipe" */
export type Recipe_Var_Samp_Order_By = {
  total_time?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Recipe_Variance_Fields = {
  total_time?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "recipe" */
export type Recipe_Variance_Order_By = {
  total_time?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  /** retrieve the result of action: "overRideIngredients" */
  overRideIngredients?: Maybe<OverRideIngredients>;
  /** perform the action: "parseIngredients" */
  parseIngredients: Array<ParsedIngredients>;
  /** fetch data from the table: "recipe" */
  recipe: Array<Recipe>;
  /** fetch aggregated fields from the table: "recipe" */
  recipe_aggregate: Recipe_Aggregate;
  /** fetch data from the table: "recipe" using primary key columns */
  recipe_by_pk?: Maybe<Recipe>;
  /** fetch data from the table: "recipe_ingredients" */
  recipe_ingredients: Array<Recipe_Ingredients>;
  /** fetch aggregated fields from the table: "recipe_ingredients" */
  recipe_ingredients_aggregate: Recipe_Ingredients_Aggregate;
  /** fetch data from the table: "recipe_ingredients" using primary key columns */
  recipe_ingredients_by_pk?: Maybe<Recipe_Ingredients>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};

/** subscription root */
export type Subscription_RootOverRideIngredientsArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type Subscription_RootParseIngredientsArgs = {
  ingredients?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** subscription root */
export type Subscription_RootRecipeArgs = {
  distinct_on?: Maybe<Array<Recipe_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Recipe_Order_By>>;
  where?: Maybe<Recipe_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootRecipe_AggregateArgs = {
  distinct_on?: Maybe<Array<Recipe_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Recipe_Order_By>>;
  where?: Maybe<Recipe_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootRecipe_By_PkArgs = {
  id: Scalars["String"];
};

/** subscription root */
export type Subscription_RootRecipe_IngredientsArgs = {
  distinct_on?: Maybe<Array<Recipe_Ingredients_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Recipe_Ingredients_Order_By>>;
  where?: Maybe<Recipe_Ingredients_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootRecipe_Ingredients_AggregateArgs = {
  distinct_on?: Maybe<Array<Recipe_Ingredients_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Recipe_Ingredients_Order_By>>;
  where?: Maybe<Recipe_Ingredients_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootRecipe_Ingredients_By_PkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars["String"];
};

/** columns and relationships of "user" */
export type User = {
  email: Scalars["String"];
  id: Scalars["String"];
  img?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  /** An array relationship */
  recipes_list: Array<Recipe>;
  /** An aggregated array relationship */
  recipes_list_aggregate: Recipe_Aggregate;
};

/** columns and relationships of "user" */
export type UserRecipes_ListArgs = {
  distinct_on?: Maybe<Array<Recipe_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Recipe_Order_By>>;
  where?: Maybe<Recipe_Bool_Exp>;
};

/** columns and relationships of "user" */
export type UserRecipes_List_AggregateArgs = {
  distinct_on?: Maybe<Array<Recipe_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Recipe_Order_By>>;
  where?: Maybe<Recipe_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};

/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  img?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  recipes_list?: Maybe<Recipe_Bool_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserPkey = "user_pkey",
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  img?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  recipes_list?: Maybe<Recipe_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  img?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  img?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  img?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  img?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  img?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  recipes_list_aggregate?: Maybe<Recipe_Aggregate_Order_By>;
};

/** primary key columns input for table: "user" */
export type User_Pk_Columns_Input = {
  id: Scalars["String"];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  Img = "img",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  img?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  Img = "img",
  /** column name */
  Name = "name",
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars["uuid"]>;
  _gt?: Maybe<Scalars["uuid"]>;
  _gte?: Maybe<Scalars["uuid"]>;
  _in?: Maybe<Array<Scalars["uuid"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["uuid"]>;
  _lte?: Maybe<Scalars["uuid"]>;
  _neq?: Maybe<Scalars["uuid"]>;
  _nin?: Maybe<Array<Scalars["uuid"]>>;
};

export type InsertRecipeMutationVariables = Exact<{
  object: Recipe_Insert_Input;
}>;

export type InsertRecipeMutation = {
  insert_recipe_one?: Maybe<
    Pick<
      Recipe,
      | "cuisine"
      | "directions"
      | "id"
      | "img"
      | "meal_type"
      | "owner"
      | "title"
      | "total_time"
      | "yields"
    > & {
      recipe_ingredients_list: Array<
        Pick<
          Recipe_Ingredients,
          | "name"
          | "optional"
          | "preparation"
          | "quantity_denominator"
          | "quantity_numerator"
          | "raw_text"
          | "unit"
        >
      >;
    }
  >;
};

export type UpdateRecipeDetailMutationVariables = Exact<{
  id: Scalars["String"];
  _set: Recipe_Set_Input;
  ingredientsStrings: Array<Scalars["String"]> | Scalars["String"];
}>;

export type UpdateRecipeDetailMutation = Pick<
  Mutation_Root,
  "overRideIngredients"
> & {
  update_recipe_by_pk?: Maybe<
    Pick<
      Recipe,
      | "cuisine"
      | "directions"
      | "id"
      | "img"
      | "meal_type"
      | "owner"
      | "title"
      | "total_time"
      | "yields"
    >
  >;
};

export type GetAllRecipeQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllRecipeQuery = {
  recipe: Array<Pick<Recipe, "id" | "img" | "title" | "total_time">>;
};

export type GetProfileQueryVariables = Exact<{
  uid: Scalars["String"];
}>;

export type GetProfileQuery = {
  user: Array<Pick<User, "email" | "name" | "img">>;
};

export type GetRecipeDetailsQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type GetRecipeDetailsQuery = {
  recipe_by_pk?: Maybe<
    Pick<
      Recipe,
      | "cuisine"
      | "directions"
      | "id"
      | "img"
      | "meal_type"
      | "owner"
      | "title"
      | "total_time"
      | "yields"
    > & {
      recipe_ingredients_list: Array<
        Pick<
          Recipe_Ingredients,
          | "name"
          | "quantity_denominator"
          | "quantity_numerator"
          | "unit"
          | "formatted_text"
        >
      >;
    }
  >;
};

export type ParseIngredientsQueryVariables = Exact<{
  ingredientsArray?: Maybe<
    Array<Maybe<Scalars["String"]>> | Maybe<Scalars["String"]>
  >;
}>;

export type ParseIngredientsQuery = {
  parseIngredients: Array<Pick<ParsedIngredients, "name">>;
};

export const InsertRecipeDocument = gql`
  mutation InsertRecipe($object: recipe_insert_input!) {
    insert_recipe_one(object: $object) {
      cuisine
      directions
      id
      img
      meal_type
      owner
      title
      total_time
      yields
      recipe_ingredients_list {
        name
        optional
        preparation
        quantity_denominator
        quantity_numerator
        raw_text
        unit
      }
    }
  }
`;
export type InsertRecipeMutationFn = Apollo.MutationFunction<
  InsertRecipeMutation,
  InsertRecipeMutationVariables
>;

/**
 * __useInsertRecipeMutation__
 *
 * To run a mutation, you first call `useInsertRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertRecipeMutation, { data, loading, error }] = useInsertRecipeMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertRecipeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertRecipeMutation,
    InsertRecipeMutationVariables
  >
) {
  return Apollo.useMutation<
    InsertRecipeMutation,
    InsertRecipeMutationVariables
  >(InsertRecipeDocument, baseOptions);
}
export type InsertRecipeMutationHookResult = ReturnType<
  typeof useInsertRecipeMutation
>;
export type InsertRecipeMutationResult = Apollo.MutationResult<InsertRecipeMutation>;
export type InsertRecipeMutationOptions = Apollo.BaseMutationOptions<
  InsertRecipeMutation,
  InsertRecipeMutationVariables
>;
export const UpdateRecipeDetailDocument = gql`
  mutation UpdateRecipeDetail(
    $id: String!
    $_set: recipe_set_input!
    $ingredientsStrings: [String!]!
  ) {
    update_recipe_by_pk(pk_columns: { id: $id }, _set: $_set) {
      cuisine
      directions
      id
      img
      meal_type
      owner
      title
      total_time
      yields
    }
    overRideIngredients(ingredientsStrings: $ingredientsStrings, recipe_id: $id)
  }
`;
export type UpdateRecipeDetailMutationFn = Apollo.MutationFunction<
  UpdateRecipeDetailMutation,
  UpdateRecipeDetailMutationVariables
>;

/**
 * __useUpdateRecipeDetailMutation__
 *
 * To run a mutation, you first call `useUpdateRecipeDetailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRecipeDetailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRecipeDetailMutation, { data, loading, error }] = useUpdateRecipeDetailMutation({
 *   variables: {
 *      id: // value for 'id'
 *      _set: // value for '_set'
 *      ingredientsStrings: // value for 'ingredientsStrings'
 *   },
 * });
 */
export function useUpdateRecipeDetailMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateRecipeDetailMutation,
    UpdateRecipeDetailMutationVariables
  >
) {
  return Apollo.useMutation<
    UpdateRecipeDetailMutation,
    UpdateRecipeDetailMutationVariables
  >(UpdateRecipeDetailDocument, baseOptions);
}
export type UpdateRecipeDetailMutationHookResult = ReturnType<
  typeof useUpdateRecipeDetailMutation
>;
export type UpdateRecipeDetailMutationResult = Apollo.MutationResult<UpdateRecipeDetailMutation>;
export type UpdateRecipeDetailMutationOptions = Apollo.BaseMutationOptions<
  UpdateRecipeDetailMutation,
  UpdateRecipeDetailMutationVariables
>;
export const GetAllRecipeDocument = gql`
  query GetAllRecipe {
    recipe {
      id
      img
      title
      total_time
    }
  }
`;

/**
 * __useGetAllRecipeQuery__
 *
 * To run a query within a React component, call `useGetAllRecipeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRecipeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRecipeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllRecipeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllRecipeQuery,
    GetAllRecipeQueryVariables
  >
) {
  return Apollo.useQuery<GetAllRecipeQuery, GetAllRecipeQueryVariables>(
    GetAllRecipeDocument,
    baseOptions
  );
}
export function useGetAllRecipeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllRecipeQuery,
    GetAllRecipeQueryVariables
  >
) {
  return Apollo.useLazyQuery<GetAllRecipeQuery, GetAllRecipeQueryVariables>(
    GetAllRecipeDocument,
    baseOptions
  );
}
export type GetAllRecipeQueryHookResult = ReturnType<
  typeof useGetAllRecipeQuery
>;
export type GetAllRecipeLazyQueryHookResult = ReturnType<
  typeof useGetAllRecipeLazyQuery
>;
export type GetAllRecipeQueryResult = Apollo.QueryResult<
  GetAllRecipeQuery,
  GetAllRecipeQueryVariables
>;
export const GetProfileDocument = gql`
  query GetProfile($uid: String!) {
    user(where: { id: { _eq: $uid } }) {
      email
      name
      img
    }
  }
`;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useGetProfileQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProfileQuery,
    GetProfileQueryVariables
  >
) {
  return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(
    GetProfileDocument,
    baseOptions
  );
}
export function useGetProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProfileQuery,
    GetProfileQueryVariables
  >
) {
  return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(
    GetProfileDocument,
    baseOptions
  );
}
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<
  typeof useGetProfileLazyQuery
>;
export type GetProfileQueryResult = Apollo.QueryResult<
  GetProfileQuery,
  GetProfileQueryVariables
>;
export const GetRecipeDetailsDocument = gql`
  query GetRecipeDetails($id: String!) {
    recipe_by_pk(id: $id) {
      cuisine
      directions
      id
      img
      meal_type
      owner
      title
      total_time
      yields
      recipe_ingredients_list {
        name
        quantity_denominator
        quantity_numerator
        unit
        formatted_text
      }
    }
  }
`;

/**
 * __useGetRecipeDetailsQuery__
 *
 * To run a query within a React component, call `useGetRecipeDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecipeDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecipeDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRecipeDetailsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetRecipeDetailsQuery,
    GetRecipeDetailsQueryVariables
  >
) {
  return Apollo.useQuery<GetRecipeDetailsQuery, GetRecipeDetailsQueryVariables>(
    GetRecipeDetailsDocument,
    baseOptions
  );
}
export function useGetRecipeDetailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRecipeDetailsQuery,
    GetRecipeDetailsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    GetRecipeDetailsQuery,
    GetRecipeDetailsQueryVariables
  >(GetRecipeDetailsDocument, baseOptions);
}
export type GetRecipeDetailsQueryHookResult = ReturnType<
  typeof useGetRecipeDetailsQuery
>;
export type GetRecipeDetailsLazyQueryHookResult = ReturnType<
  typeof useGetRecipeDetailsLazyQuery
>;
export type GetRecipeDetailsQueryResult = Apollo.QueryResult<
  GetRecipeDetailsQuery,
  GetRecipeDetailsQueryVariables
>;
export const ParseIngredientsDocument = gql`
  query ParseIngredients($ingredientsArray: [String]) {
    parseIngredients(ingredients: $ingredientsArray) {
      name
    }
  }
`;

/**
 * __useParseIngredientsQuery__
 *
 * To run a query within a React component, call `useParseIngredientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useParseIngredientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useParseIngredientsQuery({
 *   variables: {
 *      ingredientsArray: // value for 'ingredientsArray'
 *   },
 * });
 */
export function useParseIngredientsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ParseIngredientsQuery,
    ParseIngredientsQueryVariables
  >
) {
  return Apollo.useQuery<ParseIngredientsQuery, ParseIngredientsQueryVariables>(
    ParseIngredientsDocument,
    baseOptions
  );
}
export function useParseIngredientsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ParseIngredientsQuery,
    ParseIngredientsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    ParseIngredientsQuery,
    ParseIngredientsQueryVariables
  >(ParseIngredientsDocument, baseOptions);
}
export type ParseIngredientsQueryHookResult = ReturnType<
  typeof useParseIngredientsQuery
>;
export type ParseIngredientsLazyQueryHookResult = ReturnType<
  typeof useParseIngredientsLazyQuery
>;
export type ParseIngredientsQueryResult = Apollo.QueryResult<
  ParseIngredientsQuery,
  ParseIngredientsQueryVariables
>;
