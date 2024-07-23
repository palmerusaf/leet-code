/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let len = 0;
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let [l, r] = [i, i];
    while (l > -1 && r < s.length && s[l] === s[r]) {
      const curLen = r - l + 1;
      if (curLen > len) {
        len = curLen;
        res = s.slice(l, r + 1);
      }
      l--;
      r++;
    }
    [l, r] = [i, i + 1];
    while (l > -1 && r < s.length && s[l] === s[r]) {
      const curLen = r - l + 1;
      if (curLen > len) {
        len = curLen;
        res = s.slice(l, r + 1);
      }
      l--;
      r++;
    }
  }
  return res;
};

const test = {
  input: "babad",
  exp: "bab",
};
/** @type {typeof test[]} */
const tests = [
  { input: "cbbd", exp: "bb" },
  { input: "ac", exp: "a" },
  { input: "a", exp: "a" },
  test,
];

tests.forEach(runTest);

/**
 * @param {test} param0
 */
function runTest({ input, exp }, index) {
  index++;
  const s = Date.now();
  const res = longestPalindrome(input);
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
