import { Request, Response, Router } from "express";
import { insertIngredientToListArgs } from "../types/actionTypes";

const router = Router();

router.post("/insertIngredientToList", async (req: Request, res: Response) => {
  // get request input
  const params: insertIngredientToListArgs = req.body.input;

  const { ingredientsIds } = params;

  // run some business logic
  const result = insertIngredientsToDb(ingredientsIds);

  /*
  // In case of errors:
  return res.status(400).json({
    message: "error happened"
  })
  */

  // success
  return res.json(result);
});

export default router;

async function insertIngredientsToDb(ids: string[]) {}
