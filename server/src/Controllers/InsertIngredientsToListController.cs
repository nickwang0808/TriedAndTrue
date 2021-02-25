using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Models;
using System.Net.Http.Json;
using System.Text.Json;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InsertIngredientsToListController : ControllerBase
    {
        private readonly PostgresContext _context;

        public InsertIngredientsToListController(PostgresContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<ICollection<object>>> PostRecipeIngredient(InsertIngredientsToListInput reqBody)
        {
            List<string> ingredientIds = reqBody.input.ingredientsToAddToList
                .Select(ing => ing.ingredientIds)
                .SelectMany(x => x) // flatten the 2d Collection
                .ToList();

            string listId = reqBody.input.shoppingListId;
            if (ingredientIds.Count == 0)
            {
                return Problem("No ingredient related to these recipe");
            }

            // first retrieve the ingredients related to the ingredient id
            List<RecipeIngredient> recipeIngredients = (from ing in _context.RecipeIngredients
                                                        where ingredientIds.Contains(ing.Id.ToString())
                                                        select ing).ToList();

            // duplicate map it to listitem model because we don't want any relationship between them after add
            var IngredientsToAddToList = reqBody.input.ingredientsToAddToList;

            #region normalize the input data
            List<ListItem> listItems = new();
            /* because ingredientIds are in a 2d collection, we are looping it twice and map the recipe info
            in the first level with the actual ingredient info on the second level to the ListItem model,
            then we add it to the listItems list for the later db write */
            foreach (var ingredientsGroup in IngredientsToAddToList)
            {
                foreach (var ingredientId in ingredientsGroup.ingredientIds)
                {
                    RecipeIngredient matchingIngredient = recipeIngredients
                        .Where(ing => ing.Id.ToString() == ingredientId)
                        .First();
                    ListItem listItem = await MapIngredientToListItem(
                                                matchingIngredient,
                                                ingredientsGroup.date,
                                                ingredientsGroup.recipe_id,
                                                listId);
                    listItems.Add(listItem);
                }
            }
            #endregion
            _context.ListItems.AddRange(listItems);
            await _context.SaveChangesAsync();
            // return listitem ids
            return Ok(listItems.Select(listItem => new { id = listItem.Id }));

        }

        private async Task<ListItem> MapIngredientToListItem(
            RecipeIngredient ingredient,
            string date,
            string recipe_id,
            string listId)
        {
            // get the recipe from db first
            Recipe recipe = await _context.Recipes.FindAsync(new Guid(recipe_id));
            // serialize recipe.title, recipo.img, date to json per db requirement
            string recipesMetaInJson = JsonSerializer.Serialize(new
            {
                title = recipe.Title,
                img = recipe.Img,
                date,
            });

            // map everything to ListItem
            return new ListItem()
            {
                Name = ingredient.Name,
                Comment = ingredient.Comment,
                List = new Guid(listId),
                Quantity = Convert.ToDouble(ingredient.Quantity),
                Other = ingredient.Other,
                Unit = ingredient.Unit,
                Recipes = recipesMetaInJson,
            };

        }

        private bool RecipeIngredientExists(Guid id)
        {
            return _context.RecipeIngredients.Any(e => e.Id == id);
        }
    }
}
