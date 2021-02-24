using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using server.Models;


namespace server.Utils
{
    public static class Parser
    {
        static readonly HttpClient client = new();
        public static async Task<RecipeIngredient> RunParser(string ingredient, int i = 0)
        {
            string uri = "http://localhost:3005/";

            List<string> payload = new() { ingredient };
            HttpResponseMessage response = await client.PostAsJsonAsync(
                uri, payload
            );
            response.EnsureSuccessStatusCode();
            var parsedResponse = await response.Content.ReadFromJsonAsync<ParserResult>();
            return new RecipeIngredient()
            {
                Name = parsedResponse.Name,
                Unit = parsedResponse.Unit,
                Comment = parsedResponse.Comment,
                RawText = parsedResponse.Input,
                // TODO: implemen text formating
                FormattedText = parsedResponse.Input,
                Other = parsedResponse.Other,
                Index = i,
                Quantity = parsedResponse.Qty
            };
        }

    }

    public class ParserResult
    {
        public string Qty { get; set; }
        public string Unit { get; set; }
        public string Name { get; set; } = String.Empty;
        public string Other { get; set; }
        public string Comment { get; set; }
        public string Input { get; set; } = String.Empty;
    }
}