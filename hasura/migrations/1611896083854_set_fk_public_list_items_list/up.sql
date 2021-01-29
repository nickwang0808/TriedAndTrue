alter table "public"."list_items"
           add constraint "list_items_list_fkey"
           foreign key ("list")
           references "public"."list"
           ("id") on update cascade on delete cascade;
