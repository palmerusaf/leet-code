class Solution {
  /**  @typedef {{start:number,end:number}} Interval */
  /** @param {Interval[]} intervals @returns {number} */
  minMeetingRooms(intervals) {
    if (intervals.length === 0) return 1;
    let count = 1;
    intervals.sort((a, b) => a.start - b.start);
    let prevEnd = intervals[0].end;
    for (const { start, end } of intervals.slice(1)) {
      if (prevEnd > start) {
        count++;
      }
      prevEnd = end;
    }
    return count;
  }
}

import { runTest } from "./runTest.js";

[
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
