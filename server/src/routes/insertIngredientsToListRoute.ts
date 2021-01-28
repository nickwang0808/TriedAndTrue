import { Request, Response, Router } from "express";
import query from "../db";
import getUserId from "../helper/getUserId";
import { insertIngredientToListArgs } from "../types/actionTypes";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  // get request input
  const params: insertIngredientToListArgs = req.body.input;

  try {
    const { ingredientsIds, date } = params;

    const userId = getUserId(req.headers.authorization);
    const result = await insertIngredientsToDb(ingredientsIds, date, userId);

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
  title: string;
  img: string;
}

async function insertIngredientsToDb(
  ids: string[],
  date: string,
  userId: string
) {
  // get all info related to the ids

  const { rows } = await query(
    `
SELECT i.quantity, i.name, i.unit, i.comment, r.title, r.img
FROM recipe_ingredients i
LEFT JOIN recipe r
    ON r.id = i.recipe_id

WHERE i.id = ANY($1)
`,
    [ids]
  );

  return await Promise.all(
    (rows as ISelectResult[]).map(
      async ({ quantity, name, unit, comment, title, img }) => {
        // name is for the title column, title and img are for the recipe json

        const { rows } = await query(
          `
        INSERT INTO list(user_id, date, title, quantity, comment, unit, recipes)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id
        `,
          [
            userId,
            date,
            name,
            quantity,
            comment,
            unit,
            JSON.stringify({ title, img }),
          ]
        );

        return { id: rows[0].id as string };
      }
    )
  );
}
