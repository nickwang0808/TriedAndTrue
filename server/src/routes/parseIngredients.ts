import { Router } from "express";
import runParser from "../helper/runParser";
// import { parse } from "recipe-ingredient-parser-v2";

const parseIngredientToString = Router();
// this route is for formatting ths input ingredient
parseIngredientToString.post("/", async (req, res) => {
  try {
    const ingredientRawText = req.body.input.ingredientsToParse as string[];

    const results = await Promise.all(
      ingredientRawText.map(async (ingredient) => {
        // return parse(ingredient);
        const { input } = (await runParser([ingredient]))[0];
        return { name: input };
      })
    );

    // console.log(results);
    return res.json(results);
  } catch (err) {
    return res.json(err);
  }
});

export default parseIngredientToString;
