import express from "express";
import { parseIngredient } from "ingredient-parser";

const app = express();
const port = 5001;

app.use(express.json());

app.post("/ingredients", (req, res) => {
  const ingredientRawText = req.body.ingredient as string[];

  const results = ingredientRawText.map((ingredient) =>
    parseIngredient(ingredient)
  );

  console.log(results);

  res.json(results);
});
app.listen(port, () => console.log(`server is listening on ${port}`));
