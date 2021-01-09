import express from "express";
import formatIngredients from "./routes/formatIngredients";
import overWriteIngredient from "./routes/overWriteIngredients";
import parseIngredientToString from "./routes/parseIngredients";

const app = express();
const port = 5001;

app.use(express.json());

app.use("/ingredients", parseIngredientToString);
app.use("/format-ingredients", formatIngredients);
app.use("/overwrite-ingredients", overWriteIngredient);

app.listen(port, () => console.log(`server is listening on ${port}`));
