alter table "public"."recipe"
           add constraint "recipe_owner_fkey"
           foreign key ("owner")
           references "public"."user"
           ("id") on update restrict on delete restrict;
