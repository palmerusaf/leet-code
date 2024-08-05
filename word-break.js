import { runTest } from "./runTest.js";
[
  { s: "aaaaaaa", wordDict: ["aaaa", "aaa"], exp: true },
  { s: "leetcode", wordDict: ["leet", "code"], exp: true },
  { s: "applepenapple", wordDict: ["apple", "pen"], exp: true },
  {
    s: "catsandog",
    wordDict: ["cats", "dog", "sand", "and", "cat"],
    exp: false,
  },
].forEach(({ exp, wordDict, s }, i) =>
  runTest({
    res: wordBreak(s, wordDict),
    index: i,
    exp,
  }),
);

/**
 * @param  {string} s
 * @param  {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
  const dp = Array(s.length + 1).fill(false);
  dp[s.length] = true;
  for (let i = s.length - 1; i >= 0; i--) {
    for (const word of wordDict) {
      const subStr = s.slice(i, i + word.length);
      if (i + word.length <= s.length && subStr === word) {
        dp[i] = dp[i + word.length];
      }
      if (dp[i]) {
        break;
      }
    }
  }
  return dp[0];
}
