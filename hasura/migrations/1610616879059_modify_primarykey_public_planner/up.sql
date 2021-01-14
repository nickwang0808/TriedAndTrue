alter table "public"."planner" drop constraint "planner_pkey";
alter table "public"."planner"
    add constraint "planner_pkey" 
    primary key ( "date", "recipe_id", "index" );
