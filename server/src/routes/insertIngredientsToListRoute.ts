import { Request, Response, Router } from "express";
import query from "../db";
import getUserId from "../helper/getUserId";
import {
  insertIngredientToListArgs,
  insertIngredientToListInput,
} from "../types/actionTypes";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  // get request input
  const params: insertIngredientToListArgs = req.body.input;

  try {
    const { ingredientsToAddToList, shoppingListId } = params;

    const userId = getUserId(req.headers.authorization);
    const result = await insertIngredientsToDb(
      ingredientsToAddToList,
      shoppingListId,
      userId
    );

    return res.json(result);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

export default router;

interface ISelectResult {
  quantity: number;
  name: string;
  unit: string;
  comment: string;
  other: string;
  title: string;
  img: string;
}

async function insertIngredientsToDb(
  ingredientsToAddToList: insertIngredientToListInput[],
  shoppingListId: string,
  userId: string
) {
  // get all info related to the ids

  const nestedIds = await Promise.all(
    ingredientsToAddToList.map(
      async ({
        date,
        recipe_id,
        recipe_index,
        ingredients: ingredientsIds,
      }) => {
        // name is for the title column, title and img are for the recipe json
        const { rows } = await query(
          `
      SELECT i.quantity, i.name, i.unit, i.comment, i.other, r.title, r.img
      FROM recipe_ingredients i
      LEFT JOIN recipe r
          ON r.id = i.recipe_id
      
      WHERE i.id = ANY($1)
      `,
          [ingredientsIds]
        );

        return await Promise.all(
          (rows as ISelectResult[]).map(
            async ({ quantity, name, unit, other, comment, title, img }) => {
              const { rows } = await query(
                // name is for the title column, title and img are for the recipe json
                `
            INSERT INTO list_items(other, name, quantity, comment, unit, recipes, list)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            ON CONFLICT ON CONSTRAINT list_items_name_list_comment_key 
                DO UPDATE SET 
                    quantity = list_items.quantity + EXCLUDED.quantity,
                    recipes  = list_items.recipes || EXCLUDED.recipes::jsonb
            RETURNING id;
            `,
                [
                  other,
                  name,
                  quantity,
                  comment,
                  unit,
                  JSON.stringify([{ title, img, date }]),
                  shoppingListId,
                ]
              );

              return { id: rows[0].id as string };
            }
          )
        );
      }
    )
  );

  return nestedIds.flat();
}
