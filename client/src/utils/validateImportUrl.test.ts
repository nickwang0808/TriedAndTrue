import validateImportUrl from "./validateImportUrl";

test("validate import url", () => {
  expect(validateImportUrl("google.com")).toEqual(false);
  expect(
    validateImportUrl(
      "https://www.allrecipes.com/recipe/180791/cumin-turkey-burgers/"
    )
  ).toEqual(true);
});
