import client from "../config/apoloConfig";
import { ParseIngredientsQuery, ParseIngredientsQueryResult, ParseIngredientsQueryVariables } from "../generated/graphql";
import { PARSE_Ingredients } from "../gql/query/parseIngredients.graphql";

export default async function parseIngredientAndStringify(ingredientRawText: string
) {


  const result = (await client.query<
    ParseIngredientsQuery,
    ParseIngredientsQueryVariables
  >({
    fetchPolicy: "no-cache",
    query: PARSE_Ingredients,
    variables: { ingredients: [ingredientRawText] },
  })) as ParseIngredientsQueryResult;
  
  const {data} = result
  
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
