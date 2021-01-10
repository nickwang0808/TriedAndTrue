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
- index <!-- need a index here too i guess -->

### planner

- id => user.id
- data
- recipe_id
- index
