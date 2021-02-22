using System;
using System.Collections.Generic;
using System.Linq;
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
    public class ParseIngredientController : ControllerBase
    {
        private readonly PostgresContext _context;

        public ParseIngredientController(PostgresContext context)
        {
            _context = context;
        }

        // GET: api/ParseIngredient/5
        [HttpPost]
        public async Task<ActionResult<string>> GetRecipeIngredient(string[] ingredients)
        {
            string ingredient = ingredients[0];
            if (String.IsNullOrEmpty(ingredient))
            {
                return NotFound();
            }
            return (await Parser.RunParser(ingredient)).Input;
        }

    }
}
