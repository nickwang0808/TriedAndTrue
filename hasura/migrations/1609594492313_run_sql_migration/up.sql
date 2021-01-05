AlTER TABLE recipe
ALTER COLUMN ingredients
TYPE JSON USING(ingredients::json);
