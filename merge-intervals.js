import { runTest } from "./runTest.js";
[
  {
    intervals: [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ],
    exp: [
      [1, 6],
      [8, 10],
      [15, 18],
    ],
  },
  {
    intervals: [
      [1, 4],
      [4, 5],
    ],
    exp: [[1, 5]],
  },
].forEach(({ exp, intervals }, i) =>
  runTest({ exp, index: i, res: merge(intervals) }),
);

/** @param {number[][]} intervals @return {number[][]} */
function merge(intervals) {}
