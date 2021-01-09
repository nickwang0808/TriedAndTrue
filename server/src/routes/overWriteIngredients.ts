import { Router } from "express";
import query from "../db";

const overWriteIngredient = Router();

interface IInput {
  recipe_id: string;
  ingredientsStrings: [string];
}

overWriteIngredient.post("/", async (req, res) => {
  const { ingredientsStrings, recipe_id } = req.body.input as IInput;
  console.log(ingredientsStrings);
  try {
    // delete all ingredients for this recipe
    await query(
      `
    DELETE FROM recipe_ingredients
    WHERE recipe_id = $1;
    `,
      [recipe_id]
    );

    // re insert all the new ingredients
    await Promise.all(
      ingredientsStrings.map(async (ingredient) => {
        return await query(
          `
      INSERT INTO recipe_ingredients(recipe_id ,raw_text)
      VALUES ($1, $2);
      `,
          [recipe_id, ingredient]
        );
      })
    );
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }

  // success
  return res.json({
    status: "complete",
  });
});

export default overWriteIngredient;
