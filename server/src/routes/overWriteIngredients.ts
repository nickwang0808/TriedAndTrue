import { Router } from "express";
import query from "../db";
import runParser from "../helper/runParser";

const overWriteIngredient = Router();

interface IInput {
  recipe_id: string;
  ingredientsStrings: [string];
}

export const runOverWriteIngredientQuery = async (
  ingredientsStrings: string[],
  recipe_id: string
) => {
  // delete all ing for this recipe first to avoid conflicts
  await query(
    `
  DELETE FROM recipe_ingredients
  WHERE recipe_id = $1;
  `,
    [recipe_id]
  );

  // re insert all the new ingredients
  const result = await Promise.all(
    (await runParser(ingredientsStrings)).map(
      async ({ input, unit, qty, comment, name, other }, index) => {
        // implement the formatting logic later

        const { rows } = await query(
          `
    INSERT INTO recipe_ingredients
    ( recipe_id, index, quantity, unit, name, raw_text, formatted_text, comment, other )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *;
    `,
          [recipe_id, index, qty, unit, name, input, input, comment, other]
        );
        // set the value of the result variable. poor prettier formatting
        return rows.map(({ id }) => ({ id }));
      }
    )
  );
  return result;
};

overWriteIngredient.post("/", async (req, res) => {
  const { ingredientsStrings, recipe_id } = req.body.input as IInput;
  console.log(ingredientsStrings);
  try {
    if (!ingredientsStrings.length) {
      return res.json([]);
    }

    // run sql queries
    const result = await runOverWriteIngredientQuery(
      ingredientsStrings,
      recipe_id
    );
    return res.json(...result);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
});

export default overWriteIngredient;
