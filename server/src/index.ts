import express from "express";
import { parseIngredient } from "ingredient-parser";

const app = express();
const port = 5001;

app.use(express.json());

app.post("/ingredients", (req, res) => {
  try {
    const ingredientRawText = req.body.input.ingredients as string[];
    const results = ingredientRawText.map((ingredient) =>
      parseIngredient(ingredient)
    );

    // console.log(results);
    res.json(results);
  } catch (err) {
    res.json(err);
  }
});
app.listen(port, () => console.log(`server is listening on ${port}`));
