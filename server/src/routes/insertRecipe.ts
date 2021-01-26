import { Request, Response, Router } from "express";
import query from "../db";
import getUserId from "../helper/getUserId";
import runParser from "../helper/runParser";
import {
  insertRecipeOneDerivedArgs,
  insertRecipeOneDerivedInput,
} from "../types/insertRecipeTypes";

const InsertRecipeOneDerivedRoute = Router();

InsertRecipeOneDerivedRoute.post("/", async (req: Request, res: Response) => {
  const token = req.headers.authorization;
  const params: insertRecipeOneDerivedArgs = req.body.input;
  const { object } = params;
  try {
    const userId = getUserId(token);

    // insert recipe first and return id
    const id = await insertRecipeToDb(object, userId);
    // use the recipe_id to insert the ingredients
    await insertIngredientToDb(object.ingredients, id);

    return res.json({ id });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: "error happened",
    });
  }
});

export default InsertRecipeOneDerivedRoute;

async function insertIngredientToDb(
  ingredientStrings: string[],
  recipe_id: string
) {
  const parsedIngredients = await runParser(ingredientStrings);
  Promise.all(
    parsedIngredients.map(
      async ({ name, unit, comment, other, qty, input }, index) => {
        await query(
          `
    INSERT INTO recipe_ingredients 
      ( name, unit, comment, other, quantity, raw_text, formatted_text, index, recipe_id )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING id
  `,
          [name, unit, comment, other, qty, input, input, index, recipe_id]
        );
      }
    )
  );
}

async function insertRecipeToDb(
  object: insertRecipeOneDerivedInput,
  userId: string
) {
  // prettier-ignore
  const { title, img, total_time, yields, cuisine, directions, meal_type } = object;

  const { rows } = await query(
    `
  INSERT INTO recipe ( title, img, total_time, yields, cuisine, directions, meal_type, owner )
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  RETURNING id;
  `,
    [
      title,
      img,
      total_time,
      yields,
      cuisine,
      JSON.stringify(directions),
      meal_type,
      userId,
    ]
  );

  return rows[0].id as string;
}
