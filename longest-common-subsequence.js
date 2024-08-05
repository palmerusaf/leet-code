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
  /** @param {number} n1 @param {number} n2 */
  function dfs(n1, n2) {
    if (n1 > text1.length - 1 || n2 > text2.length - 1) return 0;
    if (text1[n1] === text2[n2]) {
      return 1 + dfs(n1 + 1, n2 + 1);
    }
    return Math.max(dfs(n1, n2 + 1), dfs(n1 + 1, n2));
  }
  return dfs(0, 0);
}
