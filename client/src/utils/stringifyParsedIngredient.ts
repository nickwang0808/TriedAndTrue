import { ParseIngredientsQuery } from "../generated/graphql";

export default function stringifyParsedIngredient(
  data: ParseIngredientsQuery | undefined
) {
  if (!data) return null;
  if (!data.parseIngredients[0].name) {
    throw new Error("No ingredient name found in request result");
  }

  const {
    name,
    quantity_numerator,
    quantity_denominator,
    unit,
  } = data.parseIngredients[0];

  let quantity: number | string;
  if (!quantity_numerator || !quantity_denominator) {
    quantity = "";
  } else {
    quantity = quantity_numerator / quantity_denominator;
  }

  return `${quantity} ${unit || ""} ${name || ""}`;
}
