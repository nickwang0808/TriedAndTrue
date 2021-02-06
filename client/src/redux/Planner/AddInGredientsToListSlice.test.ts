import AddInGredientsToListSlice, {
  checkIngredients,
  initialState,
  IRecipeIngredients,
  setSelectedIngredient,
  setShowIngredientToListModal,
  setShowSelectListModal,
} from "./AddInGredientsToListSlice";

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
      ingredients: ["test-ingredient"],
    };

    it("should set selected ingredients", () => {
      const newState = AddInGredientsToListSlice(
        undefined,
        setSelectedIngredient([ingredient])
      );
      console.log(newState);
      expect(newState).toEqual({
        ...initialState,
        showSelectListModal: false,
        selectedIngredients: [ingredient],
      });
    });
    it("should check one ingredient", () => {
      expect(
        AddInGredientsToListSlice(
          undefined,
          checkIngredients({
            date: "2021-11-01",
            recipe_id: "test-recipe",
            recipe_index: 1,
            id: "test-ingredient",
          })
        )
      ).toEqual({
        ...initialState,
        showSelectListModal: false,
        selectedIngredients: [ingredient],
      });
    });
  });
});
