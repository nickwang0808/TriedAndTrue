import { gql, useMutation } from "@apollo/client";
import {
  DeleteRecipeOneMutation,
  DeleteRecipeOneMutationVariables,
} from "../../generated/graphql";

export const DELETE_RECIPE = gql`
  mutation DeleteRecipeOne($id: String!) {
    delete_recipe_by_pk(id: $id) {
      id
    }
  }
`;

export default function useDeleteRecipe() {
  const [deleteRecipe, { data, loading, error }] = useMutation<
    DeleteRecipeOneMutation,
    DeleteRecipeOneMutationVariables
  >(DELETE_RECIPE);

  return { deleteRecipe, data, loading, error };
}
