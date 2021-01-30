alter table "public"."list_items" drop constraint "list_items_name_comment_other_list_unit_key";
alter table "public"."list_items" add constraint "list_items_name_list_key" unique ("name", "list");
