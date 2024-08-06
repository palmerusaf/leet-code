import { runTest } from "./runTest.js";

[
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
  let l = 0;
  const between = (s, e, i) => s < i && i < e;
  for (let r = 1; r < intervals.length; r++) {
    const [lS, lE] = intervals[l];
    const [rS, rE] = intervals[r];
    if (
      between(lS, lE, rS) ||
      between(rS, rE, lE) ||
      (lS === rS && lE === rE)
    ) {
      const lLen = lE - lS;
      const rLen = rE - rS;
      if (lLen > rLen) l = r;
      count++;
    }
  }
  return count;
}
