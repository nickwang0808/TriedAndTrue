import { addDays, format } from "date-fns";
import { Request, Response, Router } from "express";
import shuffle from "lodash.shuffle";
import query from "../db";
import getUserId from "../helper/getUserId";
import { generatePlannerArgs } from "../types/actionTypes";

const generatedPlannerRoute = Router();
// Request Handler
generatedPlannerRoute.post("/", async (req: Request, res: Response) => {
  try {
    const userId = getUserId(req.headers.authorization);
    const params: generatePlannerArgs = req.body.input;

    const result = await generatePlannerHandler(params, userId);

    return res.json(result.map((elem) => ({ id: elem })));
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
});

export default generatedPlannerRoute;

interface ISelectValue {
  id: string;
  meal_type: string;
}

async function generatePlannerHandler(
  { _gte, _lte, mealTypes }: generatePlannerArgs,
  userId: string
) {
  // get all recipe id that matches the mealtypes for the user

  const { rows } = (await query(
    `
  
  SELECT id, meal_type 
  FROM recipe
  WHERE owner = $1 AND
        meal_type = ANY($2)
  
  `,
    [userId, mealTypes]
  )) as { rows: ISelectValue[] };

  // run generate algo to format those into array

  // loop though each day
  const sevenDays = Array.from({ length: 7 }, (v, i) => i);
  const plannedRecipesForTheWeek = sevenDays.map((day) => {
    // insert recipe based on mealTypes, make sure no dupe in one day
    const shuffledRecipes = shuffle(rows);
    const recipesForTheDay: string[] = [];
    mealTypes.forEach((meal_type) => {
      const foundRecipe = shuffledRecipes.find(
        (elem) => elem.meal_type === meal_type
      );
      if (!foundRecipe) return;
      recipesForTheDay.push(foundRecipe.id);
    });

    return recipesForTheDay;
  });

  // delete existing recipe for the weeek
  await query(
    `
  DELETE FROM planner
  WHERE date >= $1::date AND
        date < $2::date
  `,
    [_gte, _lte]
  );

  // insert
  const result = await Promise.all(
    plannedRecipesForTheWeek.map(async (day, index) => {
      // from the gte day add 0 for day 1 and add 1 for day 2 etc..
      const currentDate = format(addDays(new Date(_gte), index), "yyyy-MM-dd");
      const result = await Promise.all(
        day.map(async (recipeId, index) => {
          const { rows } = await query(
            `
      INSERT INTO planner (user_id, recipe_id, date, index)
      VALUES ($1, $2, $3, $4)
      Returning recipe_id
      `,
            [userId, recipeId, currentDate, index]
          );

          return rows.map((elem) => elem.recipe_id) as string[];
        })
      );

      return result.flat();
    })
  );

  return result.flat();
}
