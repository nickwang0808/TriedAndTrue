using System.Linq;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Utils;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GeneratePlannersController : ControllerBase
    {
        private readonly PostgresContext _context;
        public GeneratePlannersController(PostgresContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<object>> GeneratePlanner(GeneratePlannerInput reqBody)
        {
            string userId = ParseUserId.GetUserId(Request.Headers);

            /* the client will select a list of mealtypes that they want in their planner */
            List<string> mealTypes = reqBody.input.mealTypes.ToList();

            List<Recipe> allRecipes =
                (from recipe in _context.Recipes
                 where recipe.Owner == userId
                 where mealTypes.Contains(recipe.MealType)
                 select recipe).ToList();

            // this will shuffle the recipes
            List<Recipe> shuffledRecipes = allRecipes.OrderBy(r => Guid.NewGuid()).ToList();

            DateTime startDate = DateTime.Parse(reqBody.input._gte);
            DateTime endDate = DateTime.Parse(reqBody.input._lte).AddDays(-1);

            /* delete existing planners for the given time because we are over writing it */
            _context.RemoveRange(
                _context.Planners
                    .Where(p => DateTime.Compare(p.Date, startDate) > 0)
                    .Where(p => DateTime.Compare(p.Date, endDate) < 0)
            );

            List<Planner> newPlanners = BuildPlannerForTheWeek(
                                                    mealTypes,
                                                    shuffledRecipes,
                                                    userId,
                                                    startDate
                                                );

            await _context.Planners.AddRangeAsync(newPlanners);
            await _context.SaveChangesAsync();

            var returningIds = newPlanners.Select(p => new { id = p.RecipeId }).ToList();
            return Ok(returningIds);
        }

        public static List<Planner> BuildPlannerForTheWeek(
            List<string> mealTypes,
            List<Recipe> shuffledRecipes,
            string userId,
            DateTime startDate)
        {
            List<Planner> newPlanners = new();

            /* starting from the _gte date and we add 6 more days to it */
            List<int> SevenDays = new() { 0, 1, 2, 3, 4, 5, 6 };
            foreach (int day in SevenDays)
            {
                for (int i = 0; i < mealTypes.Count; i++)
                {
                    /* ensure the same recipe won't appear twice in a day by only inserting
                     it based on the mealType prop */
                    Guid recipeId = shuffledRecipes
                        .Find(r => r.MealType == mealTypes[i])
                        .Id;

                    /* add i day every loop */
                    DateTime currentDate = startDate.AddDays(day);

                    Planner planner = new()
                    {
                        Date = currentDate,
                        Index = i,
                        RecipeId = recipeId,
                        UserId = userId,
                    };

                    /* use this array to keep track of all the planner inserted */
                    newPlanners.Add(planner);
                }
            }
            return newPlanners;
        }
    }
}