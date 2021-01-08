import express from "express";
import { parseIngredient } from "ingredient-parser";
import query from "./db";
const app = express();
const port = 5001;

app.use(express.json());

(async () => {
  const result = await query("SELECT * FROM user;");
  console.log(result);
})().catch((err) => console.log(err));

app.post("/ingredients", (req, res) => {
  try {
    const ingredientRawText = req.body.input.ingredients as string[];
    const results = ingredientRawText.map((ingredient) => {
      // stringify
      const {
        quantity_denominator,
        quantity_numerator,
        name,
        unit,
        optional,
        preparation,
      } = parseIngredient(ingredient);

      let quantity: number | string;
      if (!quantity_numerator || !quantity_denominator) {
        quantity = "";
      } else {
        quantity = quantity_numerator / quantity_denominator;
      }

      return {
        name: `${quantity} ${unit || ""} ${name || ""} ${preparation || ""} ${
          optional ? "optional" : ""
        }`,
      };
    });

    console.log(results);
    return res.json(results);
  } catch (err) {
    return res.json(err);
  }
});

app.listen(port, () => console.log(`server is listening on ${port}`));
