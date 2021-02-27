using System.Net.Http.Json;
using Microsoft.AspNetCore.Http;
using Xunit;
using server.Models;
using System.Linq;
using System.Collections.Generic;
using System.Text.Json;

namespace src.test
{
    [Collection("intergration test")]
    public class InsertIngredientToListControllerTest : DbContextFixture
    {
        public InsertIngredientToListControllerTest(CustomCollectionFixture factory)
            : base(factory)
        { }

        /* unable to test due to initial entity scafolding didn't retreive all the nessesary info. see warning in 
        line 59 : src/Models/PostgresContext.cs  */
        // [Fact]
        public async void TestName()
        {

            List list = Context.Lists.First();
            Assert.NotNull(list);
            RecipeIngredient recipeIngredient = Context.RecipeIngredients.First();
            Recipe recipe = Context.Recipes.First();

            var res = await Client.PostAsJsonAsync<InsertIngredientsToListInput>
                ("/api/InsertIngredientsToList",
                    new()
                    {
                        input = new InsertIngredientsToListArgs()
                        {
                            shoppingListId = list.Id.ToString(),
                            ingredientsToAddToList = new List<IngredientsToAddToList>()
                            {
                                new IngredientsToAddToList()
                                {
                                    date = "2021-02-26",
                                    ingredientIds = new List<string>() {recipeIngredient.Id.ToString()},
                                    recipe_id = recipe.Id.ToString(),
                                    recipe_index = 5,
                                }
                            }
                        }
                    }
                );

            ICollection<ResponseWithIdOnly> addedListItem = await res.Content.ReadFromJsonAsync<ICollection<ResponseWithIdOnly>>();
            Assert.True(addedListItem.Count == 1,
                "there should only be one id retured becuase only one was posted");
            Assert.True(Context.ListItems.First().Name == recipeIngredient.Name,
                "inserted list item's name should be the same as the recipe ingredient first retrieved");

        }

    }
}