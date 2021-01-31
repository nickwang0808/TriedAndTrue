CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."list_items"("name" text NOT NULL, "quantity" integer, "comment" text, "other" text, "category" text, "is_completed" bool NOT NULL DEFAULT false, "list_name" text NOT NULL, "id" uuid NOT NULL DEFAULT gen_random_uuid(), PRIMARY KEY ("id") );
