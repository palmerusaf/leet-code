import { runTest } from "./runTest.js";

[
  ((n) => ({
    nums: Array(n + 1)
      .fill(0)
      .map((v) => (v = n > 0 ? --n : n)),
    exp: false,
  }))(10000),
  { nums: [1, 2, 3], exp: true },
  { nums: [2, 3, 1, 1, 4], exp: true },
  { nums: [3, 2, 1, 0, 4], exp: false },
  { nums: [3, 2, 1, 0, 4], exp: false },
].forEach(({ nums, exp }, i) =>
  runTest({
    startTime: Date.now(),
    timeLimit: 400,
    exp,
    res: canJump(nums),
    index: i,
  }),
);

/** @param {number[]} nums @return {boolean} */
function canJump(nums) {
  const mem = {};
  function dfs(i) {
    if (mem[i] !== undefined) return mem[i];
    if (nums[i] + i >= nums.length - 1) {
      mem[i] = true;
      return true;
    }
    for (let j = i + 1; j <= nums[i] + i; j++) {
      if (dfs(j)) {
        mem[i] = true;
        return true;
      }
    }
    mem[i] = false;
    return false;
  }
  return dfs(0);
}
