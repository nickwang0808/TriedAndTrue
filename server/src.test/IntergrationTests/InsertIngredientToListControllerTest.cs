using Xunit;

namespace src.test
{
    [Collection("intergration test")]
    public class InsertIngredientToListControllerTest : DbContextFixture
    {
        public InsertIngredientToListControllerTest(CustomCollectionFixture factory)
            : base(factory)
        { }

        [Fact]
        public void TestName()
        {
            Assert.True(true);
        }

    }
}