import AddRecipeControlSlice, {
  initialState,
  setShowAddRecipeControlModal,
} from "./AddRecipeControlSlice";

describe("addOrEditRecipeSlice", () => {
  it("should reset the state", () => {
    expect(
      AddRecipeControlSlice(undefined, setShowAddRecipeControlModal(true))
    ).toEqual({
      ...initialState,
      showAddRecipeControlModal: true,
    });
  });
});
