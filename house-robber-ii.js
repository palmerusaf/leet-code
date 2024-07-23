function help(nums) {
  let r1 = 0;
  let r2 = 0;
  for (const n of nums) {
    let temp = Math.max(n + r1, r2);
    r1 = r2;
    r2 = temp;
  }
  return r2;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  return Math.max(nums[0], help(nums.slice(1)), help(nums.slice(0, -1)));
};

const test = {
  input: [2, 3, 2],
  exp: 3,
};
/** @type {typeof test[]} */
const tests = [
  { input: [1, 2, 3, 1], exp: 4 },
  { input: [1, 2, 3], exp: 3 },
  test,
];

tests.forEach(runTest);

/**
 * @param {test} param0
 */
function runTest({ input, exp }, index) {
  index++;
  const s = Date.now();
  const res = rob(input);
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
