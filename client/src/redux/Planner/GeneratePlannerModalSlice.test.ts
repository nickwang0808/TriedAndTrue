import GeneratePlannerModalSlice, {
  checkMealType,
} from "./GeneratePlannerModalSlice";

describe("Generate Planner Modal Slice", () => {
  const result = GeneratePlannerModalSlice(
    undefined,
    checkMealType({ checked: false, value: "lunch" })
  );

  it("should uncheck/remove element from mealType array", () => {
    expect(result.mealTypes.length).toBe(5);
    expect(result.mealTypes.find((elem) => elem === "lunch")).toBeUndefined();
  });
  it("should check/add element to mealType array", () => {
    const result2 = GeneratePlannerModalSlice(
      result,
      checkMealType({ checked: false, value: "lunch" })
    );
    expect(result2.mealTypes.length).toBe(5);
    expect(result2.mealTypes.find((elem) => elem === "lunch")).toBeUndefined();
  });
});
