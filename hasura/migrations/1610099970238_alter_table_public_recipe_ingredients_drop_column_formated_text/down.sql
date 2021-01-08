ALTER TABLE "public"."recipe_ingredients" ADD COLUMN "formated_text" text;
ALTER TABLE "public"."recipe_ingredients" ALTER COLUMN "formated_text" DROP NOT NULL;
