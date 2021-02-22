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


namespace server.Utils
{

    public static class Parser
    {
        static readonly HttpClient client = new();
        public static async Task<ParserResult> RunParser(string ingredient)
        {
            string uri = "http://localhost:3005/";

            List<string> payload = new() { ingredient };
            HttpResponseMessage response = await client.PostAsJsonAsync(
                uri, payload
            );
            response.EnsureSuccessStatusCode();
            var parsedResponse = await response.Content.ReadFromJsonAsync<ParserResult>();
            Console.WriteLine("parser res: " + parsedResponse.Name);
            return parsedResponse;

        }
    }

#nullable enable
    public class ParserResult
    {
        public string? Qty { get; set; }
        public string? Unit { get; set; }
        public string Name { get; set; } = String.Empty;
        public string? Other { get; set; }
        public string? Comment { get; set; }
        public string Input { get; set; } = String.Empty;

        // public ParserResult(string? _qty, string? _unit, string _name, string? _other, string? _comment, string _input)
        // {
        //     qty = _qty;
        //     unit = _unit;
        //     name = _name;
        //     other = _other;
        //     comment = _comment;
        //     input = _input;
        // }
    }
}