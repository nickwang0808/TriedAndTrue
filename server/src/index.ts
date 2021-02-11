import express from "express";
import categoryRoute from "./routes/categoryRoute";
import generatedPlannerRoute from "./routes/generatePlannerRoute";
import addIngredientToList from "./routes/insertIngredientsToListRoute";
import InsertRecipeOneDerivedRoute from "./routes/insertRecipe";
import overWriteIngredient from "./routes/overWriteIngredients";
import parseIngredientToString from "./routes/parseIngredients";
import scraperRoute from "./routes/scraperRoute";

const app = express();
const port = 5001;

app.use(express.json());

require("dotenv").config();

app.use("/ingredients", parseIngredientToString);
app.use("/overwrite-ingredients", overWriteIngredient);
app.use("/InsertRecipeOneDerived", InsertRecipeOneDerivedRoute);
app.use("/scraper", scraperRoute);
app.use("/addIngredientToList", addIngredientToList);
app.use("/category", categoryRoute);
app.use("/generatePlanner", generatedPlannerRoute);

app.listen(port, () => console.log(`server is listening on ${port}`));
