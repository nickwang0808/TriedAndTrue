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
  float8: any;
  json: any;
  jsonb: any;
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


/** expression to compare columns of type float8. All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>;
  _gt?: Maybe<Scalars['float8']>;
  _gte?: Maybe<Scalars['float8']>;
  _in?: Maybe<Array<Scalars['float8']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['float8']>;
  _lte?: Maybe<Scalars['float8']>;
  _neq?: Maybe<Scalars['float8']>;
  _nin?: Maybe<Array<Scalars['float8']>>;
};

export type GeneratedPlanner = {
  __typename?: 'generatedPlanner';
  id: Scalars['String'];
};

export type InsertIngredientToListInput = {
  date: Scalars['String'];
  ingredients: Array<Scalars['String']>;
  recipe_id: Scalars['String'];
  recipe_index: Scalars['Int'];
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


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "list" */
export type List = {
  __typename?: 'list';
  id: Scalars['uuid'];
  /** An array relationship */
  list_items: Array<List_Items>;
  name: Scalars['String'];
  /** An object relationship */
  user: User;
  user_id: Scalars['String'];
};


/** columns and relationships of "list" */
export type ListList_ItemsArgs = {
  distinct_on?: Maybe<Array<List_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<List_Items_Order_By>>;
  where?: Maybe<List_Items_Bool_Exp>;
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
  id?: Maybe<Uuid_Comparison_Exp>;
  list_items?: Maybe<List_Items_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "list" */
export enum List_Constraint {
  /** unique or primary key constraint */
  ListPkey = 'list_pkey'
}

/** input type for inserting data into table "list" */
export type List_Insert_Input = {
  list_items?: Maybe<List_Items_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
};

/** columns and relationships of "list_items" */
export type List_Items = {
  __typename?: 'list_items';
  category?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  is_completed: Scalars['Boolean'];
  list: Scalars['uuid'];
  name: Scalars['String'];
  other?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['float8']>;
  recipes?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  shopping_list: List;
  unit?: Maybe<Scalars['String']>;
};


/** columns and relationships of "list_items" */
export type List_ItemsRecipesArgs = {
  path?: Maybe<Scalars['String']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type List_Items_Append_Input = {
  recipes?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "list_items" */
export type List_Items_Arr_Rel_Insert_Input = {
  data: Array<List_Items_Insert_Input>;
  on_conflict?: Maybe<List_Items_On_Conflict>;
};

/** Boolean expression to filter rows from the table "list_items". All fields are combined with a logical 'AND'. */
export type List_Items_Bool_Exp = {
  _and?: Maybe<Array<Maybe<List_Items_Bool_Exp>>>;
  _not?: Maybe<List_Items_Bool_Exp>;
  _or?: Maybe<Array<Maybe<List_Items_Bool_Exp>>>;
  category?: Maybe<String_Comparison_Exp>;
  comment?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_completed?: Maybe<Boolean_Comparison_Exp>;
  list?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  other?: Maybe<String_Comparison_Exp>;
  quantity?: Maybe<Float8_Comparison_Exp>;
  recipes?: Maybe<Jsonb_Comparison_Exp>;
  shopping_list?: Maybe<List_Bool_Exp>;
  unit?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "list_items" */
export enum List_Items_Constraint {
  /** unique or primary key constraint */
  ListItemsNameListCommentKey = 'list_items_name_list_comment_key',
  /** unique or primary key constraint */
  ListItemsPkey = 'list_items_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type List_Items_Delete_At_Path_Input = {
  recipes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type List_Items_Delete_Elem_Input = {
  recipes?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type List_Items_Delete_Key_Input = {
  recipes?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "list_items" */
export type List_Items_Inc_Input = {
  quantity?: Maybe<Scalars['float8']>;
};

/** input type for inserting data into table "list_items" */
export type List_Items_Insert_Input = {
  category?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  is_completed?: Maybe<Scalars['Boolean']>;
  list?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  other?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['float8']>;
  recipes?: Maybe<Scalars['jsonb']>;
  shopping_list?: Maybe<List_Obj_Rel_Insert_Input>;
  unit?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "list_items" */
export type List_Items_Mutation_Response = {
  __typename?: 'list_items_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<List_Items>;
};

/** input type for inserting object relation for remote table "list_items" */
export type List_Items_Obj_Rel_Insert_Input = {
  data: List_Items_Insert_Input;
  on_conflict?: Maybe<List_Items_On_Conflict>;
};

/** on conflict condition type for table "list_items" */
export type List_Items_On_Conflict = {
  constraint: List_Items_Constraint;
  update_columns: Array<List_Items_Update_Column>;
  where?: Maybe<List_Items_Bool_Exp>;
};

/** ordering options when selecting data from "list_items" */
export type List_Items_Order_By = {
  category?: Maybe<Order_By>;
  comment?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_completed?: Maybe<Order_By>;
  list?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  other?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  recipes?: Maybe<Order_By>;
  shopping_list?: Maybe<List_Order_By>;
  unit?: Maybe<Order_By>;
};

/** primary key columns input for table: "list_items" */
export type List_Items_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type List_Items_Prepend_Input = {
  recipes?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "list_items" */
export enum List_Items_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Comment = 'comment',
  /** column name */
  Id = 'id',
  /** column name */
  IsCompleted = 'is_completed',
  /** column name */
  List = 'list',
  /** column name */
  Name = 'name',
  /** column name */
  Other = 'other',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Recipes = 'recipes',
  /** column name */
  Unit = 'unit'
}

/** input type for updating data in table "list_items" */
export type List_Items_Set_Input = {
  category?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  is_completed?: Maybe<Scalars['Boolean']>;
  list?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  other?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['float8']>;
  recipes?: Maybe<Scalars['jsonb']>;
  unit?: Maybe<Scalars['String']>;
};

/** update columns of table "list_items" */
export enum List_Items_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Comment = 'comment',
  /** column name */
  IsCompleted = 'is_completed',
  /** column name */
  List = 'list',
  /** column name */
  Name = 'name',
  /** column name */
  Other = 'other',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Recipes = 'recipes',
  /** column name */
  Unit = 'unit'
}

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
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
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
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "list" */
export type List_Set_Input = {
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "list" */
export enum List_Update_Column {
  /** column name */
  Name = 'name'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "list" */
  delete_list?: Maybe<List_Mutation_Response>;
  /** delete single row from the table: "list" */
  delete_list_by_pk?: Maybe<List>;
  /** delete data from the table: "list_items" */
  delete_list_items?: Maybe<List_Items_Mutation_Response>;
  /** delete single row from the table: "list_items" */
  delete_list_items_by_pk?: Maybe<List_Items>;
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
  /** perform the action: "generatePlanner" */
  generatePlanner: Array<GeneratedPlanner>;
  /** perform the action: "importRecipe" */
  importRecipe: ImportedRecipe;
  /** perform the action: "insertIngredientToList" */
  insertIngredientToList: Array<ShoppingListItems>;
  /** perform the action: "insertRecipeOneDerived" */
  insertRecipeOneDerived: InsertRecipeOneOutput;
  /** insert data into the table: "list" */
  insert_list?: Maybe<List_Mutation_Response>;
  /** insert data into the table: "list_items" */
  insert_list_items?: Maybe<List_Items_Mutation_Response>;
  /** insert a single row into the table: "list_items" */
  insert_list_items_one?: Maybe<List_Items>;
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
  /** update data of the table: "list_items" */
  update_list_items?: Maybe<List_Items_Mutation_Response>;
  /** update single row of the table: "list_items" */
  update_list_items_by_pk?: Maybe<List_Items>;
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
export type Mutation_RootDelete_List_ItemsArgs = {
  where: List_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_List_Items_By_PkArgs = {
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
export type Mutation_RootGeneratePlannerArgs = {
  _gte: Scalars['String'];
  _lte: Scalars['String'];
  mealTypes: Array<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootImportRecipeArgs = {
  url: Scalars['String'];
  wildMode?: Maybe<Scalars['Boolean']>;
};


/** mutation root */
export type Mutation_RootInsertIngredientToListArgs = {
  ingredientsToAddToList: Array<InsertIngredientToListInput>;
  shoppingListId: Scalars['String'];
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
export type Mutation_RootInsert_List_ItemsArgs = {
  objects: Array<List_Items_Insert_Input>;
  on_conflict?: Maybe<List_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_List_Items_OneArgs = {
  object: List_Items_Insert_Input;
  on_conflict?: Maybe<List_Items_On_Conflict>;
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
export type Mutation_RootUpdate_List_ItemsArgs = {
  _append?: Maybe<List_Items_Append_Input>;
  _delete_at_path?: Maybe<List_Items_Delete_At_Path_Input>;
  _delete_elem?: Maybe<List_Items_Delete_Elem_Input>;
  _delete_key?: Maybe<List_Items_Delete_Key_Input>;
  _inc?: Maybe<List_Items_Inc_Input>;
  _prepend?: Maybe<List_Items_Prepend_Input>;
  _set?: Maybe<List_Items_Set_Input>;
  where: List_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_List_Items_By_PkArgs = {
  _append?: Maybe<List_Items_Append_Input>;
  _delete_at_path?: Maybe<List_Items_Delete_At_Path_Input>;
  _delete_elem?: Maybe<List_Items_Delete_Elem_Input>;
  _delete_key?: Maybe<List_Items_Delete_Key_Input>;
  _inc?: Maybe<List_Items_Inc_Input>;
  _prepend?: Maybe<List_Items_Prepend_Input>;
  _set?: Maybe<List_Items_Set_Input>;
  pk_columns: List_Items_Pk_Columns_Input;
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
  /** fetch data from the table: "list_items" */
  list_items: Array<List_Items>;
  /** fetch data from the table: "list_items" using primary key columns */
  list_items_by_pk?: Maybe<List_Items>;
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
export type Query_RootList_ItemsArgs = {
  distinct_on?: Maybe<Array<List_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<List_Items_Order_By>>;
  where?: Maybe<List_Items_Bool_Exp>;
};


/** query root */
export type Query_RootList_Items_By_PkArgs = {
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
  name: Scalars['String'];
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

export type ShoppingListItems = {
  __typename?: 'shoppingListItems';
  id: Scalars['String'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "list" */
  list: Array<List>;
  /** fetch data from the table: "list" using primary key columns */
  list_by_pk?: Maybe<List>;
  /** fetch data from the table: "list_items" */
  list_items: Array<List_Items>;
  /** fetch data from the table: "list_items" using primary key columns */
  list_items_by_pk?: Maybe<List_Items>;
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
export type Subscription_RootList_ItemsArgs = {
  distinct_on?: Maybe<Array<List_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<List_Items_Order_By>>;
  where?: Maybe<List_Items_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootList_Items_By_PkArgs = {
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
  /** An array relationship */
  lists: Array<List>;
  name: Scalars['String'];
  /** An array relationship */
  planners: Array<Planner>;
  /** An array relationship */
  recipes_list: Array<Recipe>;
};


/** columns and relationships of "user" */
export type UserListsArgs = {
  distinct_on?: Maybe<Array<List_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<List_Order_By>>;
  where?: Maybe<List_Bool_Exp>;
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
  lists?: Maybe<List_Bool_Exp>;
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

export type DeleteAllListItemsMutationVariables = Exact<{
  _eq: Scalars['uuid'];
}>;


export type DeleteAllListItemsMutation = (
  { __typename?: 'mutation_root' }
  & { delete_list_items?: Maybe<(
    { __typename?: 'list_items_mutation_response' }
    & { returning: Array<(
      { __typename?: 'list_items' }
      & Pick<List_Items, 'list'>
    )> }
  )> }
);

export type DeleteListByIdMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteListByIdMutation = (
  { __typename?: 'mutation_root' }
  & { delete_list_by_pk?: Maybe<(
    { __typename?: 'list' }
    & Pick<List, 'id'>
  )> }
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

export type GeneratePlannerMutationVariables = Exact<{
  _gte: Scalars['String'];
  _lte: Scalars['String'];
  mealTypes: Array<Scalars['String']> | Scalars['String'];
}>;


export type GeneratePlannerMutation = (
  { __typename?: 'mutation_root' }
  & { generatePlanner: Array<(
    { __typename?: 'generatedPlanner' }
    & Pick<GeneratedPlanner, 'id'>
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
  ingredientsToAddToList: Array<InsertIngredientToListInput> | InsertIngredientToListInput;
  shoppingListId: Scalars['String'];
}>;


export type InsertIngredientToListMutation = (
  { __typename?: 'mutation_root' }
  & { insertIngredientToList: Array<(
    { __typename?: 'shoppingListItems' }
    & Pick<ShoppingListItems, 'id'>
  )> }
);

export type InsertNewListOneMutationVariables = Exact<{
  object: List_Insert_Input;
}>;


export type InsertNewListOneMutation = (
  { __typename?: 'mutation_root' }
  & { insert_list_one?: Maybe<(
    { __typename?: 'list' }
    & Pick<List, 'id' | 'name'>
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

export type UncheckAllListItemsMutationVariables = Exact<{
  _eq: Scalars['uuid'];
}>;


export type UncheckAllListItemsMutation = (
  { __typename?: 'mutation_root' }
  & { update_list_items?: Maybe<(
    { __typename?: 'list_items_mutation_response' }
    & { returning: Array<(
      { __typename?: 'list_items' }
      & Pick<List_Items, 'id' | 'is_completed'>
    )> }
  )> }
);

export type UpdateListItemStatusMutationVariables = Exact<{
  pk_columns: List_Items_Pk_Columns_Input;
  is_completed: Scalars['Boolean'];
}>;


export type UpdateListItemStatusMutation = (
  { __typename?: 'mutation_root' }
  & { update_list_items_by_pk?: Maybe<(
    { __typename?: 'list_items' }
    & Pick<List_Items, 'id' | 'is_completed'>
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

export type GetOneRecipeFromPlannerQueryVariables = Exact<{
  _eq: Scalars['String'];
}>;


export type GetOneRecipeFromPlannerQuery = (
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

export type GetAllShoppingListsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllShoppingListsQuery = (
  { __typename?: 'query_root' }
  & { list: Array<(
    { __typename?: 'list' }
    & Pick<List, 'name' | 'id'>
  )> }
);

export type GetListItemByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetListItemByIdQuery = (
  { __typename?: 'query_root' }
  & { list_items_by_pk?: Maybe<(
    { __typename?: 'list_items' }
    & Pick<List_Items, 'id' | 'name' | 'quantity' | 'recipes' | 'other' | 'comment' | 'unit'>
  )> }
);

export type GetListItemsByIdQueryVariables = Exact<{
  _eq?: Maybe<Scalars['uuid']>;
}>;


export type GetListItemsByIdQuery = (
  { __typename?: 'query_root' }
  & { list_items: Array<(
    { __typename?: 'list_items' }
    & Pick<List_Items, 'quantity' | 'other' | 'name' | 'list' | 'is_completed' | 'comment' | 'id' | 'category' | 'unit' | 'recipes'>
  )> }
);

export type GetPlannerRecipeByWeekQueryVariables = Exact<{
  _gte: Scalars['date'];
  _lte: Scalars['date'];
}>;


export type GetPlannerRecipeByWeekQuery = (
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
      & Pick<Recipe_Ingredients, 'name' | 'quantity' | 'unit' | 'formatted_text' | 'comment' | 'other'>
    )> }
  )> }
);

export type GetShoppingListNameQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetShoppingListNameQuery = (
  { __typename?: 'query_root' }
  & { list_by_pk?: Maybe<(
    { __typename?: 'list' }
    & Pick<List, 'name' | 'id'>
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
export const DeleteAllListItemsDocument = gql`
    mutation DeleteAllListItems($_eq: uuid!) {
  delete_list_items(where: {list: {_eq: $_eq}}) {
    returning {
      list
    }
  }
}
    `;
export type DeleteAllListItemsMutationFn = Apollo.MutationFunction<DeleteAllListItemsMutation, DeleteAllListItemsMutationVariables>;
export type DeleteAllListItemsMutationResult = Apollo.MutationResult<DeleteAllListItemsMutation>;
export type DeleteAllListItemsMutationOptions = Apollo.BaseMutationOptions<DeleteAllListItemsMutation, DeleteAllListItemsMutationVariables>;
export const DeleteListByIdDocument = gql`
    mutation DeleteListById($id: uuid!) {
  delete_list_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteListByIdMutationFn = Apollo.MutationFunction<DeleteListByIdMutation, DeleteListByIdMutationVariables>;
export type DeleteListByIdMutationResult = Apollo.MutationResult<DeleteListByIdMutation>;
export type DeleteListByIdMutationOptions = Apollo.BaseMutationOptions<DeleteListByIdMutation, DeleteListByIdMutationVariables>;
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
export const GeneratePlannerDocument = gql`
    mutation GeneratePlanner($_gte: String!, $_lte: String!, $mealTypes: [String!]!) {
  generatePlanner(_gte: $_gte, _lte: $_lte, mealTypes: $mealTypes) {
    id
  }
}
    `;
export type GeneratePlannerMutationFn = Apollo.MutationFunction<GeneratePlannerMutation, GeneratePlannerMutationVariables>;
export type GeneratePlannerMutationResult = Apollo.MutationResult<GeneratePlannerMutation>;
export type GeneratePlannerMutationOptions = Apollo.BaseMutationOptions<GeneratePlannerMutation, GeneratePlannerMutationVariables>;
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
    mutation InsertIngredientToList($ingredientsToAddToList: [insertIngredientToListInput!]!, $shoppingListId: String!) {
  insertIngredientToList(
    ingredientsToAddToList: $ingredientsToAddToList
    shoppingListId: $shoppingListId
  ) {
    id
  }
}
    `;
export type InsertIngredientToListMutationFn = Apollo.MutationFunction<InsertIngredientToListMutation, InsertIngredientToListMutationVariables>;
export type InsertIngredientToListMutationResult = Apollo.MutationResult<InsertIngredientToListMutation>;
export type InsertIngredientToListMutationOptions = Apollo.BaseMutationOptions<InsertIngredientToListMutation, InsertIngredientToListMutationVariables>;
export const InsertNewListOneDocument = gql`
    mutation InsertNewListOne($object: list_insert_input!) {
  insert_list_one(object: $object) {
    id
    name
  }
}
    `;
export type InsertNewListOneMutationFn = Apollo.MutationFunction<InsertNewListOneMutation, InsertNewListOneMutationVariables>;
export type InsertNewListOneMutationResult = Apollo.MutationResult<InsertNewListOneMutation>;
export type InsertNewListOneMutationOptions = Apollo.BaseMutationOptions<InsertNewListOneMutation, InsertNewListOneMutationVariables>;
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
export const UncheckAllListItemsDocument = gql`
    mutation UncheckAllListItems($_eq: uuid!) {
  update_list_items(where: {list: {_eq: $_eq}}, _set: {is_completed: false}) {
    returning {
      id
      is_completed
    }
  }
}
    `;
export type UncheckAllListItemsMutationFn = Apollo.MutationFunction<UncheckAllListItemsMutation, UncheckAllListItemsMutationVariables>;
export type UncheckAllListItemsMutationResult = Apollo.MutationResult<UncheckAllListItemsMutation>;
export type UncheckAllListItemsMutationOptions = Apollo.BaseMutationOptions<UncheckAllListItemsMutation, UncheckAllListItemsMutationVariables>;
export const UpdateListItemStatusDocument = gql`
    mutation UpdateListItemStatus($pk_columns: list_items_pk_columns_input!, $is_completed: Boolean!) {
  update_list_items_by_pk(
    pk_columns: $pk_columns
    _set: {is_completed: $is_completed}
  ) {
    id
    is_completed
  }
}
    `;
export type UpdateListItemStatusMutationFn = Apollo.MutationFunction<UpdateListItemStatusMutation, UpdateListItemStatusMutationVariables>;
export type UpdateListItemStatusMutationResult = Apollo.MutationResult<UpdateListItemStatusMutation>;
export type UpdateListItemStatusMutationOptions = Apollo.BaseMutationOptions<UpdateListItemStatusMutation, UpdateListItemStatusMutationVariables>;
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
export const GetOneRecipeFromPlannerDocument = gql`
    query GetOneRecipeFromPlanner($_eq: String!) {
  planner(order_by: {date: asc, index: asc}, limit: 1) {
    date
    index
    recipe {
      id
      title
      recipe_ingredients_list(where: {recipe: {id: {_eq: $_eq}}}) {
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
export type GetOneRecipeFromPlannerQueryResult = Apollo.QueryResult<GetOneRecipeFromPlannerQuery, GetOneRecipeFromPlannerQueryVariables>;
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
export const GetAllShoppingListsDocument = gql`
    query getAllShoppingLists {
  list(limit: 50) {
    name
    id
  }
}
    `;
export type GetAllShoppingListsQueryResult = Apollo.QueryResult<GetAllShoppingListsQuery, GetAllShoppingListsQueryVariables>;
export const GetListItemByIdDocument = gql`
    query GetListItemById($id: uuid!) {
  list_items_by_pk(id: $id) {
    id
    name
    quantity
    recipes
    other
    comment
    unit
  }
}
    `;
export type GetListItemByIdQueryResult = Apollo.QueryResult<GetListItemByIdQuery, GetListItemByIdQueryVariables>;
export const GetListItemsByIdDocument = gql`
    query GetListItemsById($_eq: uuid) {
  list_items(where: {list: {_eq: $_eq}}, order_by: {category: asc_nulls_last}) {
    quantity
    other
    name
    list
    is_completed
    comment
    id
    category
    unit
    recipes
  }
}
    `;
export type GetListItemsByIdQueryResult = Apollo.QueryResult<GetListItemsByIdQuery, GetListItemsByIdQueryVariables>;
export const GetPlannerRecipeByWeekDocument = gql`
    query GetPlannerRecipeByWeek($_gte: date!, $_lte: date!) {
  planner(where: {_and: [{date: {_gte: $_gte}}, {date: {_lte: $_lte}}]}) {
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
export type GetPlannerRecipeByWeekQueryResult = Apollo.QueryResult<GetPlannerRecipeByWeekQuery, GetPlannerRecipeByWeekQueryVariables>;
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
      comment
      other
    }
  }
}
    `;
export type GetRecipeDetailsQueryResult = Apollo.QueryResult<GetRecipeDetailsQuery, GetRecipeDetailsQueryVariables>;
export const GetShoppingListNameDocument = gql`
    query GetShoppingListName($id: uuid!) {
  list_by_pk(id: $id) {
    name
    id
  }
}
    `;
export type GetShoppingListNameQueryResult = Apollo.QueryResult<GetShoppingListNameQuery, GetShoppingListNameQueryVariables>;