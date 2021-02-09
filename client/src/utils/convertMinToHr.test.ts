import convertMinToHr from "./convertMinToHr";

describe("convertMintoHr", () => {
  test("if it can convert min to hr", () => {
    expect(convertMinToHr(60)).toBe("60m");
    expect(convertMinToHr(70)).toBe("1h 10m");
    expect(convertMinToHr(120)).toBe("2h");
  });
});
