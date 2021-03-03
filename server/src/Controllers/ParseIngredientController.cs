using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using server.Models;
using server.Utils;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParseIngredientController : ControllerBase
    {

        private readonly IConfiguration _configuration;

        public ParseIngredientController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        public async Task<ActionResult<string>> GetRecipeIngredient(string[] ingredients)
        {
            string ingredient = ingredients[0];
            if (String.IsNullOrEmpty(ingredient))
            {
                return NotFound();
            }
            return (await Parser.RunParser(ingredient, configuration: _configuration)).RawText;
        }

    }
}
