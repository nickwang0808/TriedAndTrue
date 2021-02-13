import { endOfWeek, format, startOfWeek } from "date-fns";

export default function getMonAndSunDate(
  date: string,
  formatting: string = "yyyy-MM-dd"
) {
  return {
    date_start: format(
      startOfWeek(new Date(date), { weekStartsOn: 1 }),
      formatting
    ),
    date_end: format(
      endOfWeek(new Date(date), { weekStartsOn: 1 }),
      formatting
    ),
  };
}
