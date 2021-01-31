alter table "public"."list_items" add constraint "list_items_name_comment_other_list_unit_key" unique ("name", "comment", "other", "list", "unit");
