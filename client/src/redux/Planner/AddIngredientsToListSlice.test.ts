import AddInGredientsToListSlice, {
  checkIngredients,
  initialState,
  IRecipeIngredients,
  setSelectedIngredient,
  setShowIngredientToListModal,
  setShowSelectListModal,
  unCheckIngredients,
} from "./AddIngredientsToListSlice";

describe("AddIngredientsToListSlice", () => {
  describe("modal control", () => {
    it("should show AddIngredientToListModal", () => {
      expect(
        AddInGredientsToListSlice(undefined, setShowIngredientToListModal(true))
      ).toEqual({
        ...initialState,
        showAddIngredientToListModal: true,
      });
    });
    it("should show SelectListModal", () => {
      expect(
        AddInGredientsToListSlice(undefined, setShowSelectListModal(true))
      ).toEqual({
        ...initialState,
        showSelectListModal: true,
      });
    });
  });

  describe("item control", () => {
    const ingredient: IRecipeIngredients = {
      date: "2021-11-01",
      recipe_id: "test-recipe",
      recipe_index: 1,
      ingredientIds: ["test-ingredient"],
    };

    describe("pre check all", () => {
      it("should set selected ingredients", () => {
        const newState = AddInGredientsToListSlice(
          undefined,
          setSelectedIngredient([ingredient])
        );
        expect(newState).toEqual({
          ...initialState,
          showSelectListModal: false,
          selectedIngredients: [ingredient],
        });
      });

      it("should check one ingredient", () => {
        const result = AddInGredientsToListSlice(
          {
            ...initialState,
            /* reset the ingredient id array to empty */
            selectedIngredients: [{ ...ingredient, ingredientIds: [] }],
          },
          checkIngredients({
            date: "2021-11-01",
            recipe_id: "test-recipe",
            recipe_index: 1,
            id: "test-ingredient",
          })
        );

        expect(result).toEqual({
          ...initialState,
          selectedIngredients: [ingredient],
        });
      });

      it("should UN-Check one ingredient", () => {
        const filledState = {
          ...initialState,
          selectedIngredients: [ingredient],
        };

        const result = AddInGredientsToListSlice(
          filledState,
          unCheckIngredients({
            date: "2021-11-01",
            recipe_id: "test-recipe",
            recipe_index: 1,
            id: "test-ingredient",
          })
        );

        expect(result).toEqual({
          ...initialState,
          selectedIngredients: [{ ...ingredient, ingredients: [] }],
        });
      });
    });
  });
});
