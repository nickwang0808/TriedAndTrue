using server;
using System.Collections.Generic;
using System.Net.Http.Json;
using Xunit;
using server.Models;
using System.Linq;
using System.Net.Http;

namespace src.test
{
    [Collection("intergration test")]
    public class OverwriteIngredientControllerTest : DbContextFixture
    {
        public OverwriteIngredientControllerTest(CustomCollectionFixture factory) : base(factory)
        {
        }

        [Fact]
        public async void Post_ShouldOverwriteIngredientOnRecipe()
        {

            Recipe recipe = Context.Recipes.First();
            //Given
            HttpResponseMessage res = await Client.PostAsJsonAsync
                ("/api/OverWriteIngredients",
                new OverWriteIngredientsInput()
                {
                    input = new OverWriteIngredientsArgs()
                    {
                        recipe_id = recipe.Id.ToString(),
                        ingredientsStrings = new List<string>() {
                            "1 lb beef",
                            "2 cup milk",
                        }
                    }
                });

            _ = res.EnsureSuccessStatusCode();
            List<string> newIngredientIds = (await res.Content.ReadFromJsonAsync<ICollection<ResponseWithIdOnly>>())
                .Select(ing => ing.Id)
                .ToList();

            foreach (string Id in newIngredientIds)
            {
                Assert.True(!string.IsNullOrEmpty(Id),
                    "the id of the ingredient returned by the server is not empty");
            }

            List<RecipeIngredient> ingredients = Context.RecipeIngredients
                .Where(ing => ing.RecipeId == recipe.Id)
                .ToList();
            //When
            Assert.True(ingredients.Count == 2, "the old ingredient should be replaced by the 2 new ones");
            //Then
        }

    }
}