CREATE TABLE public.list (
    user_id text NOT NULL,
    name text NOT NULL,
    id uuid DEFAULT public.gen_random_uuid() NOT NULL
);
CREATE TABLE public.list_items (
    name text NOT NULL,
    quantity double precision,
    comment text,
    other text,
    category text,
    is_completed boolean DEFAULT false NOT NULL,
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    list uuid NOT NULL,
    unit text,
    recipes jsonb
);
COMMENT ON TABLE public.list_items IS 'recipeMeta info structure { title, img, date }';
CREATE TABLE public.planner (
    user_id text NOT NULL,
    recipe_id uuid NOT NULL,
    date date NOT NULL,
    index integer NOT NULL
);
CREATE TABLE public.recipe (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    title text NOT NULL,
    img text,
    total_time integer,
    yields text,
    owner text NOT NULL,
    cuisine text,
    directions json,
    meal_type text,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE TABLE public.recipe_ingredients (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name text NOT NULL,
    unit text,
    comment text,
    recipe_id uuid NOT NULL,
    raw_text text NOT NULL,
    formatted_text text,
    other text,
    index integer NOT NULL,
    quantity text
);
CREATE TABLE public."user" (
    id text NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    img text
);
ALTER TABLE ONLY public.list_items
    ADD CONSTRAINT list_items_name_list_comment_key UNIQUE (name, list, comment);
ALTER TABLE ONLY public.list_items
    ADD CONSTRAINT list_items_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.list
    ADD CONSTRAINT list_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.planner
    ADD CONSTRAINT planner_pkey PRIMARY KEY (date, recipe_id, index);
ALTER TABLE ONLY public.recipe
    ADD CONSTRAINT recipe_id_key UNIQUE (id);
ALTER TABLE ONLY public.recipe_ingredients
    ADD CONSTRAINT recipe_ingredients_id_key UNIQUE (id);
ALTER TABLE ONLY public.recipe_ingredients
    ADD CONSTRAINT recipe_ingredients_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.recipe
    ADD CONSTRAINT recipe_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.list_items
    ADD CONSTRAINT list_items_list_fkey FOREIGN KEY (list) REFERENCES public.list(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.list
    ADD CONSTRAINT list_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.planner
    ADD CONSTRAINT planner_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES public.recipe(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.planner
    ADD CONSTRAINT planner_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.recipe_ingredients
    ADD CONSTRAINT recipe_ingredients_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES public.recipe(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.recipe
    ADD CONSTRAINT recipe_owner_fkey FOREIGN KEY (owner) REFERENCES public."user"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
