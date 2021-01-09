import { Router } from "express";
import { parseIngredient } from "ingredient-parser";
import stringifyFormattedIngredients from "../helper/stringifyFormatedIngredients";

const parseIngredientToString = Router();

parseIngredientToString.post("/", (req, res) => {
  try {
    const ingredientRawText = req.body.input.ingredients as string[];
    // console.log(ingredientRawText);
    const results = ingredientRawText.map((ingredient) => {
      return {
        name: stringifyFormattedIngredients(parseIngredient(ingredient)),
      };
    });

    // console.log(results);
    return res.json(results);
  } catch (err) {
    return res.json(err);
  }
});

export default parseIngredientToString;
