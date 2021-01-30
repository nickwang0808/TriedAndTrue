alter table "public"."list_items" drop constraint "list_items_name_list_key";
alter table "public"."list_items" add constraint "list_items_name_list_comment_key" unique ("name", "list", "comment");
