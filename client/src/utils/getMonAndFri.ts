import { store } from "../redux/store";

export default function getMonAndSun() {
  const weeks = store.getState().plannerDateRangeSlice.dateRange!;
  return weeks.map((week) => [week[0], week.slice(-1)[0]]);
}
