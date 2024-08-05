import { runTest } from "./runTest.js";
[
  { nums: [10, 9, 2, 5, 3, 7, 101, 18], exp: 4 },
  { nums: [0, 1, 0, 3, 2, 3], exp: 4 },
  { nums: [7, 7, 7, 7, 7, 7, 7], exp: 1 },
].forEach(({ nums, exp }, i) =>
  runTest({
    res: lengthOfLIS(nums),
    exp,
    index: i,
  }),
);

/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
  const dp = Array(nums.length).fill(1);
  let res = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      const nextCount = 1 + dp[j];
      if (nums[i] < nums[j] && dp[i] < nextCount) {
        dp[i] = nextCount;
        res = Math.max(res, nextCount);
      }
    }
  }
  return res;
}
