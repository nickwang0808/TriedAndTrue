alter table "public"."recipe_ingredients" add foreign key ("recipe_id") references "public"."recipe"("id") on update cascade on delete cascade;
