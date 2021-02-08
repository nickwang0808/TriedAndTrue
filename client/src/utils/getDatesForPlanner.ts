import { addWeeks, eachDayOfInterval, isMonday, isSunday } from "date-fns";

export const chunk = (array: any[], size: number) => {
  const chunked_arr = [];
  let copied = [...array]; // ES6 destructuring
  const numOfChild = Math.ceil(copied.length / size); // Round up to the nearest integer
  for (let i = 0; i < numOfChild; i++) {
    chunked_arr.push(copied.splice(0, size));
  }
  return chunked_arr;
};

export const findSundayFromTail = (dates: Date[]) => {
  for (let i = dates.length - 1; i >= 0; i--) {
    const curr = dates[i];
    if (isSunday(curr)) {
      return i;
    }
  }
};

export default function getDatesForPlanner() {
  const currentDate = new Date();
  const future = addWeeks(currentDate, 4);
  const past = addWeeks(currentDate, -4);

  const daysBetween = eachDayOfInterval({ start: past, end: future });

  const mondayIndex = daysBetween.findIndex((date) => isMonday(date));
  const sundayIndex = findSundayFromTail(daysBetween) as number;

  const trimmedDays = daysBetween
    .slice(mondayIndex, sundayIndex + 1) // sunday got lost from the slice
    .map((date) => String(date));
  // chunk all dates in arrays of 7
  const chunkBy7 = chunk(trimmedDays, 7);

  return chunkBy7;
}
