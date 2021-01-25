import { gql, useMutation } from "@apollo/client";
import {
  InsertRecipeMutation,
  InsertRecipeMutationVariables,
} from "../../generated/graphql";

export const INSERT_RECIPE_ONE = gql`
  mutation InsertRecipe($object: insertRecipeOneDerivedInput!) {
    insertRecipeOneDerived(object: $object) {
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
