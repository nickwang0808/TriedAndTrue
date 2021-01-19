import { Request, Response, Router } from "express";
import query from "../db";
import getUserId from "../helper/getUserId";
import runScraper from "../helper/runScraper";
import { runOverWriteIngredientQuery } from "./overWriteIngredients";

const scraperRoute = Router();

type importRecipeArgs = {
  url: string;
};

type ImportedRecipe = {
  id: string;
};

const importRecipeHandler = async (
  url: string,
  token: string
): Promise<ImportedRecipe> => {
  const owner = getUserId(token);
  const {
    title,
    image,
    total_time,
    yields,
    instructions,
    ingredients,
  } = await runScraper(url);
  const directions = JSON.stringify(
    instructions.split("\n").map((e) => ({ value: e }))
  );
  const { rows } =
    // run sql
    await query(
      `
    INSERT INTO recipe(title, img, total_time, yields, directions, owner)
    values($1, $2, $3, $4, $5, $6)
    RETURNING id
    `,
      [title, image, total_time, yields, directions, owner]
    );

  const { id } = rows[0];

  await runOverWriteIngredientQuery(ingredients, id);

  return { id };
};

// Request Handler
scraperRoute.post("/", async (req: Request, res: Response) => {
  // get request input
  const token = req.headers.authorization;
  const params: importRecipeArgs = req.body.input;
  const { url } = params;
  // run some business logic
  const result = await importRecipeHandler(url, token);

  /*
  // In case of errors:
  return res.status(400).json({
    message: "error happened"
  })
  */

  // success
  return res.json(result);
});

export default scraperRoute;
