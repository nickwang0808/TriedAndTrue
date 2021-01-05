ALTER TABLE "public"."recipe" ADD COLUMN "ingredients" json;
ALTER TABLE "public"."recipe" ALTER COLUMN "ingredients" DROP NOT NULL;
