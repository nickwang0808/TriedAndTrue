import client from "../config/apoloConfig";
import {
  ParseIngredientsQuery,
  ParseIngredientsQueryResult,
  ParseIngredientsQueryVariables,
} from "../generated/graphql";
import { PARSE_Ingredients } from "../gql/query/parseIngredients.graphql";

export default async function parseIngredientAndStringify(
  ingredientRawText: string
) {
  const { data, loading, error } = (await client.query<
    ParseIngredientsQuery,
    ParseIngredientsQueryVariables
  >({
    fetchPolicy: "no-cache",
    query: PARSE_Ingredients,
    variables: { ingredientsArray: [ingredientRawText] },
  })) as ParseIngredientsQueryResult;

  if (error) throw new Error(error.message);

  if (!data) return ingredientRawText;
  // if (!data.parseIngredients[0].name) {
  //   throw new Error("No ingredient name found in request result");
  // }

  const { name } = data.parseIngredients[0];

  return name;
}
