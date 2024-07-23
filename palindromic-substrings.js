/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let [l, r] = [i, i];
    while (l > -1 && r < s.length && s[l] === s[r]) {
      count++;
      l--;
      r++;
    }
    [l, r] = [i, i + 1];
    while (l > -1 && r < s.length && s[l] === s[r]) {
      count++;
      l--;
      r++;
    }
  }
  return count;
};

const test = {
  input: "abc",
  exp: 3,
};
/** @type {typeof test[]} */
const tests = [{ input: "aaa", exp: 6 }, test];

tests.forEach(runTest);

/**
 * @param {test} param0
 */
function runTest({ input, exp }, index) {
  index++;
  const s = Date.now();
  const res = countSubstrings(input);
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
