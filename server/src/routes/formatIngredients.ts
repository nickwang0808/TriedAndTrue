import { Router } from "express";
import { parseIngredient } from "ingredient-parser";
import query from "../db";
import { IIngredientsTableType } from "../types/IngredientsTableType";
import { Payload } from "../types/triggerHeaderType";

const formatIngredients = Router();

console.log("format ingredient mounted");

formatIngredients.post("/", async (req, res) => {
  const {
    event: { op, data },
    table,
  } = req.body as Payload<IIngredientsTableType>;

  try {
    if (op === "INSERT") {
      console.log(data.new);
      // parse the raw text
      const {
        name,
        preparation,
        quantity_denominator,
        quantity_numerator,
        unit,
        optional,
      } = parseIngredient(data.new.raw_text);

      // update the db
      await query(
        `UPDATE recipe_ingredients
    SET 
    quantity_denominator = $1,
    quantity_numerator = $2,
    name = $3,
    optional = $4,
    unit = $5,
    preparation = $6
    
    WHERE recipe_id = $7;`,
        [
          quantity_denominator,
          quantity_numerator,
          name,
          optional,
          unit,
          preparation,
          data.new.recipe_id,
        ]
      );
    }
  } catch (err) {
    console.log(err);
    return res.status(500);
  }

  return res.json({ status: "complete" });
});

export default formatIngredients;
