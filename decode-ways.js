/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const dp = {};
  for (const c of s) dp[c] = 1;
  function dfs(i) {
    if (s[i] === "0") return 0;
    if (dp[i] !== undefined) return dp[i];
    let res = dfs(i + 1);
    const nextChar = s[i + 1];
    if (
      i + 1 < s.length &&
      (s[i] === "1" || (s[i] === "2" && nextChar.match(/[0-6]/)))
    ) {
      res += dfs(i + 2);
    }
    dp[i] = res;
    return res;
  }
  return dfs(0);
};

const test = {
  input: "12",
  exp: 2,
};
/** @type {typeof test[]} */
const tests = [
  { input: "10", exp: 1 },
  { input: "27", exp: 1 },
  { input: "06", exp: 0 },
  { input: "226", exp: 3 },
  test,
];

tests.forEach(runTest);

/**
 * @param {test} param0
 */
function runTest({ input, exp }, index) {
  index++;
  const s = Date.now();
  const res = numDecodings(input);
  const runTime = Date.now() - s;
  if (runTime > 600) {
    console.log("Test", index, "Failed");
    console.log({ runTime });
    return;
  }
  if (res === exp) {
    console.log("Test", index, "Passed");
  } else {
    console.log("Test", index, "Failed");
    console.table({ res, exp });
  }
}
