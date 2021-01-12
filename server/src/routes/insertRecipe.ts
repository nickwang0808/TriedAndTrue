import { Request, Response, Router } from "express";
import { parseIngredient } from "ingredient-parser";
import fetch, { Headers } from "node-fetch";
import stringifyFormattedIngredients from "../helper/stringifyFormatedIngredients";
const HASURA_OPERATION = `mutation ($object: recipe_insert_input!) {
  insert_recipe_one(object: $object) {
    id
    title
    cuisine
    directions
    img
    meal_type
    owner
    total_time
    yields
  }
}`;

const execute = async (variables, authToken) => {
  const headers = new Headers({
    Authorization: authToken,
  });

  const fetchResponse = await fetch("http://35.220.182.160:8080/v1/graphql", {
    method: "POST",
    headers,
    body: JSON.stringify({
      query: HASURA_OPERATION,
      variables,
    }),
  });
  const data = await fetchResponse.json();
  console.log("DEBUG: ", data);
  return data;
};

const InsertRecipeOneDerivedRoute = Router();

// Request Handler
InsertRecipeOneDerivedRoute.post("/", async (req: Request, res: Response) => {
  // get request input
  const token = req.headers.authorization;
  const params: InsertRecipeOneDerivedArgs = req.body.input;

  const { object } = params;
  // run some business logic

  // parse the ingredients
  const parseIngredientResults = object.recipe_ingredients_list?.data?.map(
    ({ raw_text }) => {
      const result = parseIngredient(raw_text);
      const formatted_text = stringifyFormattedIngredients(result);

      // raw_text is non nullable so put it in there just because
      //@ts-ignore
      result.raw_text = raw_text;
      //@ts-ignore
      result.formatted_text = formatted_text;
      return result;
    }
  );

  if (parseIngredientResults && parseIngredientResults.length) {
    // intercept and convert the incoming ingredient raw_text
    //@ts-ignore
    params.object.recipe_ingredients_list.data = parseIngredientResults;
  }

  // execute the parent operation in Hasura
  const { data, errors } = await execute(params, token);
  if (errors) return res.status(400).json(errors[0]);

  // success
  return res.json({ ...data.insert_recipe_one });
});

export default InsertRecipeOneDerivedRoute;
