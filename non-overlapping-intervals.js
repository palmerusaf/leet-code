import { runTest } from "./runTest.js";

[
  {
    intervals: [
      [-1, 1],
      [10, 11],
      [12, 14],
      [3, 4],
    ],
    exp: 0,
  },
  {
    intervals: [
      [0, 2],
      [1, 3],
      [2, 4],
      [3, 5],
      [4, 6],
    ],
    exp: 2,
  },
  {
    intervals: [
      [1, 2],
      [2, 3],
      [3, 4],
      [1, 3],
    ],
    exp: 1,
  },
  {
    intervals: [
      [1, 2],
      [1, 2],
      [1, 2],
    ],
    exp: 2,
  },
  {
    intervals: [
      [1, 2],
      [2, 3],
    ],
    exp: 0,
  },
].forEach(({ exp, intervals }, i) =>
  runTest({ exp, index: i, res: eraseOverlapIntervals(intervals) }),
);

/** @param {number[][]} intervals @return {number} */
function eraseOverlapIntervals(intervals) {
  intervals.sort(([a], [b]) => a - b);
  let count = 0;
  let prevEnd = intervals[0][1];
  for (const [currStart, currEnd] of intervals.slice(1)) {
    if (currStart >= prevEnd) {
      prevEnd = currEnd;
    } else {
      count++;
      prevEnd = Math.min(prevEnd, currEnd);
    }
  }
  return count;
}
