import { parseIngredient } from "ingredient-parser";

type IParserReturnType = ReturnType<typeof parseIngredient>;

export default function stringifyFormattedIngredients(
  parsedIngredient: IParserReturnType
) {
  const {
    quantity_denominator,
    quantity_numerator,
    name,
    unit,
    optional,
    preparation,
  } = parsedIngredient;

  let quantity: number | string;
  if (!quantity_numerator || !quantity_denominator) {
    quantity = "";
  } else {
    quantity = quantity_numerator / quantity_denominator;
  }

  return `${quantity} ${unit || ""} ${name || ""} ${preparation || ""} ${
    optional ? "optional" : ""
  }`.trim();
}
