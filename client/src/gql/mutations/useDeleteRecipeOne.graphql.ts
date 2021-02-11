import { gql, useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import {
  DeleteRecipeOneMutation,
  DeleteRecipeOneMutationVariables,
} from "../../generated/graphql";
import { setRecipeDetailsId } from "../../redux/RecipeDetailsSlice/recipeDetailsSlice";

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

  const dispatch = useDispatch();

  const handleDeleteRecipe = (id: string | null) => {
    if (!id) return;
    const idInMem = id;

    dispatch(setRecipeDetailsId(null));

    deleteRecipe({
      variables: { id },

      optimisticResponse: {
        __typename: "mutation_root",
        delete_recipe_by_pk: {
          id: idInMem,
          __typename: "recipe",
        },
      },
      update: (cache, { data }) => {
        /*update function will throw data is undefined err,
         maybe add conditional chain to data*/
        if (!data || !data.delete_recipe_by_pk) return;
        const { id } = data.delete_recipe_by_pk;
        cache.modify({
          // id: `recipe:${id}`,
          fields: {
            [`recipe:{"where":{"title":{"_ilike":"%%"}}}`]: (
              curr,
              { readField }
            ) => {
              console.log(curr);
              // return [...curr];
              return curr.filter((elem: any) => readField("id", elem) !== id);
            },
          },
        });
      },
    });
  };

  return { handleDeleteRecipe, data, loading, error };
}
