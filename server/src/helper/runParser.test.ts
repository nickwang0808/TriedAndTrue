import runParser from "./runParser";
describe("ingredient parser container", () => {
  test("if it can parse", async () => {
    const egg = (await runParser(["2 eggs, beaten"]))[0];
    expect(egg.name).toBe("eggs");
    expect(egg.qty).toBe("2");
  });
});
