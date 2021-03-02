using System;
using Xunit;
using server.Utils;
using Microsoft.AspNetCore.Http;
using server.Models;
using server.Controllers;

namespace src.test
{

    public class UnitTest1
    {

        [Fact]
        public void ItShouldExtractUserIdFromAuthToken()
        {
            var httpContext = new DefaultHttpContext();
            httpContext.Request.Headers["authorization"] = $"Bearer {Utilities.Token}";

            string userId = ParseUserId.GetUserId(httpContext.Request.Headers);
            Assert.Equal("JEFe2Smd7lOtw4OEBe2vovG8OzH2", userId);

        }

        // [Fact]
        // public async void ItShouldParseIngredient()
        // {
        //     string input = "1lbs beef";
        //     var result = await Parser.RunParser(input);
        //     Console.WriteLine(result);
        //     // TODO: fix this
        //     Assert.True(result.Name == "beef");
        //     Assert.True(result.Quantity == "1");
        //     Assert.True(result.Unit == "pound");
        // }

        // [Fact]
        // public async void ItShouldScrapeRecipeFromSite()
        // {
        //     //Given
        //     string urlToTest = "https://www.allrecipes.com/recipe/158968/spinach-and-feta-turkey-burgers/";
        //     //When
        //     Recipe recipe = await Scraper.RunScraper(urlToTest);
        //     //Then
        //     Assert.True(recipe.Title == "Spinach and Feta Turkey Burgers", "title should match");
        //     Assert.True(recipe.TotalTime == 35, "totalTime should match");
        //     Assert.True(recipe.MealType is null, "meal type should be unset and null");
        //     Assert.True(recipe.RecipeIngredients.Count == 5, "there should be 5 ingredients related to this recipe");
        // }
    }
}
