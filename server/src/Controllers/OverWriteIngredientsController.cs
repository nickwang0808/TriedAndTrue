using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
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
    public class OverWriteIngredientsController : ControllerBase
    {
        private readonly PostgresContext _context;


        private readonly IConfiguration _configuration;


        public OverWriteIngredientsController(PostgresContext context, IConfiguration configuration)
        {
            _configuration = configuration;
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<object>> PostRecipeIngredient(OverWriteIngredientsInput reqBody)
        {
            string recipe_id = reqBody.input.recipe_id;
            ICollection<string> ingredientsStrings = reqBody.input.ingredientsStrings;
            // ensure recipe exists
            if (!RecipeExists(recipe_id))
            {
                return NotFound();
            }
            if (ingredientsStrings.Count == 0)
            {
                return Ok(new List());
            }
            // delete everything related to recipe id
            _context.RecipeIngredients.RemoveRange(_context.RecipeIngredients
                .Where(ingredient => ingredient.RecipeId.ToString() == recipe_id));
            // parse the new ingredients
            ICollection<RecipeIngredient> recipeIngredients = (await Task.WhenAll(ingredientsStrings.
            Select((ing, i) => Parser.RunParser(ing, _configuration, i)))).ToList();
            // insert in
            foreach (var ingredient in recipeIngredients)
            {
                ingredient.RecipeId = new Guid(recipe_id);
            }

            _context.RecipeIngredients.AddRange(recipeIngredients);
            await _context.SaveChangesAsync();

            // return all ids
            var response = recipeIngredients
                .Select(ing => new { id = ing.Id })
                .ToList();

            return Ok(response);
        }

        private bool RecipeExists(string id)
        {
            return _context.Recipes.Any(e => e.Id.ToString() == id);
        }
    }
}
