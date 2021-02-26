using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Models;
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
            /* isolating the data transfering logic for better testability */
            List<ListItem> listItems = await ProcessInputDataForDbWrite(reqBody);

            if (listItems.Count == 0)
            {
                return Problem("No ingredient related to these recipe");
            }

            /* ef core does not support upsert so gotta do it manyally here */
            foreach (ListItem item in listItems)
            {
                /* all data are pre formatted and validated, safe to use string interplation */
                /* we are letting dotnet generating the id for this one so we have something to return to the client
                when there is a conflict we override the id on the db as well so we have the id to return,
                EF core does not support returning raw sql query result as of yet 2020-2-26*/
                await _context.Database.ExecuteSqlInterpolatedAsync(
                    @$"INSERT INTO list_items(id, other, name, quantity, comment, unit, recipes, list)
                    VALUES ({item.Id}, {item.Other}, {item.Name}, {item.Quantity}, {item.Comment}, {item.Unit}, {item.Recipes}::jsonb, {item.List})
                    ON CONFLICT ON CONSTRAINT list_items_name_list_comment_key 
                        DO UPDATE SET 
                            quantity = list_items.quantity + EXCLUDED.quantity,
                            recipes  = list_items.recipes || EXCLUDED.recipes::jsonb,
                            id       = EXCLUDED.id
                    RETURNING id;");
            }
            await _context.SaveChangesAsync();
            // return listitem ids
            return Ok(listItems.Select(listItem => new { id = listItem.Id }));
        }

        private async Task<List<ListItem>> ProcessInputDataForDbWrite(InsertIngredientsToListInput reqBody)
        {
            List<string> ingredientIds = reqBody.input.ingredientsToAddToList
                            .Select(ing => ing.ingredientIds)
                            .SelectMany(x => x) // flatten the 2d Collection
                            .ToList();

            string listId = reqBody.input.shoppingListId;
            if (ingredientIds.Count == 0)
            {
                return new List<ListItem>();
            }

            // first retrieve the ingredients related to the ingredient id
            List<RecipeIngredient> recipeIngredients = (from ing in _context.RecipeIngredients
                                                        where ingredientIds.Contains(ing.Id.ToString())
                                                        select ing).ToList();

            // duplicate map it to listitem model because we don't want any relationship between them after add
            ICollection<IngredientsToAddToList> IngredientsToAddToList = reqBody.input.ingredientsToAddToList;

            #region normalize the input data
            List<ListItem> listItems = new();
            /* because ingredientIds are in a 2d collection, we are looping it twice and map the recipe info
            in the first level with the actual ingredient info on the second level to the ListItem model,
            then we add it to the listItems list for the later db write */
            foreach (IngredientsToAddToList ingredientsGroup in IngredientsToAddToList)
            {
                foreach (string ingredientId in ingredientsGroup.ingredientIds)
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
            return listItems;
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
            string recipesMetaInJson = JsonSerializer.Serialize(
                new[]
                {   new
                    {
                        title = recipe.Title,
                        img = recipe.Img,
                        date,
                    }
                });

            // map everything to ListItem
            return new ListItem()
            {
                Id = Guid.NewGuid(),
                Name = ingredient.Name,
                Comment = ingredient.Comment,
                List = new Guid(listId),
                Quantity = Double.Parse(ingredient.Quantity),
                Other = ingredient.Other,
                Unit = ingredient.Unit,
                Recipes = recipesMetaInJson,
            };
        }
    }
}
