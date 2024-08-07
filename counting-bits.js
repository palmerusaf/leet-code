import { runTest } from "./runTest.js";

[
  { n: 2, exp: [0, 1, 1] },
  { n: 5, exp: [0, 1, 1, 2, 1, 2] },
].forEach(({ exp, n }, i) =>
  runTest({ exp: exp, index: i, res: countBits(n) }),
);

/** @param {number} n @return {number[]} */
function countBits(n) {
  const dp = [0];
  let offset = 1;
  for (let i = 1; i <= n; i++) {
    if (i % offset === 0) {
      offset = i;
    }
    dp.push(1 + dp[i - offset]);
  }
  return dp;
}
