alter table "public"."list" drop constraint "list_pkey";
alter table "public"."list"
    add constraint "list_pkey" 
    primary key ( "unit", "title", "comment" );
