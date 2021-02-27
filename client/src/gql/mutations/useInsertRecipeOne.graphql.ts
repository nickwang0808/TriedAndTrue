import { gql, useMutation } from "@apollo/client";
import {
  InsertRecipeMutation,
  InsertRecipeMutationVariables,
} from "../../generated/graphql";

export const INSERT_RECIPE_ONE = gql`
  mutation InsertRecipe(
    $cuisine: String
    $directions: json
    $img: String
    $ingredients: [String!]
    $meal_type: String
    $title: String!
    $total_time: Int
    $yields: String
  ) {
    insertRecipeOneDerived(
      cuisine: $cuisine
      directions: $directions
      img: $img
      ingredients: $ingredients
      meal_type: $meal_type
      title: $title
      total_time: $total_time
      yields: $yields
    ) {
      recipe {
        id
        title
        img
        total_time
      }
    }
  }
`;

export default function useInsertRecipeOne() {
  const [
    insertRecipeOne,
    { loading: loading_insert, data: data_insert, error: error_insert },
  ] = useMutation<InsertRecipeMutation, InsertRecipeMutationVariables>(
    INSERT_RECIPE_ONE,
    {
      update: (cache, { data }) => {
        if (!data) return;
        cache.modify({
          fields: {
            [`recipe:{"where":{"title":{"_ilike":"%%"}}}`]: (
              curr,
              { toReference }
            ) => {
              return [
                toReference(data.insertRecipeOneDerived!.recipe!),
                ...curr,
              ];
            },
          },
        });
      },
    }
  );

  return {
    insertRecipeOne,
    loading_insert,
    data_insert,
    error_insert,
  };
}
