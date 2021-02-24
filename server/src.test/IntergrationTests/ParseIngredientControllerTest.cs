using System.Collections.Generic;
using System.Net.Http.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Testing;
using server;
using Xunit;

namespace src.test
{
    [Collection("intergration test")]
    public class ParseIngredientControllerTest
    {
        private readonly CustomWebApplicationFactory<Startup> _factory;

        public ParseIngredientControllerTest(CustomWebApplicationFactory<Startup> factory)
        {
            _factory = factory;
        }

        [Fact]
        public async Task ParseIngredientReturnParsedIngredient()
        {
            //Given
            var client = _factory.CreateClient();
            //When
            var res = await client.PostAsJsonAsync("/api/ParseIngredient", new List<string>() { "1 lbs egg" });
            //Then
            res.EnsureSuccessStatusCode();
            Assert.NotNull(res.Content);
        }
    }
}