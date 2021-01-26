ALTER TABLE "public"."recipe_ingredients" ADD COLUMN "optional" bool;
ALTER TABLE "public"."recipe_ingredients" ALTER COLUMN "optional" DROP NOT NULL;
