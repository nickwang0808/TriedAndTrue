export default function convertMinToHr(input: number): string {
  if (input <= 60) return `${input}m`;

  const hr = Math.floor(input / 60);
  const min = input % 60;

  if (min === 0) return `${hr}h`;

  return `${hr}h ${min}m`;
}

test("convert min to hr", () => {
  expect(convertMinToHr(60)).toBe("60m");
  expect(convertMinToHr(70)).toBe("1h 10m");
  expect(convertMinToHr(120)).toBe("2h");
});
