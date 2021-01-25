ALTER TABLE "public"."recipe_ingredients" ADD COLUMN "quantity_numerator" int4;
ALTER TABLE "public"."recipe_ingredients" ALTER COLUMN "quantity_numerator" DROP NOT NULL;
