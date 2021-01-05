CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."recipe_ingredients"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "quantity" double precision NOT NULL DEFAULT 1.00, "unit" text, "name" text NOT NULL, "recipe_id" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("recipe_id") REFERENCES "public"."recipe"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));
