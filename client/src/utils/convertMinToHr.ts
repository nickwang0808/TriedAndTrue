export default function convertMinToHr(input: number): string {
  if (input <= 60) return `${input}m`;

  const hr = Math.floor(input / 60);
  const min = input % 60;

  if (min === 0) return `${hr}h`;

  return `${hr}h ${min}m`;
}
