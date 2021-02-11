import { Request, Response, Router } from "express";
import { generatedPlanner, generatePlannerArgs } from "../types/actionTypes";

const generatedPlannerRoute = Router();
// Request Handler
generatedPlannerRoute.post("/", async (req: Request, res: Response) => {
  try {
    const params: generatePlannerArgs = req.body.input;

    const result = generatePlannerHandler(params);

    return res.json(result);
  } catch (err) {
    return res.status(400).json({
      message: "error happened",
    });
  }
});

export default generatedPlannerRoute;

function generatePlannerHandler(args: generatePlannerArgs): generatedPlanner {
  return { id: "<sample value>" };
}
