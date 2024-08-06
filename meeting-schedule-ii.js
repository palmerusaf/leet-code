class Solution {
  /**  @typedef {{start:number,end:number}} Interval */
  /** @param {Interval[]} intervals @returns {number} */
  minMeetingRooms(intervals) {
    const starts = intervals.map(({ start }) => start).sort((a, b) => a - b);
    const ends = intervals.map(({ end }) => end).sort((a, b) => a - b);
    let [count, res, s, e] = Array(4).fill(0);
    while (s < intervals.length) {
      if (starts[s] < ends[e]) {
        count++;
        s++;
      } else {
        count--;
        e++;
      }
      res = Math.max(res, count);
    }
    return res;
  }
}

import { runTest } from "./runTest.js";

[
  {
    intervals: [
      { start: 1, end: 5 },
      { start: 5, end: 10 },
      { start: 10, end: 15 },
      { start: 15, end: 20 },
    ],
    exp: 1,
  },
  {
    intervals: [
      { start: 1, end: 5 },
      { start: 2, end: 6 },
      { start: 3, end: 7 },
      { start: 4, end: 8 },
      { start: 5, end: 9 },
    ],
    exp: 4,
  },
  {
    intervals: [
      { start: 0, end: 40 },
      { start: 5, end: 10 },
      { start: 15, end: 20 },
    ],
    exp: 2,
  },
  {
    intervals: [{ start: 4, end: 9 }],
    exp: 1,
  },
].forEach(({ intervals, exp }, i) =>
  runTest({ exp, index: i, res: new Solution().minMeetingRooms(intervals) }),
);
