CREATE TABLE public."user" (
    id text NOT NULL,
    name character varying NOT NULL,
    email text NOT NULL
);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
