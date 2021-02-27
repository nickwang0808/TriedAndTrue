alter table "public"."planner"
           add constraint "planner_recipe_id_fkey"
           foreign key ("recipe_id")
           references "public"."recipe"
           ("id") on update cascade on delete cascade;
