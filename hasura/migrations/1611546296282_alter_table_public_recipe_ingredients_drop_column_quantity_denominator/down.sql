ALTER TABLE "public"."recipe_ingredients" ADD COLUMN "quantity_denominator" int4;
ALTER TABLE "public"."recipe_ingredients" ALTER COLUMN "quantity_denominator" DROP NOT NULL;
