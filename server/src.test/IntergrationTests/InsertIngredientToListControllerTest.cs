using Xunit;

namespace src.test
{
    [Collection("intergration test")]
    public class InsertIngredientToListControllerTest : DbContextFixture
    {
        public InsertIngredientToListControllerTest(CustomWebApplicationFactory<server.Startup> factory)
            : base(factory)
        { }

        [Fact]
        public void TestName()
        {
            //Given

            //When

            //Then
        }

    }
}