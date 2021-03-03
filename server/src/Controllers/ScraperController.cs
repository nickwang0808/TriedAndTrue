using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using server.Models;
using server.Utils;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ScraperController : ControllerBase
    {
        private readonly PostgresContext _context;
        private readonly IConfiguration _configuration;

        public ScraperController(PostgresContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpPost]
        public async Task<ActionResult<object>> ScrapeRecipe(ScraperInput scraperInput)
        {
            string url = scraperInput.input.url;

            try
            {
                Recipe recipe = await Scraper.RunScraper(url, _configuration);
                string userId = ParseUserId.GetUserId(Request.Headers);

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
