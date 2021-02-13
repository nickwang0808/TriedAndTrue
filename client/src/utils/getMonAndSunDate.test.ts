import getMonAndSunDate from "./getMonAndSunDate";

it("should return the mon and sun of a given date string", () => {
  const result = getMonAndSunDate("2021-01-20");
  expect(result).toEqual({ date_start: "2021-01-18", date_end: "2021-01-24" });
});
