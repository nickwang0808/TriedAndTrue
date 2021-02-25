using Microsoft.Extensions.DependencyInjection;
using server;
using System;
using server.Models;

namespace src.test
{
    public class DbContextFixture : IDisposable
    {
        public readonly CustomWebApplicationFactory<Startup> _factory;
        // todo: implement db clean up
        public PostgresContext _context;
        public DbContextFixture(CustomWebApplicationFactory<Startup> factory)
        {
            _factory = factory;

            var scopeFactory = _factory.Services.GetService<IServiceScopeFactory>();
            var scope = scopeFactory.CreateScope();
            _context = scope.ServiceProvider.GetService<PostgresContext>();
        }

        public void Dispose()
        {
            _context.Dispose();
            GC.SuppressFinalize(this);
        }
    }

}