/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] === "0") return 0;
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") continue;
    const r = i + 1;
    if (r < s.length) {
      const sub = +s.slice(i, r + 1);
      if (sub <= 26) {
        count++;
      }
    }
  }
  return count;
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
