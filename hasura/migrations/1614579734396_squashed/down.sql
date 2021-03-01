
COMMENT ON TABLE "public"."list_items" IS NULL;

alter table "public"."planner" drop constraint "planner_recipe_id_fkey";

alter table "public"."recipe_ingredients" drop constraint "recipe_ingredients_recipe_id_fkey";

ALTER TABLE public.planner ALTER COLUMN recipe_id TYPE uuid Using uuid(recipe_id);
ALTER TABLE public.recipe_ingredients ALTER COLUMN recipe_id TYPE uuid Using uuid(recipe_id);

ALTER TABLE public.planner ALTER COLUMN recipe_id TYPE uuid Using uuid(recipe_id);
ALTER TABLE public.recipe_ingredients ALTER COLUMN recipe_id TYPE uuid Using uuid(recipe_id);

alter table "public"."planner" add foreign key ("recipe_id") references "public"."recipe"("id") on update cascade on delete cascade;

alter table "public"."recipe_ingredients" add foreign key ("recipe_id") references "public"."recipe"("id") on update cascade on delete cascade;

ALTER TABLE "public"."recipe_ingredients" ALTER COLUMN "name" DROP NOT NULL;

alter table "public"."list_items" drop constraint "list_items_name_list_comment_key";
alter table "public"."list_items" add constraint "list_items_name_list_key" unique ("name", "list");

alter table "public"."list_items" drop constraint "list_items_name_list_key";
alter table "public"."list_items" add constraint "list_items_name_comment_other_list_unit_key" unique ("name", "comment", "other", "list", "unit");

ALTER TABLE "public"."list_items" ALTER COLUMN "quantity" TYPE integer;

ALTER TABLE "public"."list_items" ALTER COLUMN "recipes" TYPE json;

alter table "public"."list_items" drop constraint "list_items_name_comment_other_list_unit_key";

ALTER TABLE "public"."list_items" DROP COLUMN "recipes";

ALTER TABLE "public"."list_items" DROP COLUMN "unit";

alter table "public"."list_items" drop constraint "list_items_list_fkey";

ALTER TABLE "public"."list_items" DROP COLUMN "list";

ALTER TABLE "public"."list_items" ADD COLUMN "list" text;
ALTER TABLE "public"."list_items" ALTER COLUMN "list" DROP NOT NULL;

alter table "public"."list" drop constraint "list_pkey";
alter table "public"."list"
    add constraint "list_pkey" 
    primary key ( "name", "user_id" );

alter table "public"."list_items" rename column "list" to "list_name";

DROP TABLE "public"."list_items";

ALTER TABLE "public"."list" DROP COLUMN "id";

DROP TABLE "public"."list";

DROP TABLE "public"."list";

ALTER TABLE "public"."list" ALTER COLUMN "unit" SET NOT NULL;

alter table "public"."list" drop constraint "list_pkey";
alter table "public"."list"
    add constraint "list_pkey" 
    primary key ( "unit", "title" );

ALTER TABLE "public"."list" DROP COLUMN "id";

ALTER TABLE "public"."list" ALTER COLUMN "comment" SET NOT NULL;

alter table "public"."list" drop constraint "list_pkey";
alter table "public"."list"
    add constraint "list_pkey" 
    primary key ( "unit", "title", "comment" );

COMMENT ON TABLE "public"."list" IS NULL;

ALTER TABLE ONLY "public"."list" ALTER COLUMN "date" DROP DEFAULT;

alter table "public"."list" drop constraint "list_user_id_fkey";

DROP TABLE "public"."list";

ALTER TABLE "public"."recipe_ingredients" DROP COLUMN "quantity";

ALTER TABLE "public"."recipe_ingredients" DROP COLUMN "index";

ALTER TABLE "public"."recipe_ingredients" DROP COLUMN "other";

ALTER TABLE "public"."recipe_ingredients" ADD COLUMN "optional" bool;
ALTER TABLE "public"."recipe_ingredients" ALTER COLUMN "optional" DROP NOT NULL;

alter table "public"."recipe_ingredients" rename column "comment" to "preparation";

ALTER TABLE "public"."recipe_ingredients" ADD COLUMN "quantity_denominator" int4;
ALTER TABLE "public"."recipe_ingredients" ALTER COLUMN "quantity_denominator" DROP NOT NULL;

ALTER TABLE "public"."recipe_ingredients" ADD COLUMN "quantity_numerator" int4;
ALTER TABLE "public"."recipe_ingredients" ALTER COLUMN "quantity_numerator" DROP NOT NULL;

alter table "public"."planner" drop constraint "planner_pkey";
alter table "public"."planner"
    add constraint "planner_pkey" 
    primary key ( "date", "recipe_id" );

DROP TABLE "public"."planner";

ALTER TABLE "public"."recipe" DROP COLUMN "created_at";

alter table "public"."recipe_ingredients" drop constraint "recipe_ingredients_recipe_id_fkey",
          add constraint "recipe_ingredients_recipe_id_fkey"
          foreign key ("recipe_id")
          references "public"."recipe"
          ("id")
          on update restrict
          on delete restrict;

alter table "public"."recipe_ingredients" rename column "formatted_text" to "formated_text";

ALTER TABLE "public"."recipe_ingredients" DROP COLUMN "formated_text";

ALTER TABLE "public"."recipe_ingredients" ADD COLUMN "formated_text" text;
ALTER TABLE "public"."recipe_ingredients" ALTER COLUMN "formated_text" DROP NOT NULL;

ALTER TABLE "public"."recipe_ingredients" DROP COLUMN "formated_text";

ALTER TABLE "public"."recipe_ingredients" ALTER COLUMN "optional" SET NOT NULL;

ALTER TABLE "public"."recipe_ingredients" ALTER COLUMN "name" SET NOT NULL;

alter table "public"."recipe_ingredients" drop constraint "recipe_ingredients_id_key";

ALTER TABLE ONLY "public"."recipe_ingredients" ALTER COLUMN "id" DROP DEFAULT;

ALTER TABLE "public"."recipe_ingredients" DROP COLUMN "raw_text";

DROP TABLE "public"."recipe_ingredients";

ALTER TABLE "public"."recipe" ALTER COLUMN "id" TYPE uuid;

DROP TABLE "public"."recipe_ingredients";

alter table "public"."recipe" drop constraint "recipe_id_key";

ALTER TABLE "public"."recipe" DROP COLUMN "meal_type";

ALTER TABLE "public"."recipe" DROP COLUMN "directions";

DROP TABLE "public"."recipe_ingredients";

ALTER TABLE "public"."recipe" ADD COLUMN "ingredients" json;
ALTER TABLE "public"."recipe" ALTER COLUMN "ingredients" DROP NOT NULL;

ALTER TABLE "public"."recipe" DROP COLUMN "cuisine";

AlTER TABLE recipe
ALTER COLUMN ingredients
TYPE JSON USING(ingredients::json);

ALTER TABLE "public"."recipe" ALTER COLUMN "ingredients" TYPE json;

ALTER TABLE "public"."user" ALTER COLUMN "name" TYPE character varying;

ALTER TABLE "public"."user" DROP COLUMN "img";

alter table "public"."recipe" drop constraint "recipe_owner_fkey";

ALTER TABLE "public"."recipe" DROP COLUMN "owner";

DROP TABLE "public"."recipe";

DROP TABLE "public"."user";
