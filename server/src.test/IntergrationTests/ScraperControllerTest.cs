using System;
using System.Collections.Generic;
using System.Net.Http.Json;
using System.Threading.Tasks;
using server;
using server.Models;
using Xunit;
using System.Linq;
namespace src.test
{
    [Collection("intergration test")]
    public class ScraperControllerTest : DbContextFixture
    {

        private readonly string url = "https://www.allrecipes.com/recipe/158968/spinach-and-feta-turkey-burgers/";
        public ScraperControllerTest(CustomWebApplicationFactory<Startup> factory) : base(factory)
        {
        }

        [Fact]
        public async Task Post_ScraperShouldScrapAndWriteToDb()
        {
            //Given
            //When
            var res = await Client.PostAsJsonAsync("/api/Scraper",
                new { input = new { url } }
            );
            //Then
            res.EnsureSuccessStatusCode();
            Assert.NotNull(res.Content);

            string Id = (await res.Content.ReadFromJsonAsync<ResponseWithIdOnly>()).Id;
            Recipe recipe = Context.Recipes.Find(new Guid(Id));
            Assert.True(recipe.Title == "Spinach and Feta Turkey Burgers", "title should match");
            Assert.True(recipe.TotalTime == 35, "totalTime should match");
            Assert.True(recipe.MealType is null, "meal type should be unset and null");
            /* the first db query did not find the ingredients for the recipe 
            performing manual db query to get the ingredients*/
            List<RecipeIngredient> ingredients = Context.RecipeIngredients
                .Where(ing => ing.RecipeId.ToString() == Id).ToList();
            Assert.True(ingredients.Count == 5, "there should be 5 ingredients related to this recipe");
        }
    }
}