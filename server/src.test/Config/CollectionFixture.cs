using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Runtime.InteropServices;
using Microsoft.Extensions.DependencyInjection;
using server;
using server.Models;
using Xunit;

namespace src.test
{

    public class CustomCollectionFixture : CustomWebApplicationFactory<Startup>
    {
        private readonly PostgresContext _context;
        private readonly HttpClient _client;
        public PostgresContext Context { get => _context; }
        public HttpClient Client { get => _client; }

        public CustomCollectionFixture()
        {
            var scopeFactory = Services.GetService<IServiceScopeFactory>();
            var scope = scopeFactory.CreateScope();
            _context = scope.ServiceProvider.GetService<PostgresContext>();

            // setup a shared client with proper auth header
            _client = CreateClient();
            _client.DefaultRequestHeaders.Authorization =
                new AuthenticationHeaderValue("Bearer", Utilities.Token);
        }

        private bool _disposed = false;
        // Protected implementation of Dispose pattern.
        protected override void Dispose(bool disposing)
        {
            if (_disposed)
            {
                return;
            }

            if (disposing)
            {
                var isDbDeleted = _context.Database.EnsureDeleted();
                if (isDbDeleted)
                {
                    Console.WriteLine("db deleted");
                }
                _context.Dispose();
                Console.WriteLine("dispose from CustomCollectionFixture");
                // Dispose managed state (managed objects).
            }

            _disposed = true;

            // Call base class implementation.
            base.Dispose(disposing);
        }
    }

    /* all "intergration test" collection class should derive from this class to gain access
    to dbContext and configured httpclient, this way the connection is opened once and the entire db
    is dropped after the test completes */
    public class DbContextFixture
    {
        private readonly PostgresContext _context;
        private readonly HttpClient _client;
        public PostgresContext Context { get => _context; }
        public HttpClient Client { get => _client; }
        public DbContextFixture(CustomCollectionFixture factory)
        {
            _context = factory.Context;
            _client = factory.Client;
        }
    }

    [CollectionDefinition("intergration test")]
    public class IntergrationTestSetup : ICollectionFixture<CustomCollectionFixture>
    { }
}