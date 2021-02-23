using Microsoft.AspNetCore.Mvc.Testing;
using server;
using Xunit;

namespace src.test
{
    [CollectionDefinition("intergration test")]
    public class IntergrationTestSetup : ICollectionFixture<WebApplicationFactory<Startup>>
    { }
}