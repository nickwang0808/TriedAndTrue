ALTER TABLE public.planner ALTER COLUMN recipe_id TYPE uuid Using uuid(recipe_id);
ALTER TABLE public.recipe_ingredients ALTER COLUMN recipe_id TYPE uuid Using uuid(recipe_id);
