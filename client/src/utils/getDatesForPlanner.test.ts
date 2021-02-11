import { addWeeks, eachDayOfInterval, isMonday, isSunday } from "date-fns";
import getDatesForPlanner, {
  chunk,
  findSundayFromTail,
} from "./getDatesForPlanner";

describe("getDateforPlanner", () => {
  it("should produce 2 dimensional date range array", () => {
    const chunkBy7 = getDatesForPlanner();
    chunkBy7.forEach((chunk) => {
      expect(chunk.length).toBe(7);
      expect(isMonday(new Date(chunk[0]))).toBe(true);
      expect(isSunday(new Date(chunk[chunk.length - 1]))).toBe(true);
    });
  });
  it("should identidentify sunday from an array of timestamps", () => {
    const currentDate = new Date();
    const future = addWeeks(currentDate, 4);
    const daysBetween = eachDayOfInterval({ start: currentDate, end: future });
    const sundayIndex = findSundayFromTail(daysBetween);
    expect(sundayIndex).toBeDefined(); // function will return undefined if not found
  });

  it("should chunk up an array", () => {
    const arr = Array.from({ length: 100 }, (v, i) => i);
    const result = chunk(arr, 3);

    result.forEach((innerArr, index) => {
      if (index !== result.length - 1) {
        expect(innerArr.length).toBe(3);
      }
    });
  });
});
