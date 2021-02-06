import runScraper from "./runScraper";

test("scrap recipe site", async () => {
  const burger = await runScraper(
    "https://www.allrecipes.com/recipe/158968/spinach-and-feta-turkey-burgers/"
  );
  expect(burger.title).toBe("Spinach and Feta Turkey Burgers");
});
