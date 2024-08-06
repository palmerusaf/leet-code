class Solution {
  /**  @typedef {{start:number,end:number}} Interval */
  /** @param {Interval[]} intervals @returns {boolean} */
  canAttendMeetings(intervals) {}
}

import { runTest } from "./runTest.js";

[
  {
    intervals: [
      { start: 5, end: 8 },
      { start: 9, end: 15 },
    ],
    exp: true,
  },
  {
    intervals: [
      { start: 0, end: 30 },
      { start: 5, end: 10 },
      { start: 15, end: 20 },
    ],
    exp: false,
  },
].forEach(({ intervals, exp }, i) =>
  runTest({ exp, index: i, res: new Solution().canAttendMeetings(intervals) }),
);
