using System.Linq;
using System.Net.Http;
using Xunit;
using System.Net.Http.Json;
using Microsoft.AspNetCore.Http;
using server.Models;
using System.Collections.Generic;
using System;
using server.Controllers;

namespace src.test
{
    [Collection("intergration test")]
    public class GeneratePlannerControllerTest : DbContextFixture
    {
        public GeneratePlannerControllerTest(CustomCollectionFixture factory)
            : base(factory)
        {
        }

        [Fact]
        public async void TestName()
        {
            string _lte = "2021-03-05";
            string _gte = "2021-02-25";
            HttpResponseMessage res = await Client.PostAsJsonAsync
                ("/api/GeneratePlanners",
                    new GeneratePlannerInput()
                    {
                        input = new()
                        {
                            mealTypes = new List<string>() { "lunch" },
                            _lte = _lte,
                            _gte = _gte,
                        }
                    }
                );

            res.EnsureSuccessStatusCode();

            List<ResponseWithIdOnly> recipeIdsInPlanner = await res.Content.ReadFromJsonAsync<List<ResponseWithIdOnly>>();
            Assert.Equal(7, recipeIdsInPlanner.Count);

            // Planner planner = Context.Planners.Where(p => p.Date == DateTime.Parse(_gte)).First();

        }

        [Fact]
        public void ItShouldBuild7DaysOfPlanners()
        {
            List<Recipe> recipes = new()
            {
                new()
                {
                    Title = "Test Recipe 1",
                    MealType = "breakfast",
                    Id = Guid.NewGuid(),
                    Owner = "owner",
                },
                new()
                {
                    Title = "Test Recipe 2",
                    MealType = "lunch",
                    Id = Guid.NewGuid(),
                    Owner = "owner",
                },
                new()
                {
                    Title = "Test Recipe 3",
                    MealType = "dinner",
                    Id = Guid.NewGuid(),
                    Owner = "owner",
                },
            };

            List<Planner> result = GeneratePlannersController.BuildPlannerForTheWeek(
                new List<string>() { "breakfast" },
                recipes,
                "testuser",
                DateTime.Parse("2021-02-26")
            );

            Assert.True(result.Count == 7, "only 7 breakfast should be generated");
            Assert.True(result.First().RecipeId == recipes.First().Id,
                "only break fast are generated, ids should match on the first element");

            List<Planner> result2 = GeneratePlannersController.BuildPlannerForTheWeek(
                 new List<string>() { "lunch", "dinner" },
                    recipes,
                    "testuser",
                    DateTime.Parse("2021-02-27")
                );

            Assert.True(result2.Count == 14, "2 meal types yeild 14 recipes generated");
            Assert.True(result2.First().RecipeId == recipes[1].Id || result2.First().RecipeId == recipes[2].Id,
                "the first gernated planner recipe's id should be either the second sample or the third");

        }
    }
}