alter table "public"."planner" add foreign key ("recipe_id") references "public"."recipe"("id") on update cascade on delete cascade;
