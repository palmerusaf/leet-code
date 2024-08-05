import { runTest } from "./runTest.js";
[
  { text1: "abcde", text2: "ace", exp: 3 },
  { text1: "abc", text2: "abc", exp: 3 },
  { text1: "abc", text2: "def", exp: 0 },
  { text1: "pmjghexybyrgzczy", text2: "hafcdqbgncrcbihkd", exp: 4 },
].forEach(({ text1, text2, exp }, i) =>
  runTest({
    startTime: Date.now(),
    timeLimit: 1000,
    res: longestCommonSubsequence(text1, text2),
    index: i,
    exp,
  }),
);

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
function longestCommonSubsequence(text1, text2) {
  const dp = Array(text1.length + 1)
    .fill()
    .map(() => Array(text2.length + 1).fill(0));
  for (let i = text1.length - 1; i >= 0; i--) {
    for (let j = text2.length - 1; j >= 0; j--) {
      if (text1[i] == text2[j]) {
        dp[i][j] = 1 + dp[i + 1][j + 1];
      } else {
        dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j]);
      }
    }
  }
  return dp[0][0];
}
