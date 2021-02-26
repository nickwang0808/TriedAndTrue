using System.Linq;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using Microsoft.Extensions.Logging;
using server.Models;
using Npgsql.EntityFrameworkCore.PostgreSQL;

namespace src.test
{
    public class CustomWebApplicationFactory<TStartup>
   : WebApplicationFactory<TStartup> where TStartup : class
    {
        protected override void ConfigureWebHost(IWebHostBuilder builder)
        {
            builder.ConfigureServices(services =>
            {
                var descriptor = services.SingleOrDefault(
                    d => d.ServiceType ==
                        typeof(DbContextOptions<PostgresContext>));

                services.Remove(descriptor);

                services.AddDbContext<PostgresContext>(options =>
                {
                    options.UseNpgsql("Host=127.0.0.1;Port=5432;Database=test;Username=postgres;Password=postgrespassword");
                });

                var sp = services.BuildServiceProvider();

                using var scope = sp.CreateScope();
                var scopedServices = scope.ServiceProvider;
                var db = scopedServices.GetRequiredService<PostgresContext>();
                var logger = scopedServices
                    .GetRequiredService<ILogger<CustomWebApplicationFactory<TStartup>>>();
                db.Database.EnsureDeleted();
                db.Database.EnsureCreated();

                try
                {
                    Utilities.InitializeDbForTests(db);
                }
                catch (Exception ex)
                {
                    logger.LogError(ex, "An error occurred seeding the " +
                        "database with test messages. Error: {Message}", ex.Message);
                }
            });
        }
    }
}