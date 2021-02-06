import runParser from "./runParser";

test("run ingredient parser", async () => {
  const egg = (await runParser(["2 eggs, beaten"]))[0];
  expect(egg.name).toBe("eggs");
  expect(egg.qty).toBe("2");
});
