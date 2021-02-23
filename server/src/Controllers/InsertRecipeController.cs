using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Models;
using System.Net;
using server.Utils;
using System.Net.Http;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InsertRecipeController : ControllerBase
    {
        private readonly PostgresContext _context;

        public InsertRecipeController(PostgresContext context)
        {
            _context = context;
        }

        // POST: api/InsertRecipe
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<object> PostRecipe(RecipeInput recipeInputRaw)
        {
            var userId = ParseUserId.GetUserId(Request.Headers);

            var recipeInput = recipeInputRaw.input;

            // parse the ingredient text and map it
            List<RecipeIngredient> recipeIngredients = new();
            if (recipeInput.ingredients is not null)
            {
                recipeIngredients = (await Task.WhenAll(recipeInput.ingredients.Select
                    (ingredient => Parser.RunParser(ingredient))))
                    .Select((ingredient, i) => new RecipeIngredient()
                    {
                        Name = ingredient.Name,
                        Unit = ingredient.Unit,
                        Comment = ingredient.Comment,
                        RawText = ingredient.Input,
                        // TODO: implemen text formating
                        FormattedText = ingredient.Input,
                        Other = ingredient.Other,
                        Index = i,
                        Quantity = ingredient.Qty
                    }).ToList();
            }

            // map everything to their proper location for db write
            Recipe recipe = new()
            {
                Directions = recipeInput.directions,
                Owner = userId,
                Img = recipeInput.img,
                TotalTime = recipeInput.total_time,
                Yields = recipeInput.yields,
                Cuisine = recipeInput.cuisine,
                MealType = recipeInput.meal_type,
                Title = recipeInput.title,
                RecipeIngredients = recipeIngredients
            };


            _context.Recipes.Add(recipe);
            await _context.SaveChangesAsync();
            return new { id = recipe.Id };
        }
    }
}
