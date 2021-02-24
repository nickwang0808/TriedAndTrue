using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Models;
using server.Utils;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OverWriteIngredientsController : ControllerBase
    {
        private readonly PostgresContext _context;

        public OverWriteIngredientsController(PostgresContext context)
        {
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
                .Where(ingredient => ingredient.RecipeId == recipe_id));
            // parse the new ingredients
            ICollection<RecipeIngredient> recipeIngredients = (await Task.WhenAll(ingredientsStrings.
            Select(Parser.RunParser))).ToList();
            // insert in
            foreach (var ingredient in recipeIngredients)
            {
                ingredient.RecipeId = recipe_id;
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
            return _context.Recipes.Any(e => e.Id == id);
        }
    }
}
