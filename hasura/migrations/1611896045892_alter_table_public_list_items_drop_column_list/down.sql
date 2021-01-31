ALTER TABLE "public"."list_items" ADD COLUMN "list" text;
ALTER TABLE "public"."list_items" ALTER COLUMN "list" DROP NOT NULL;
