import { runTest } from "./runTest.js";
[
  {
    intervals: [
      [2, 3],
      [4, 5],
      [6, 7],
      [8, 9],
      [1, 10],
    ],
    exp: [[1, 10]],
  },
  {
    intervals: [
      [1, 4],
      [0, 0],
    ],
    exp: [
      [0, 0],
      [1, 4],
    ],
  },
  {
    intervals: [
      [1, 4],
      [0, 4],
    ],
    exp: [[0, 4]],
  },
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
].forEach(
  ({ exp, intervals }, i) =>
    runTest({
      exp: exp.toString(),
      index: i,
      res: merge(intervals).toString(),
    }),
  // runTest({ exp: exp, index: i, res: merge(intervals) }),
);

/** @param {number[][]} intervals @return {number[][]} */
function merge(intervals) {
  const res = [];
  let l = 0;
  intervals.sort(([a], [b]) => a - b);
  for (let r = 1; r < intervals.length + 1; r++) {
    let [s, e] = intervals[l];
    while (
      r < intervals.length &&
      ((intervals[r][0] <= e && intervals[r][1] >= s) ||
        (s >= intervals[r][0] && e <= intervals[r][1]))
    ) {
      s = Math.min(s, intervals[r][0]);
      e = Math.max(e, intervals[r][1]);
      r++;
    }
    res.push([s, e]);
    l = r;
  }
  return res;
}
