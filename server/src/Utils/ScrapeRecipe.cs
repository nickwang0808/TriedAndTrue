using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using server.Models;
using System.Text.Json;
using server;
using Microsoft.Extensions.Configuration;


namespace server.Utils
{
    public static class Scraper
    {
        private static readonly HttpClient client = new();

        public static async Task<Recipe> RunScraper(string url,
        IConfiguration configuration
        )
        {
            string scraperUrl = configuration.GetValue<string>("scraper");

            HttpResponseMessage response = await client.PostAsJsonAsync(scraperUrl, new { url });
            ScraperOutput scraperResponse = await response.Content.ReadFromJsonAsync<ScraperOutput>();
            if (String.IsNullOrEmpty(scraperResponse.title))
            {
                throw new OperationCanceledException("unable to import data from this data source");
            }

            List<RecipeIngredient> parsedIngredient = (await Task.WhenAll(
                scraperResponse.ingredients.Select((ing, i) => Parser.RunParser(ing, configuration, i))))
                .ToList();

            // check for empty response
            // map the result
            return new Recipe()
            {
                Title = scraperResponse.title,
                TotalTime = scraperResponse.total_time,
                Yields = scraperResponse.yields,
                Directions = JsonSerializer.Serialize(scraperResponse.instructions),
                Img = scraperResponse.image,
                RecipeIngredients = parsedIngredient
            };
        }


        public class ScraperOutput
        {
            public string title { get; set; }
            public int total_time { get; set; }
            public string yields { get; set; }
            public ICollection<string> ingredients { get; set; }
            public ICollection<string> instructions { get; set; }
            public string image { get; set; }
        }
    }
}