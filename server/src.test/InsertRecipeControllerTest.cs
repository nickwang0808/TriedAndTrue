using System;
using System.Collections.Generic;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Testing;
using server;
using server.Models;
using src.test;
using Xunit;

namespace sec.test
{
    [Collection("intergration test")]
    public class InsertRecipeControllerTest
    {
        private readonly WebApplicationFactory<Startup> _factory;
        // todo: implement db clean up

        public InsertRecipeControllerTest(WebApplicationFactory<Startup> factory)
        {
            _factory = factory;
        }

        [Fact]
        public async Task ParseIngredient()
        {
            //Given
            var client = _factory.CreateClient();
            client.DefaultRequestHeaders.Authorization =
                new AuthenticationHeaderValue("Bearer", Config.Token);
            //When
            RecipeInput reqBody = new()
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
            Assert.True((await response.Content.ReadFromJsonAsync<InsertRecipeResponse>()).Id is string);
        }

        class InsertRecipeResponse
        {
            public string Id { get; set; }
        }

        // public void Dispose(int recipeId)
        // {
        //     // run query to remove the recipe inserted
        // }
    }
}