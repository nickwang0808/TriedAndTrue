import express from "express";
import formatIngredients from "./routes/formatIngredients";
import parseIngredientToString from "./routes/parseIngredients";
const app = express();
const port = 5001;

app.use(express.json());

app.use("/ingredients", parseIngredientToString);
app.use("/format-ingredients", formatIngredients);

app.listen(port, () => console.log(`server is listening on ${port}`));
