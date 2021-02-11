import AddOrEditRecipeSlice, {
  initialState,
  resetAddOrEditRecipe,
  setFormIsDirty,
  setRecipeId,
  setShowAddOrEditRecipe,
  setShowConfirmCancelModal,
} from "./AddOrEditRecipeSlice";

describe("addOrEditRecipeSlice", () => {
  it("should show addOrEditRecipeModal by setting recipe id", () => {
    expect(AddOrEditRecipeSlice(undefined, setRecipeId("1234"))).toEqual({
      ...initialState,
      showAddOrEditRecipe: true,
      id: "1234",
    });
  });
  it("should open addOrEditRecipeModal without recipe id", () => {
    expect(
      AddOrEditRecipeSlice(undefined, setShowAddOrEditRecipe(true))
    ).toEqual({
      ...initialState,
      showAddOrEditRecipe: true,
    });
  });
  it("should show ConfirmCancelModal", () => {
    expect(
      AddOrEditRecipeSlice(undefined, setShowConfirmCancelModal(true))
    ).toEqual({
      ...initialState,
      showConfirmCancelModal: true,
    });
  });
  it("should set the form dirty in store", () => {
    expect(AddOrEditRecipeSlice(undefined, setFormIsDirty(true))).toEqual({
      ...initialState,
      formIsDirty: true,
    });
  });
  it("should reset the state", () => {
    expect(AddOrEditRecipeSlice(undefined, resetAddOrEditRecipe())).toEqual({
      ...initialState,
    });
  });
});
