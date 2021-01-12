ALTER TABLE "public"."recipe" ADD COLUMN "created_at" timestamptz NOT NULL DEFAULT now();
