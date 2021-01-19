import { gql, useMutation } from "@apollo/client";
import {
  ImportRecipeMutation,
  ImportRecipeMutationVariables,
} from "../../generated/graphql";

export const IMPORT_RECIPE = gql`
  mutation ImportRecipe($url: String!) {
    importRecipe(url: $url) {
      recipe {
        id
        img
        total_time
        title
      }
    }
  }
`;

export default function useImportRecipe() {
  const [importRecipe, { data, loading, error }] = useMutation<
    ImportRecipeMutation,
    ImportRecipeMutationVariables
  >(IMPORT_RECIPE, {
    update: (cache, { data }) => {
      if (!data?.importRecipe) return;
      const { recipe } = data.importRecipe;
      cache.modify({
        fields: {
          [`recipe({"order_by":{"created_at":"desc_nulls_last"},"where":{"title":{"_like":"%%"}}})`]: (
            curr,
            { toReference }
          ) => {
            return [toReference(recipe!), ...curr];
          },
        },
      });
    },
  });

  return {
    importRecipe,
    data,
    loading,
    error,
  };
}
