import query from "./db";

describe("db connection", () => {
  beforeAll(async () => {
    await query(`DELETE FROM "user" WHERE id = 'random-test-id'`);
  });
  afterAll(async () => {
    await query(`DELETE FROM "user" WHERE id = 'random-test-id'`);
  });

  test("if data can be inserted into db", async () => {
    const { rows } = await query(
      `
      INSERT INTO "user" ( id, name, email ) 
      VALUES ('random-test-id', 'test-user', 'test@test.com') 
      RETURNING id;
      `
    );
    expect(rows[0].id).toBe("random-test-id");
  });
});
