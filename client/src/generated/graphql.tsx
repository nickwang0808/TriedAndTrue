import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  json: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type ImportedRecipe = {
  __typename?: 'ImportedRecipe';
  id: Scalars['String'];
  recipe?: Maybe<Recipe>;
};

export type InsertRecipeOneOutput = {
  __typename?: 'InsertRecipeOneOutput';
  id: Scalars['String'];
  recipe?: Maybe<Recipe>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type ParsedIngredients = {
  __typename?: 'ParsedIngredients';
  name: Scalars['String'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type UpdatedRecipeIngredients = {
  __typename?: 'UpdatedRecipeIngredients';
  id: Scalars['String'];
  newIngredients?: Maybe<Array<Maybe<Recipe_Ingredients>>>;
};


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

export type InsertRecipeOneDerivedInput = {
  cuisine?: Maybe<Scalars['String']>;
  directions?: Maybe<Scalars['json']>;
  img?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Array<Scalars['String']>>;
  meal_type?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  total_time?: Maybe<Scalars['Int']>;
  yields?: Maybe<Scalars['String']>;
};


/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};

/**
 * detach the item from recipe once record is written, json structure for the recipe should be array [{img, title}]
 * 
 * 
 * columns and relationships of "list"
 */
export type List = {
  __typename?: 'list';
  category?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  date: Scalars['date'];
  id: Scalars['uuid'];
  is_completed: Scalars['Boolean'];
  other?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['String']>;
  recipes?: Maybe<Scalars['json']>;
  title: Scalars['String'];
  unit?: Maybe<Scalars['String']>;
  /** An object relationship */
  user: User;
  user_id: Scalars['String'];
};


/**
 * detach the item from recipe once record is written, json structure for the recipe should be array [{img, title}]
 * 
 * 
 * columns and relationships of "list"
 */
export type ListRecipesArgs = {
  path?: Maybe<Scalars['String']>;
};

/** input type for inserting array relation for remote table "list" */
export type List_Arr_Rel_Insert_Input = {
  data: Array<List_Insert_Input>;
  on_conflict?: Maybe<List_On_Conflict>;
};

/** Boolean expression to filter rows from the table "list". All fields are combined with a logical 'AND'. */
export type List_Bool_Exp = {
  _and?: Maybe<Array<Maybe<List_Bool_Exp>>>;
  _not?: Maybe<List_Bool_Exp>;
  _or?: Maybe<Array<Maybe<List_Bool_Exp>>>;
  category?: Maybe<String_Comparison_Exp>;
  comment?: Maybe<String_Comparison_Exp>;
  date?: Maybe<Date_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_completed?: Maybe<Boolean_Comparison_Exp>;
  other?: Maybe<String_Comparison_Exp>;
  quantity?: Maybe<String_Comparison_Exp>;
  recipes?: Maybe<Json_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  unit?: Maybe<String_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "list" */
export enum List_Constraint {
  /** unique or primary key constraint */
  ListIdKey = 'list_id_key',
  /** unique or primary key constraint */
  ListPkey = 'list_pkey'
}

/** input type for inserting data into table "list" */
export type List_Insert_Input = {
  category?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['date']>;
  is_completed?: Maybe<Scalars['Boolean']>;
  other?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['String']>;
  recipes?: Maybe<Scalars['json']>;
  title?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "list" */
export type List_Mutation_Response = {
  __typename?: 'list_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<List>;
};

/** input type for inserting object relation for remote table "list" */
export type List_Obj_Rel_Insert_Input = {
  data: List_Insert_Input;
  on_conflict?: Maybe<List_On_Conflict>;
};

/** on conflict condition type for table "list" */
export type List_On_Conflict = {
  constraint: List_Constraint;
  update_columns: Array<List_Update_Column>;
  where?: Maybe<List_Bool_Exp>;
};

/** ordering options when selecting data from "list" */
export type List_Order_By = {
  category?: Maybe<Order_By>;
  comment?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_completed?: Maybe<Order_By>;
  other?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  recipes?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  unit?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "list" */
export type List_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "list" */
export enum List_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Comment = 'comment',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  IsCompleted = 'is_completed',
  /** column name */
  Other = 'other',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Recipes = 'recipes',
  /** column name */
  Title = 'title',
  /** column name */
  Unit = 'unit',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "list" */
export type List_Set_Input = {
  category?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['date']>;
  is_completed?: Maybe<Scalars['Boolean']>;
  other?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['String']>;
  recipes?: Maybe<Scalars['json']>;
  title?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "list" */
export enum List_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Comment = 'comment',
  /** column name */
  Date = 'date',
  /** column name */
  IsCompleted = 'is_completed',
  /** column name */
  Other = 'other',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Recipes = 'recipes',
  /** column name */
  Title = 'title',
  /** column name */
  Unit = 'unit',
  /** column name */
  UserId = 'user_id'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "list" */
  delete_list?: Maybe<List_Mutation_Response>;
  /** delete single row from the table: "list" */
  delete_list_by_pk?: Maybe<List>;
  /** delete data from the table: "planner" */
  delete_planner?: Maybe<Planner_Mutation_Response>;
  /** delete single row from the table: "planner" */
  delete_planner_by_pk?: Maybe<Planner>;
  /** delete data from the table: "recipe" */
  delete_recipe?: Maybe<Recipe_Mutation_Response>;
  /** delete single row from the table: "recipe" */
  delete_recipe_by_pk?: Maybe<Recipe>;
  /** delete data from the table: "recipe_ingredients" */
  delete_recipe_ingredients?: Maybe<Recipe_Ingredients_Mutation_Response>;
  /** delete single row from the table: "recipe_ingredients" */
  delete_recipe_ingredients_by_pk?: Maybe<Recipe_Ingredients>;
  /** perform the action: "importRecipe" */
  importRecipe: ImportedRecipe;
  /** perform the action: "insertRecipeOneDerived" */
  insertRecipeOneDerived: InsertRecipeOneOutput;
  /** insert data into the table: "list" */
  insert_list?: Maybe<List_Mutation_Response>;
  /** insert a single row into the table: "list" */
  insert_list_one?: Maybe<List>;
  /** insert data into the table: "planner" */
  insert_planner?: Maybe<Planner_Mutation_Response>;
  /** insert a single row into the table: "planner" */
  insert_planner_one?: Maybe<Planner>;
  /** insert data into the table: "recipe" */
  insert_recipe?: Maybe<Recipe_Mutation_Response>;
  /** insert data into the table: "recipe_ingredients" */
  insert_recipe_ingredients?: Maybe<Recipe_Ingredients_Mutation_Response>;
  /** insert a single row into the table: "recipe_ingredients" */
  insert_recipe_ingredients_one?: Maybe<Recipe_Ingredients>;
  /** insert a single row into the table: "recipe" */
  insert_recipe_one?: Maybe<Recipe>;
  /** perform the action: "overRideIngredients" */
  overRideIngredients: Array<Maybe<UpdatedRecipeIngredients>>;
  /** update data of the table: "list" */
  update_list?: Maybe<List_Mutation_Response>;
  /** update single row of the table: "list" */
  update_list_by_pk?: Maybe<List>;
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
export type Mutation_RootDelete_ListArgs = {
  where: List_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_List_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PlannerArgs = {
  where: Planner_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Planner_By_PkArgs = {
  date: Scalars['date'];
  index: Scalars['Int'];
  recipe_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_RecipeArgs = {
  where: Recipe_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Recipe_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Recipe_IngredientsArgs = {
  where: Recipe_Ingredients_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Recipe_Ingredients_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootImportRecipeArgs = {
  url: Scalars['String'];
  wildMode?: Maybe<Scalars['Boolean']>;
};


/** mutation root */
export type Mutation_RootInsertRecipeOneDerivedArgs = {
  object: InsertRecipeOneDerivedInput;
};


/** mutation root */
export type Mutation_RootInsert_ListArgs = {
  objects: Array<List_Insert_Input>;
  on_conflict?: Maybe<List_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_List_OneArgs = {
  object: List_Insert_Input;
  on_conflict?: Maybe<List_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PlannerArgs = {
  objects: Array<Planner_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Planner_OneArgs = {
  object: Planner_Insert_Input;
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
export type Mutation_RootOverRideIngredientsArgs = {
  ingredientsStrings: Array<Maybe<Scalars['String']>>;
  recipe_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootUpdate_ListArgs = {
  _set?: Maybe<List_Set_Input>;
  where: List_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_List_By_PkArgs = {
  _set?: Maybe<List_Set_Input>;
  pk_columns: List_Pk_Columns_Input;
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
  _set?: Maybe<Recipe_Ingredients_Set_Input>;
  where: Recipe_Ingredients_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Recipe_Ingredients_By_PkArgs = {
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
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "planner" */
export type Planner = {
  __typename?: 'planner';
  date: Scalars['date'];
  index: Scalars['Int'];
  /** An object relationship */
  recipe: Recipe;
  recipe_id: Scalars['String'];
  /** An object relationship */
  user: User;
  user_id: Scalars['String'];
};

/** input type for inserting array relation for remote table "planner" */
export type Planner_Arr_Rel_Insert_Input = {
  data: Array<Planner_Insert_Input>;
};

/** Boolean expression to filter rows from the table "planner". All fields are combined with a logical 'AND'. */
export type Planner_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Planner_Bool_Exp>>>;
  _not?: Maybe<Planner_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Planner_Bool_Exp>>>;
  date?: Maybe<Date_Comparison_Exp>;
  index?: Maybe<Int_Comparison_Exp>;
  recipe?: Maybe<Recipe_Bool_Exp>;
  recipe_id?: Maybe<String_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "planner" */
export type Planner_Insert_Input = {
  date?: Maybe<Scalars['date']>;
  index?: Maybe<Scalars['Int']>;
  recipe?: Maybe<Recipe_Obj_Rel_Insert_Input>;
  recipe_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "planner" */
export type Planner_Mutation_Response = {
  __typename?: 'planner_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Planner>;
};

/** input type for inserting object relation for remote table "planner" */
export type Planner_Obj_Rel_Insert_Input = {
  data: Planner_Insert_Input;
};

/** ordering options when selecting data from "planner" */
export type Planner_Order_By = {
  date?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  recipe?: Maybe<Recipe_Order_By>;
  recipe_id?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "planner" */
export type Planner_Pk_Columns_Input = {
  date: Scalars['date'];
  index: Scalars['Int'];
  recipe_id: Scalars['String'];
};

/** select columns of table "planner" */
export enum Planner_Select_Column {
  /** column name */
  Date = 'date',
  /** column name */
  Index = 'index',
  /** column name */
  RecipeId = 'recipe_id',
  /** column name */
  UserId = 'user_id'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "list" */
  list: Array<List>;
  /** fetch data from the table: "list" using primary key columns */
  list_by_pk?: Maybe<List>;
  /** perform the action: "parseIngredients" */
  parseIngredients: Array<ParsedIngredients>;
  /** fetch data from the table: "planner" */
  planner: Array<Planner>;
  /** fetch data from the table: "planner" using primary key columns */
  planner_by_pk?: Maybe<Planner>;
  /** fetch data from the table: "recipe" */
  recipe: Array<Recipe>;
  /** fetch data from the table: "recipe" using primary key columns */
  recipe_by_pk?: Maybe<Recipe>;
  /** fetch data from the table: "recipe_ingredients" */
  recipe_ingredients: Array<Recipe_Ingredients>;
  /** fetch data from the table: "recipe_ingredients" using primary key columns */
  recipe_ingredients_by_pk?: Maybe<Recipe_Ingredients>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


/** query root */
export type Query_RootListArgs = {
  distinct_on?: Maybe<Array<List_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<List_Order_By>>;
  where?: Maybe<List_Bool_Exp>;
};


/** query root */
export type Query_RootList_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootParseIngredientsArgs = {
  ingredientsToParse?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** query root */
export type Query_RootPlannerArgs = {
  distinct_on?: Maybe<Array<Planner_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Planner_Order_By>>;
  where?: Maybe<Planner_Bool_Exp>;
};


/** query root */
export type Query_RootPlanner_By_PkArgs = {
  date: Scalars['date'];
  index: Scalars['Int'];
  recipe_id: Scalars['String'];
};


/** query root */
export type Query_RootRecipeArgs = {
  distinct_on?: Maybe<Array<Recipe_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recipe_Order_By>>;
  where?: Maybe<Recipe_Bool_Exp>;
};


/** query root */
export type Query_RootRecipe_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootRecipe_IngredientsArgs = {
  distinct_on?: Maybe<Array<Recipe_Ingredients_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recipe_Ingredients_Order_By>>;
  where?: Maybe<Recipe_Ingredients_Bool_Exp>;
};


/** query root */
export type Query_RootRecipe_Ingredients_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars['String'];
};

/** columns and relationships of "recipe" */
export type Recipe = {
  __typename?: 'recipe';
  created_at: Scalars['timestamptz'];
  cuisine?: Maybe<Scalars['String']>;
  directions?: Maybe<Scalars['json']>;
  id: Scalars['String'];
  img?: Maybe<Scalars['String']>;
  meal_type?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  /** An array relationship */
  planners: Array<Planner>;
  /** An array relationship */
  recipe_ingredients_list: Array<Recipe_Ingredients>;
  title: Scalars['String'];
  total_time?: Maybe<Scalars['Int']>;
  /** An object relationship */
  user: User;
  yields?: Maybe<Scalars['String']>;
};


/** columns and relationships of "recipe" */
export type RecipeDirectionsArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "recipe" */
export type RecipePlannersArgs = {
  distinct_on?: Maybe<Array<Planner_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Planner_Order_By>>;
  where?: Maybe<Planner_Bool_Exp>;
};


/** columns and relationships of "recipe" */
export type RecipeRecipe_Ingredients_ListArgs = {
  distinct_on?: Maybe<Array<Recipe_Ingredients_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recipe_Ingredients_Order_By>>;
  where?: Maybe<Recipe_Ingredients_Bool_Exp>;
};

/** input type for inserting array relation for remote table "recipe" */
export type Recipe_Arr_Rel_Insert_Input = {
  data: Array<Recipe_Insert_Input>;
  on_conflict?: Maybe<Recipe_On_Conflict>;
};

/** Boolean expression to filter rows from the table "recipe". All fields are combined with a logical 'AND'. */
export type Recipe_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Recipe_Bool_Exp>>>;
  _not?: Maybe<Recipe_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Recipe_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  cuisine?: Maybe<String_Comparison_Exp>;
  directions?: Maybe<Json_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  img?: Maybe<String_Comparison_Exp>;
  meal_type?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<String_Comparison_Exp>;
  planners?: Maybe<Planner_Bool_Exp>;
  recipe_ingredients_list?: Maybe<Recipe_Ingredients_Bool_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  total_time?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  yields?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "recipe" */
export enum Recipe_Constraint {
  /** unique or primary key constraint */
  RecipeIdKey = 'recipe_id_key',
  /** unique or primary key constraint */
  RecipePkey = 'recipe_pkey'
}

/** input type for incrementing integer column in table "recipe" */
export type Recipe_Inc_Input = {
  total_time?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "recipe_ingredients" */
export type Recipe_Ingredients = {
  __typename?: 'recipe_ingredients';
  comment?: Maybe<Scalars['String']>;
  formatted_text?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  index: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  other?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['String']>;
  raw_text: Scalars['String'];
  /** An object relationship */
  recipe: Recipe;
  recipe_id: Scalars['String'];
  unit?: Maybe<Scalars['String']>;
};

/** input type for inserting array relation for remote table "recipe_ingredients" */
export type Recipe_Ingredients_Arr_Rel_Insert_Input = {
  data: Array<Recipe_Ingredients_Insert_Input>;
  on_conflict?: Maybe<Recipe_Ingredients_On_Conflict>;
};

/** Boolean expression to filter rows from the table "recipe_ingredients". All fields are combined with a logical 'AND'. */
export type Recipe_Ingredients_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Recipe_Ingredients_Bool_Exp>>>;
  _not?: Maybe<Recipe_Ingredients_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Recipe_Ingredients_Bool_Exp>>>;
  comment?: Maybe<String_Comparison_Exp>;
  formatted_text?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  index?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  other?: Maybe<String_Comparison_Exp>;
  quantity?: Maybe<String_Comparison_Exp>;
  raw_text?: Maybe<String_Comparison_Exp>;
  recipe?: Maybe<Recipe_Bool_Exp>;
  recipe_id?: Maybe<String_Comparison_Exp>;
  unit?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "recipe_ingredients" */
export enum Recipe_Ingredients_Constraint {
  /** unique or primary key constraint */
  RecipeIngredientsIdKey = 'recipe_ingredients_id_key',
  /** unique or primary key constraint */
  RecipeIngredientsPkey = 'recipe_ingredients_pkey'
}

/** input type for inserting data into table "recipe_ingredients" */
export type Recipe_Ingredients_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  formatted_text?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  other?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['String']>;
  raw_text?: Maybe<Scalars['String']>;
  recipe?: Maybe<Recipe_Obj_Rel_Insert_Input>;
  recipe_id?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "recipe_ingredients" */
export type Recipe_Ingredients_Mutation_Response = {
  __typename?: 'recipe_ingredients_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
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
  comment?: Maybe<Order_By>;
  formatted_text?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  other?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  raw_text?: Maybe<Order_By>;
  recipe?: Maybe<Recipe_Order_By>;
  recipe_id?: Maybe<Order_By>;
  unit?: Maybe<Order_By>;
};

/** primary key columns input for table: "recipe_ingredients" */
export type Recipe_Ingredients_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "recipe_ingredients" */
export enum Recipe_Ingredients_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  FormattedText = 'formatted_text',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  Name = 'name',
  /** column name */
  Other = 'other',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  RawText = 'raw_text',
  /** column name */
  RecipeId = 'recipe_id',
  /** column name */
  Unit = 'unit'
}

/** input type for updating data in table "recipe_ingredients" */
export type Recipe_Ingredients_Set_Input = {
  raw_text?: Maybe<Scalars['String']>;
};

/** update columns of table "recipe_ingredients" */
export enum Recipe_Ingredients_Update_Column {
  /** column name */
  RawText = 'raw_text'
}

/** input type for inserting data into table "recipe" */
export type Recipe_Insert_Input = {
  cuisine?: Maybe<Scalars['String']>;
  directions?: Maybe<Scalars['json']>;
  img?: Maybe<Scalars['String']>;
  meal_type?: Maybe<Scalars['String']>;
  planners?: Maybe<Planner_Arr_Rel_Insert_Input>;
  recipe_ingredients_list?: Maybe<Recipe_Ingredients_Arr_Rel_Insert_Input>;
  title?: Maybe<Scalars['String']>;
  total_time?: Maybe<Scalars['Int']>;
  yields?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "recipe" */
export type Recipe_Mutation_Response = {
  __typename?: 'recipe_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
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
  created_at?: Maybe<Order_By>;
  cuisine?: Maybe<Order_By>;
  directions?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  img?: Maybe<Order_By>;
  meal_type?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  total_time?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  yields?: Maybe<Order_By>;
};

/** primary key columns input for table: "recipe" */
export type Recipe_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "recipe" */
export enum Recipe_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Cuisine = 'cuisine',
  /** column name */
  Directions = 'directions',
  /** column name */
  Id = 'id',
  /** column name */
  Img = 'img',
  /** column name */
  MealType = 'meal_type',
  /** column name */
  Owner = 'owner',
  /** column name */
  Title = 'title',
  /** column name */
  TotalTime = 'total_time',
  /** column name */
  Yields = 'yields'
}

/** input type for updating data in table "recipe" */
export type Recipe_Set_Input = {
  cuisine?: Maybe<Scalars['String']>;
  directions?: Maybe<Scalars['json']>;
  img?: Maybe<Scalars['String']>;
  meal_type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  total_time?: Maybe<Scalars['Int']>;
  yields?: Maybe<Scalars['String']>;
};

/** update columns of table "recipe" */
export enum Recipe_Update_Column {
  /** column name */
  Cuisine = 'cuisine',
  /** column name */
  Directions = 'directions',
  /** column name */
  Img = 'img',
  /** column name */
  MealType = 'meal_type',
  /** column name */
  Title = 'title',
  /** column name */
  TotalTime = 'total_time',
  /** column name */
  Yields = 'yields'
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "list" */
  list: Array<List>;
  /** fetch data from the table: "list" using primary key columns */
  list_by_pk?: Maybe<List>;
  /** perform the action: "parseIngredients" */
  parseIngredients: Array<ParsedIngredients>;
  /** fetch data from the table: "planner" */
  planner: Array<Planner>;
  /** fetch data from the table: "planner" using primary key columns */
  planner_by_pk?: Maybe<Planner>;
  /** fetch data from the table: "recipe" */
  recipe: Array<Recipe>;
  /** fetch data from the table: "recipe" using primary key columns */
  recipe_by_pk?: Maybe<Recipe>;
  /** fetch data from the table: "recipe_ingredients" */
  recipe_ingredients: Array<Recipe_Ingredients>;
  /** fetch data from the table: "recipe_ingredients" using primary key columns */
  recipe_ingredients_by_pk?: Maybe<Recipe_Ingredients>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


/** subscription root */
export type Subscription_RootListArgs = {
  distinct_on?: Maybe<Array<List_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<List_Order_By>>;
  where?: Maybe<List_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootList_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootParseIngredientsArgs = {
  ingredientsToParse?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** subscription root */
export type Subscription_RootPlannerArgs = {
  distinct_on?: Maybe<Array<Planner_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Planner_Order_By>>;
  where?: Maybe<Planner_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlanner_By_PkArgs = {
  date: Scalars['date'];
  index: Scalars['Int'];
  recipe_id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootRecipeArgs = {
  distinct_on?: Maybe<Array<Recipe_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recipe_Order_By>>;
  where?: Maybe<Recipe_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRecipe_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootRecipe_IngredientsArgs = {
  distinct_on?: Maybe<Array<Recipe_Ingredients_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recipe_Ingredients_Order_By>>;
  where?: Maybe<Recipe_Ingredients_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRecipe_Ingredients_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['String'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  email: Scalars['String'];
  id: Scalars['String'];
  img?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** An array relationship */
  planners: Array<Planner>;
  /** An array relationship */
  recipes_list: Array<Recipe>;
};


/** columns and relationships of "user" */
export type UserPlannersArgs = {
  distinct_on?: Maybe<Array<Planner_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Planner_Order_By>>;
  where?: Maybe<Planner_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserRecipes_ListArgs = {
  distinct_on?: Maybe<Array<Recipe_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recipe_Order_By>>;
  where?: Maybe<Recipe_Bool_Exp>;
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
  planners?: Maybe<Planner_Bool_Exp>;
  recipes_list?: Maybe<Recipe_Bool_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
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
};

/** primary key columns input for table: "user" */
export type User_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Img = 'img',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Name = 'name'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type UpdateRecipeDetailMutationVariables = Exact<{
  id: Scalars['String'];
  _set: Recipe_Set_Input;
  ingredientsStrings: Array<Scalars['String']> | Scalars['String'];
}>;


export type UpdateRecipeDetailMutation = (
  { __typename?: 'mutation_root' }
  & { update_recipe_by_pk?: Maybe<(
    { __typename?: 'recipe' }
    & Pick<Recipe, 'cuisine' | 'directions' | 'id' | 'img' | 'meal_type' | 'owner' | 'title' | 'total_time' | 'yields'>
  )>, overRideIngredients: Array<Maybe<(
    { __typename?: 'UpdatedRecipeIngredients' }
    & Pick<UpdatedRecipeIngredients, 'id'>
  )>> }
);

export type DeleteRecipeFromPlannerMutationVariables = Exact<{
  index: Scalars['Int'];
  date: Scalars['date'];
  recipe_id: Scalars['String'];
}>;


export type DeleteRecipeFromPlannerMutation = (
  { __typename?: 'mutation_root' }
  & { delete_planner_by_pk?: Maybe<(
    { __typename?: 'planner' }
    & { recipe: (
      { __typename?: 'recipe' }
      & Pick<Recipe, 'id'>
    ) }
  )> }
);

export type DeleteRecipeOneMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteRecipeOneMutation = (
  { __typename?: 'mutation_root' }
  & { delete_recipe_by_pk?: Maybe<(
    { __typename?: 'recipe' }
    & Pick<Recipe, 'id'>
  )> }
);

export type ImportRecipeMutationVariables = Exact<{
  url: Scalars['String'];
  wildMode?: Maybe<Scalars['Boolean']>;
}>;


export type ImportRecipeMutation = (
  { __typename?: 'mutation_root' }
  & { importRecipe: (
    { __typename?: 'ImportedRecipe' }
    & { recipe?: Maybe<(
      { __typename?: 'recipe' }
      & Pick<Recipe, 'id' | 'img' | 'total_time' | 'title'>
    )> }
  ) }
);

export type InsertIngredientToListMutationVariables = Exact<{
  objects: Array<List_Insert_Input> | List_Insert_Input;
}>;


export type InsertIngredientToListMutation = (
  { __typename?: 'mutation_root' }
  & { insert_list?: Maybe<(
    { __typename?: 'list_mutation_response' }
    & Pick<List_Mutation_Response, 'affected_rows'>
  )> }
);

export type InsertRecipeMutationVariables = Exact<{
  object: InsertRecipeOneDerivedInput;
}>;


export type InsertRecipeMutation = (
  { __typename?: 'mutation_root' }
  & { insertRecipeOneDerived: (
    { __typename?: 'InsertRecipeOneOutput' }
    & { recipe?: Maybe<(
      { __typename?: 'recipe' }
      & Pick<Recipe, 'id' | 'title' | 'img' | 'total_time'>
    )> }
  ) }
);

export type AddRecipesToPlannerMutationVariables = Exact<{
  objects: Array<Planner_Insert_Input> | Planner_Insert_Input;
}>;


export type AddRecipesToPlannerMutation = (
  { __typename?: 'mutation_root' }
  & { insert_planner?: Maybe<(
    { __typename?: 'planner_mutation_response' }
    & { returning: Array<(
      { __typename?: 'planner' }
      & Pick<Planner, 'date' | 'index'>
      & { recipe: (
        { __typename?: 'recipe' }
        & Pick<Recipe, 'id'>
      ) }
    )> }
  )> }
);

export type OverWritePlannerByDatesMutationVariables = Exact<{
  dates: Array<Scalars['date']> | Scalars['date'];
  objects: Array<Planner_Insert_Input> | Planner_Insert_Input;
}>;


export type OverWritePlannerByDatesMutation = (
  { __typename?: 'mutation_root' }
  & { delete_planner?: Maybe<(
    { __typename?: 'planner_mutation_response' }
    & Pick<Planner_Mutation_Response, 'affected_rows'>
  )>, insert_planner?: Maybe<(
    { __typename?: 'planner_mutation_response' }
    & { returning: Array<(
      { __typename?: 'planner' }
      & Pick<Planner, 'date' | 'index'>
      & { recipe: (
        { __typename?: 'recipe' }
        & Pick<Recipe, 'id'>
      ) }
    )> }
  )> }
);

export type GetProfileQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetProfileQuery = (
  { __typename?: 'query_root' }
  & { user: Array<(
    { __typename?: 'user' }
    & Pick<User, 'email' | 'name' | 'img'>
  )> }
);

export type ParseIngredientsQueryVariables = Exact<{
  ingredientsArray?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
}>;


export type ParseIngredientsQuery = (
  { __typename?: 'query_root' }
  & { parseIngredients: Array<(
    { __typename?: 'ParsedIngredients' }
    & Pick<ParsedIngredients, 'name'>
  )> }
);

export type GetAllIngredientsInweekQueryVariables = Exact<{
  _gte: Scalars['date'];
  _lte: Scalars['date'];
}>;


export type GetAllIngredientsInweekQuery = (
  { __typename?: 'query_root' }
  & { planner: Array<(
    { __typename?: 'planner' }
    & Pick<Planner, 'date' | 'index'>
    & { recipe: (
      { __typename?: 'recipe' }
      & Pick<Recipe, 'id' | 'title'>
      & { recipe_ingredients_list: Array<(
        { __typename?: 'recipe_ingredients' }
        & Pick<Recipe_Ingredients, 'id' | 'comment' | 'quantity' | 'unit' | 'name'>
      )> }
    ) }
  )> }
);

export type GetAllRecipeQueryVariables = Exact<{
  _like?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetAllRecipeQuery = (
  { __typename?: 'query_root' }
  & { recipe: Array<(
    { __typename?: 'recipe' }
    & Pick<Recipe, 'id' | 'img' | 'title' | 'total_time'>
  )> }
);

export type GetPlannerRecipeByDateQueryVariables = Exact<{
  date?: Maybe<Scalars['date']>;
}>;


export type GetPlannerRecipeByDateQuery = (
  { __typename?: 'query_root' }
  & { planner: Array<(
    { __typename?: 'planner' }
    & Pick<Planner, 'date' | 'index'>
    & { recipe: (
      { __typename?: 'recipe' }
      & Pick<Recipe, 'id' | 'img' | 'title'>
    ) }
  )> }
);

export type GetRecipeDetailsQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetRecipeDetailsQuery = (
  { __typename?: 'query_root' }
  & { recipe_by_pk?: Maybe<(
    { __typename?: 'recipe' }
    & Pick<Recipe, 'cuisine' | 'directions' | 'id' | 'img' | 'meal_type' | 'owner' | 'title' | 'total_time' | 'yields'>
    & { recipe_ingredients_list: Array<(
      { __typename?: 'recipe_ingredients' }
      & Pick<Recipe_Ingredients, 'name' | 'quantity' | 'unit' | 'formatted_text'>
    )> }
  )> }
);


export const UpdateRecipeDetailDocument = gql`
    mutation UpdateRecipeDetail($id: String!, $_set: recipe_set_input!, $ingredientsStrings: [String!]!) {
  update_recipe_by_pk(pk_columns: {id: $id}, _set: $_set) {
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
  overRideIngredients(ingredientsStrings: $ingredientsStrings, recipe_id: $id) {
    id
  }
}
    `;
export type UpdateRecipeDetailMutationFn = Apollo.MutationFunction<UpdateRecipeDetailMutation, UpdateRecipeDetailMutationVariables>;
export type UpdateRecipeDetailMutationResult = Apollo.MutationResult<UpdateRecipeDetailMutation>;
export type UpdateRecipeDetailMutationOptions = Apollo.BaseMutationOptions<UpdateRecipeDetailMutation, UpdateRecipeDetailMutationVariables>;
export const DeleteRecipeFromPlannerDocument = gql`
    mutation DeleteRecipeFromPlanner($index: Int!, $date: date!, $recipe_id: String!) {
  delete_planner_by_pk(date: $date, recipe_id: $recipe_id, index: $index) {
    recipe {
      id
    }
  }
}
    `;
export type DeleteRecipeFromPlannerMutationFn = Apollo.MutationFunction<DeleteRecipeFromPlannerMutation, DeleteRecipeFromPlannerMutationVariables>;
export type DeleteRecipeFromPlannerMutationResult = Apollo.MutationResult<DeleteRecipeFromPlannerMutation>;
export type DeleteRecipeFromPlannerMutationOptions = Apollo.BaseMutationOptions<DeleteRecipeFromPlannerMutation, DeleteRecipeFromPlannerMutationVariables>;
export const DeleteRecipeOneDocument = gql`
    mutation DeleteRecipeOne($id: String!) {
  delete_recipe_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteRecipeOneMutationFn = Apollo.MutationFunction<DeleteRecipeOneMutation, DeleteRecipeOneMutationVariables>;
export type DeleteRecipeOneMutationResult = Apollo.MutationResult<DeleteRecipeOneMutation>;
export type DeleteRecipeOneMutationOptions = Apollo.BaseMutationOptions<DeleteRecipeOneMutation, DeleteRecipeOneMutationVariables>;
export const ImportRecipeDocument = gql`
    mutation ImportRecipe($url: String!, $wildMode: Boolean = false) {
  importRecipe(url: $url, wildMode: $wildMode) {
    recipe {
      id
      img
      total_time
      title
    }
  }
}
    `;
export type ImportRecipeMutationFn = Apollo.MutationFunction<ImportRecipeMutation, ImportRecipeMutationVariables>;
export type ImportRecipeMutationResult = Apollo.MutationResult<ImportRecipeMutation>;
export type ImportRecipeMutationOptions = Apollo.BaseMutationOptions<ImportRecipeMutation, ImportRecipeMutationVariables>;
export const InsertIngredientToListDocument = gql`
    mutation InsertIngredientToList($objects: [list_insert_input!]!) {
  insert_list(objects: $objects) {
    affected_rows
  }
}
    `;
export type InsertIngredientToListMutationFn = Apollo.MutationFunction<InsertIngredientToListMutation, InsertIngredientToListMutationVariables>;
export type InsertIngredientToListMutationResult = Apollo.MutationResult<InsertIngredientToListMutation>;
export type InsertIngredientToListMutationOptions = Apollo.BaseMutationOptions<InsertIngredientToListMutation, InsertIngredientToListMutationVariables>;
export const InsertRecipeDocument = gql`
    mutation InsertRecipe($object: insertRecipeOneDerivedInput!) {
  insertRecipeOneDerived(object: $object) {
    recipe {
      id
      title
      img
      total_time
    }
  }
}
    `;
export type InsertRecipeMutationFn = Apollo.MutationFunction<InsertRecipeMutation, InsertRecipeMutationVariables>;
export type InsertRecipeMutationResult = Apollo.MutationResult<InsertRecipeMutation>;
export type InsertRecipeMutationOptions = Apollo.BaseMutationOptions<InsertRecipeMutation, InsertRecipeMutationVariables>;
export const AddRecipesToPlannerDocument = gql`
    mutation addRecipesToPlanner($objects: [planner_insert_input!]!) {
  insert_planner(objects: $objects) {
    returning {
      date
      index
      recipe {
        id
      }
    }
  }
}
    `;
export type AddRecipesToPlannerMutationFn = Apollo.MutationFunction<AddRecipesToPlannerMutation, AddRecipesToPlannerMutationVariables>;
export type AddRecipesToPlannerMutationResult = Apollo.MutationResult<AddRecipesToPlannerMutation>;
export type AddRecipesToPlannerMutationOptions = Apollo.BaseMutationOptions<AddRecipesToPlannerMutation, AddRecipesToPlannerMutationVariables>;
export const OverWritePlannerByDatesDocument = gql`
    mutation OverWritePlannerByDates($dates: [date!]!, $objects: [planner_insert_input!]!) {
  delete_planner(where: {date: {_in: $dates}}) {
    affected_rows
  }
  insert_planner(objects: $objects) {
    returning {
      date
      index
      recipe {
        id
      }
    }
  }
}
    `;
export type OverWritePlannerByDatesMutationFn = Apollo.MutationFunction<OverWritePlannerByDatesMutation, OverWritePlannerByDatesMutationVariables>;
export type OverWritePlannerByDatesMutationResult = Apollo.MutationResult<OverWritePlannerByDatesMutation>;
export type OverWritePlannerByDatesMutationOptions = Apollo.BaseMutationOptions<OverWritePlannerByDatesMutation, OverWritePlannerByDatesMutationVariables>;
export const GetProfileDocument = gql`
    query GetProfile($uid: String!) {
  user(where: {id: {_eq: $uid}}) {
    email
    name
    img
  }
}
    `;
export type GetProfileQueryResult = Apollo.QueryResult<GetProfileQuery, GetProfileQueryVariables>;
export const ParseIngredientsDocument = gql`
    query ParseIngredients($ingredientsArray: [String]) {
  parseIngredients(ingredientsToParse: $ingredientsArray) {
    name
  }
}
    `;
export type ParseIngredientsQueryResult = Apollo.QueryResult<ParseIngredientsQuery, ParseIngredientsQueryVariables>;
export const GetAllIngredientsInweekDocument = gql`
    query GetAllIngredientsInweek($_gte: date!, $_lte: date!) {
  planner(
    where: {_and: [{date: {_gte: $_gte}}, {date: {_lte: $_lte}}]}
    order_by: {date: asc, index: asc}
  ) {
    date
    index
    recipe {
      id
      title
      recipe_ingredients_list {
        id
        comment
        quantity
        unit
        name
      }
    }
  }
}
    `;
export type GetAllIngredientsInweekQueryResult = Apollo.QueryResult<GetAllIngredientsInweekQuery, GetAllIngredientsInweekQueryVariables>;
export const GetAllRecipeDocument = gql`
    query GetAllRecipe($_like: String = "%", $limit: Int = 8, $offset: Int = 0) {
  recipe(
    order_by: {created_at: desc_nulls_last}
    where: {title: {_ilike: $_like}}
    limit: $limit
    offset: $offset
  ) {
    id
    img
    title
    total_time
  }
}
    `;
export type GetAllRecipeQueryResult = Apollo.QueryResult<GetAllRecipeQuery, GetAllRecipeQueryVariables>;
export const GetPlannerRecipeByDateDocument = gql`
    query GetPlannerRecipeByDate($date: date) {
  planner(where: {date: {_eq: $date}}) {
    date
    index
    recipe {
      id
      img
      title
    }
  }
}
    `;
export type GetPlannerRecipeByDateQueryResult = Apollo.QueryResult<GetPlannerRecipeByDateQuery, GetPlannerRecipeByDateQueryVariables>;
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
      quantity
      unit
      formatted_text
    }
  }
}
    `;
export type GetRecipeDetailsQueryResult = Apollo.QueryResult<GetRecipeDetailsQuery, GetRecipeDetailsQueryVariables>;