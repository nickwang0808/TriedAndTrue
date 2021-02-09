import runScraper from "./runScraper";

describe("recipe site scrapper", () => {
  test("if it can scrap recipe site", async () => {
    const burger = await runScraper(
      "https://www.allrecipes.com/recipe/158968/spinach-and-feta-turkey-burgers/"
    );
    expect(burger.title).toBe("Spinach and Feta Turkey Burgers");
  });
});
