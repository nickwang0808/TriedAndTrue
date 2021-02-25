using Microsoft.Extensions.DependencyInjection;
using server;
using System;
using server.Models;
using System.Net.Http;
using System.Net.Http.Headers;

namespace src.test
{
    public class DbContextFixture : IDisposable
    {
        private readonly CustomWebApplicationFactory<Startup> _factory;
        private readonly HttpClient _client;
        // todo: implement db clean up
        private readonly PostgresContext _context;

        public CustomWebApplicationFactory<Startup> Factory { get => _factory; }
        public HttpClient Client { get => _client; }
        public PostgresContext Context { get => _context; }

        public DbContextFixture(CustomWebApplicationFactory<Startup> factory)
        {
            _factory = factory;

            // setup db context to tests to use
            var scopeFactory = _factory.Services.GetService<IServiceScopeFactory>();
            var scope = scopeFactory.CreateScope();
            _context = scope.ServiceProvider.GetService<PostgresContext>();

            // setup a shared client with proper auth header
            _client = _factory.CreateClient();
            _client.DefaultRequestHeaders.Authorization =
            new AuthenticationHeaderValue("Bearer", Utilities.Token);
        }

        public void Dispose()
        {
            _context.Dispose();
            GC.SuppressFinalize(this);
        }
    }

}