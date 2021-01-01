CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."recipe"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "title" text NOT NULL, "img" text, "total_time" integer, "yields" text, "ingredients" json, PRIMARY KEY ("id") , UNIQUE ("id"));
