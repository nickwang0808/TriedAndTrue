using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
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
        private readonly ILogger _logger;
        public ScraperController(
            PostgresContext context,
            IConfiguration configuration,
            ILogger<ScraperController> logger
            )
        {
            _context = context;
            _configuration = configuration;
            _logger = logger;
        }

        [HttpPost]
        public async Task<ActionResult<object>> ScrapeRecipe(ScraperInput scraperInput)
        {
            bool dbGood = _context.Database.CanConnect();
            if (!dbGood)
            {
                string msg = "unable to connect to database";
                _logger.LogError(msg);
                return Problem(msg);
            }
            _logger.LogInformation("db connection good");
            try
            {
                string url = scraperInput.input.url;
                _logger.LogInformation($"target is {url}, starting scraper now");
                Recipe recipe = await Scraper.RunScraper(url, _configuration);
                string userId = ParseUserId.GetUserId(Request.Headers);

                recipe.Owner = userId;
                _logger.LogInformation($"recipe scraped, title is ${recipe.Title}");

                // insert ot db
                _context.Recipes.Add(recipe);
                await _context.SaveChangesAsync();
                _logger.LogInformation($"recipe ${recipe.Title} written to DB");

                return Ok(new { id = recipe.Id });
            }
            catch (System.Exception e)
            {
                _logger.LogError(e.Message);
                return BadRequest(e.Message);
            }

        }


    }
}
