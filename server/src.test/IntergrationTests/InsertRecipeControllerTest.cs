using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Threading.Tasks;
using server;
using server.Models;
using src.test;
using Xunit;

namespace sec.test
{
    [Collection("intergration test")]
    public class InsertRecipeControllerTest : DbContextFixture
    {
        public InsertRecipeControllerTest(CustomCollectionFixture factory)
            : base(factory)
        {
        }

        [Fact]
        public async Task InsertRecipeShouldReturnId()
        {
            InsertRecipeInput reqBody = new()
            {
                input = new()
                {
                    title = "test recipe from xUnit",
                    ingredients = new List<string>() { "1 lbs beef" }
                }
            };
            var response = await Client.PostAsJsonAsync("/api/InsertRecipe", reqBody);
            //Then
            response.EnsureSuccessStatusCode();
            Assert.NotNull(response.Content);

            var body = await response.Content.ReadFromJsonAsync<ResponseWithIdOnly>();

            Assert.True(body.Id is string);

            var recipe = Context.Recipes.Find(new Guid(body.Id));
            Console.WriteLine(recipe.Title);
        }
    }
}