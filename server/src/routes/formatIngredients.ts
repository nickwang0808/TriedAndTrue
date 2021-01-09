import { Router } from "express";
import { parseIngredient } from "ingredient-parser";
import query from "../db";
import stringifyFormattedIngredients from "../helper/stringifyFormatedIngredients";
import { IIngredientsTableType } from "../types/IngredientsTableType";
import { Payload } from "../types/triggerHeaderType";

const formatIngredients = Router();

console.log("format ingredient mounted");

formatIngredients.post("/", async (req, res) => {
  const {
    event: { op, data },
  } = req.body as Payload<IIngredientsTableType>;

  try {
    if (op === "INSERT") {
      console.log(data.new);
      // parse the raw text

      const parseResult = parseIngredient(data.new.raw_text);
      const formatted_text = stringifyFormattedIngredients(parseResult);

      const {
        name,
        preparation,
        quantity_denominator,
        quantity_numerator,
        unit,
        optional,
      } = parseResult;

      // update the db
      await query(
        `UPDATE recipe_ingredients
    SET 
    quantity_denominator = $1,
    quantity_numerator = $2,
    name = $3,
    optional = $4,
    unit = $5,
    preparation = $6,
    formatted_text = $8
    
    WHERE id = $7;`,
        [
          quantity_denominator,
          quantity_numerator,
          name,
          optional,
          unit,
          preparation,
          data.new.id,
          formatted_text,
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
