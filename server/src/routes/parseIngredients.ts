import { Router } from "express";
import { parseIngredient } from "ingredient-parser";

const parseIngredientToString = Router()

parseIngredientToString.post('/', (req, res) => {
  try {
    const ingredientRawText = req.body.input.ingredients as string[];
    const results = ingredientRawText.map((ingredient) => {
      // stringify
      const {
        quantity_denominator,
        quantity_numerator,
        name,
        unit,
        optional,
        preparation,
      } = parseIngredient(ingredient);

      let quantity: number | string;
      if (!quantity_numerator || !quantity_denominator) {
        quantity = "";
      } else {
        quantity = quantity_numerator / quantity_denominator;
      }

      return {
        name: `${quantity} ${unit || ""} ${name || ""} ${preparation || ""} ${
          optional ? "optional" : ""
        }`,
      };
    });

    console.log(results);
    return res.json(results);
  } catch (err) {
    return res.json(err);
  }
})


export default parseIngredientToString
