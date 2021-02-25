using System;
using System.Collections.Generic;
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
        public InsertRecipeControllerTest(CustomWebApplicationFactory<Startup> factory) : base(factory)
        {
        }

        [Fact]
        public async Task InsertRecipeShouldReturnId()
        {
            //Given
            var client = _factory.CreateClient();
            client.DefaultRequestHeaders.Authorization =
                new AuthenticationHeaderValue("Bearer", Utilities.Token);
            //When
            InsertRecipeInput reqBody = new()
            {
                input = new()
                {
                    title = "test recipe from xUnit",
                    ingredients = new List<string>() { "1 lbs beef" }
                }
            };
            var response = await client.PostAsJsonAsync("/api/InsertRecipe", reqBody);
            //Then
            response.EnsureSuccessStatusCode();
            Assert.NotNull(response.Content);

            var body = await response.Content.ReadFromJsonAsync<InsertRecipeResponse>();

            Assert.True(body.Id is string);

            var recipe = _context.Recipes.Find(new Guid(body.Id));
            Console.WriteLine(recipe.Title);
        }

        class InsertRecipeResponse
        {
            public string Id { get; set; }
        }
    }
}