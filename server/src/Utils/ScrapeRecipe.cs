using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace server.Utils
{
    public static class Scraper
    {
        static readonly HttpClient client = new();
        public static Task<Recipe> RunScraPer(string url)
        {
            throw new NotImplementedException();
        }

        public class Recipe
        {
        }
    }
}