
CREATE TABLE "public"."user"("id" text NOT NULL, "name" character varying NOT NULL, "email" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"));

CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."recipe"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "title" text NOT NULL, "img" text, "total_time" integer, "yields" text, "ingredients" json, PRIMARY KEY ("id") , UNIQUE ("id"));

ALTER TABLE "public"."recipe" ADD COLUMN "owner" text NOT NULL;

alter table "public"."recipe"
           add constraint "recipe_owner_fkey"
           foreign key ("owner")
           references "public"."user"
           ("id") on update restrict on delete restrict;

ALTER TABLE "public"."user" ADD COLUMN "img" text NULL;

ALTER TABLE "public"."user" ALTER COLUMN "name" TYPE text;

ALTER TABLE "public"."recipe" ALTER COLUMN "ingredients" TYPE Text;

AlTER TABLE recipe
ALTER COLUMN ingredients
TYPE JSON USING(ingredients::json);

ALTER TABLE "public"."recipe" ADD COLUMN "cuisine" text NULL;

ALTER TABLE "public"."recipe" DROP COLUMN "ingredients" CASCADE;

CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."recipe_ingredients"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "quantity" double precision NOT NULL DEFAULT 1.00, "unit" text, "name" text NOT NULL, "recipe_id" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("recipe_id") REFERENCES "public"."recipe"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));

ALTER TABLE "public"."recipe" ADD COLUMN "directions" json NULL;

ALTER TABLE "public"."recipe" ADD COLUMN "meal_type" text NULL;

alter table "public"."recipe" add constraint "recipe_id_key" unique ("id");

DROP TABLE "public"."recipe_ingredients";

ALTER TABLE "public"."recipe" ALTER COLUMN "id" TYPE text;

CREATE TABLE "public"."recipe_ingredients"("id" uuid NOT NULL, "name" text NOT NULL, "quantity_numerator" integer, "quantity_denominator" integer, "unit" text, "preparation" text, "optional" boolean NOT NULL, "recipe_id" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("recipe_id") REFERENCES "public"."recipe"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));

ALTER TABLE "public"."recipe_ingredients" ADD COLUMN "raw_text" text NOT NULL;

ALTER TABLE ONLY "public"."recipe_ingredients" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();

alter table "public"."recipe_ingredients" add constraint "recipe_ingredients_id_key" unique ("id");

ALTER TABLE "public"."recipe_ingredients" ALTER COLUMN "name" DROP NOT NULL;

ALTER TABLE "public"."recipe_ingredients" ALTER COLUMN "optional" DROP NOT NULL;

ALTER TABLE "public"."recipe_ingredients" ADD COLUMN "formated_text" text NULL;

ALTER TABLE "public"."recipe_ingredients" DROP COLUMN "formated_text" CASCADE;

ALTER TABLE "public"."recipe_ingredients" ADD COLUMN "formated_text" text NULL;

alter table "public"."recipe_ingredients" rename column "formated_text" to "formatted_text";

alter table "public"."recipe_ingredients" drop constraint "recipe_ingredients_recipe_id_fkey",
             add constraint "recipe_ingredients_recipe_id_fkey"
             foreign key ("recipe_id")
             references "public"."recipe"
             ("id") on update cascade on delete cascade;

ALTER TABLE "public"."recipe" ADD COLUMN "created_at" timestamptz NOT NULL DEFAULT now();

CREATE TABLE "public"."planner"("user_id" text NOT NULL, "recipe_id" text NOT NULL, "date" date NOT NULL, "index" integer NOT NULL, PRIMARY KEY ("recipe_id","date") , FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("recipe_id") REFERENCES "public"."recipe"("id") ON UPDATE cascade ON DELETE cascade);

alter table "public"."planner" drop constraint "planner_pkey";
alter table "public"."planner"
    add constraint "planner_pkey" 
    primary key ( "date", "recipe_id", "index" );

ALTER TABLE "public"."recipe_ingredients" DROP COLUMN "quantity_numerator" CASCADE;

ALTER TABLE "public"."recipe_ingredients" DROP COLUMN "quantity_denominator" CASCADE;

alter table "public"."recipe_ingredients" rename column "preparation" to "comment";

ALTER TABLE "public"."recipe_ingredients" DROP COLUMN "optional" CASCADE;

ALTER TABLE "public"."recipe_ingredients" ADD COLUMN "other" Text NULL;

ALTER TABLE "public"."recipe_ingredients" ADD COLUMN "index" integer NOT NULL;

ALTER TABLE "public"."recipe_ingredients" ADD COLUMN "quantity" text NULL;

CREATE TABLE "public"."list"("user_id" text NOT NULL, "date" date NOT NULL, "title" text NOT NULL, "quantity" text, "comment" text, "other" text, "category" text, "is_completed" bool NOT NULL DEFAULT false, "recipes" json, "unit" text, PRIMARY KEY ("title","unit","comment") ); COMMENT ON TABLE "public"."list" IS E'detach the item from recipe once record is written';

alter table "public"."list"
           add constraint "list_user_id_fkey"
           foreign key ("user_id")
           references "public"."user"
           ("id") on update cascade on delete cascade;

ALTER TABLE ONLY "public"."list" ALTER COLUMN "date" SET DEFAULT now();

COMMENT ON TABLE "public"."list" IS E'detach the item from recipe once record is written, json structure for the recipe should be array [{img, title}]';

alter table "public"."list" drop constraint "list_pkey";
alter table "public"."list"
    add constraint "list_pkey" 
    primary key ( "unit", "title" );

ALTER TABLE "public"."list" ALTER COLUMN "comment" DROP NOT NULL;

CREATE EXTENSION IF NOT EXISTS pgcrypto;
ALTER TABLE "public"."list" ADD COLUMN "id" uuid NOT NULL UNIQUE DEFAULT gen_random_uuid();

alter table "public"."list" drop constraint "list_pkey";
alter table "public"."list"
    add constraint "list_pkey" 
    primary key ( "id" );

ALTER TABLE "public"."list" ALTER COLUMN "unit" DROP NOT NULL;

DROP TABLE "public"."list";

CREATE TABLE "public"."list"("user_id" text NOT NULL, "name" text NOT NULL, PRIMARY KEY ("user_id","name") , FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON UPDATE cascade ON DELETE cascade);

CREATE EXTENSION IF NOT EXISTS pgcrypto;
ALTER TABLE "public"."list" ADD COLUMN "id" uuid NOT NULL DEFAULT gen_random_uuid();

CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."list_items"("name" text NOT NULL, "quantity" integer, "comment" text, "other" text, "category" text, "is_completed" bool NOT NULL DEFAULT false, "list_name" text NOT NULL, "id" uuid NOT NULL DEFAULT gen_random_uuid(), PRIMARY KEY ("id") );

alter table "public"."list_items" rename column "list_name" to "list";

alter table "public"."list" drop constraint "list_pkey";
alter table "public"."list"
    add constraint "list_pkey" 
    primary key ( "id" );

ALTER TABLE "public"."list_items" DROP COLUMN "list" CASCADE;

ALTER TABLE "public"."list_items" ADD COLUMN "list" uuid NOT NULL;

alter table "public"."list_items"
           add constraint "list_items_list_fkey"
           foreign key ("list")
           references "public"."list"
           ("id") on update cascade on delete cascade;

ALTER TABLE "public"."list_items" ADD COLUMN "unit" text NULL;

ALTER TABLE "public"."list_items" ADD COLUMN "recipes" json NULL;

alter table "public"."list_items" add constraint "list_items_name_comment_other_list_unit_key" unique ("name", "comment", "other", "list", "unit");

ALTER TABLE "public"."list_items" ALTER COLUMN "recipes" TYPE jsonb;

ALTER TABLE "public"."list_items" ALTER COLUMN "quantity" TYPE double precision;

alter table "public"."list_items" drop constraint "list_items_name_comment_other_list_unit_key";
alter table "public"."list_items" add constraint "list_items_name_list_key" unique ("name", "list");

alter table "public"."list_items" drop constraint "list_items_name_list_key";
alter table "public"."list_items" add constraint "list_items_name_list_comment_key" unique ("name", "list", "comment");

ALTER TABLE "public"."recipe_ingredients" ALTER COLUMN "name" SET NOT NULL;

alter table "public"."recipe_ingredients" drop constraint "recipe_ingredients_recipe_id_fkey";

alter table "public"."planner" drop constraint "planner_recipe_id_fkey";

ALTER TABLE public.recipe ALTER COLUMN id TYPE uuid USING uuid(id);

ALTER TABLE public.planner ALTER COLUMN recipe_id TYPE uuid Using uuid(recipe_id);
ALTER TABLE public.recipe_ingredients ALTER COLUMN recipe_id TYPE uuid Using uuid(recipe_id);

alter table "public"."recipe_ingredients"
           add constraint "recipe_ingredients_recipe_id_fkey"
           foreign key ("recipe_id")
           references "public"."recipe"
           ("id") on update cascade on delete cascade;

alter table "public"."planner"
           add constraint "planner_recipe_id_fkey"
           foreign key ("recipe_id")
           references "public"."recipe"
           ("id") on update cascade on delete cascade;

COMMENT ON TABLE "public"."list_items" IS E'recipeMeta info structure { title, img, date }';
