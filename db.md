### user

- id
- name
- img
-

### recipe

- id
- owner -> user.id
- title
- img
- total_time
- yields
- cuisine
- type
- ingredients []
- created_at
- ratings

### recipe_ingredient

- id
- recipe_id
- index
- quantity
- unit
- name
- raw_text
- formatted_text
- comment
- other

### planner

- user_id
- recipe_id
- index
- date

### list

- user_id
- name

### list_items

- recipes: [{title, img, date}]
- name
- quantity
- comment
- other
- category
- is_completed
- list_name fk
