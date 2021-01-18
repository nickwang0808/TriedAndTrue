import { Router } from "express";
import { parseIngredient } from "ingredient-parser";
import query from "../db";
import stringifyFormattedIngredients from "../helper/stringifyFormatedIngredients";

const overWriteIngredient = Router();

interface IInput {
  recipe_id: string;
  ingredientsStrings: [string];
}

export const runOverWriteIngredientQuery = async (
  ingredientsStrings: string[],
  recipe_id: string
) => {
  await query(
    `
  DELETE FROM recipe_ingredients
  WHERE recipe_id = $1;
  `,
    [recipe_id]
  );

  // re insert all the new ingredients
  const result = await Promise.all(
    ingredientsStrings.map(async (ingredient) => {
      const parseResult = parseIngredient(ingredient);

      const formatted_text = stringifyFormattedIngredients(parseResult);

      const {
        name,
        preparation,
        quantity_denominator,
        quantity_numerator,
        unit,
        optional,
      } = parseResult;

      const { rows } = await query(
        `
    INSERT INTO recipe_ingredients(
      recipe_id,
      raw_text,
      quantity_denominator,
      quantity_numerator,
      name,
      optional,
      unit,
      preparation,
      formatted_text
      )
    VALUES ($1, $2, $3,$4,$5,$6,$7,$8,$9)
    RETURNING *;
    `,
        [
          recipe_id,
          ingredient,
          quantity_denominator,
          quantity_numerator,
          name,
          optional,
          unit,
          preparation,
          formatted_text,
        ]
      );
      return { /*  newIngredients: rows[0], */ id: rows[0].id };
    })
  );
};

overWriteIngredient.post("/", async (req, res) => {
  const { ingredientsStrings, recipe_id } = req.body.input as IInput;
  console.log(ingredientsStrings);
  try {
    // delete all ingredients for this recipe
    const result = await runOverWriteIngredientQuery(
      ingredientsStrings,
      recipe_id
    );
    return res.json(result);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }

  // success
});

export default overWriteIngredient;
