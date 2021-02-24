using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Models;
using server.Utils;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ScraperController : ControllerBase
    {
        private readonly PostgresContext _context;

        public ScraperController(PostgresContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<object>> ScrapeRecipe(ScraperInput scraperInput)
        {
            string url = scraperInput.input.url;

            try
            {
                Recipe recipe = await Scraper.RunScraper(url);
                var userId = ParseUserId.GetUserId(Request.Headers);

                recipe.Owner = userId;

                // insert ot db
                _context.Recipes.Add(recipe);
                await _context.SaveChangesAsync();

                return Ok(new { id = recipe.Id });
            }
            catch (System.OperationCanceledException e)
            {
                return BadRequest(e.Message);
            }

        }


    }
}
