class Solution {
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @returns {number}
   */
  countComponents(n, edges) { }
}

/** @typedef {typeof test1} test */
const test1 = {
  n: 3,
  edges: [
    [0, 1],
    [0, 2],
  ],
  exp: 1,
};

/** @type test[] */
const tests = [
  test1,
  {
    n: 6,
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [4, 5],
    ],
    exp: 2,
  },
];

/**
 * @param {test} para1
 * @param {number} index
 */
function runTest({ edges, exp, n }, index) {
  index++;
  // const s = Date.now();
  const res = new Solution().countComponents(n, edges);
  // const runTime = Date.now() - s;
  // if (runTime > 600) {
  //   console.log("Test", index, "Failed");
  //   console.log({ runTime });
  //   return;
  // }
  if (res === exp) {
    console.log("Test", index, "Passed");
  } else {
    console.log("Test", index, "Failed");
    console.table({ res, exp });
  }
}
