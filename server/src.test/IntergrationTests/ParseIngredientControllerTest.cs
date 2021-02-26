using System.Collections.Generic;
using System.Net.Http.Json;
using System.Threading.Tasks;
using server;
using Xunit;

namespace src.test
{
    [Collection("intergration test")]
    public class ParseIngredientControllerTest : DbContextFixture
    {

        public ParseIngredientControllerTest(CustomCollectionFixture factory) : base(factory)
        {
        }

        [Fact]
        public async Task ParseIngredientReturnParsedIngredient()
        {
            var res = await Client.PostAsJsonAsync("/api/ParseIngredient", new List<string>() { "1 lbs egg" });
            //Then
            res.EnsureSuccessStatusCode();
            Assert.NotNull(res.Content);
        }
    }
}