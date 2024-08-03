import { runTest } from "./runTest.js";
const genTest = (numLen) => {
  const nums = [];
  for (let i = 0; i < numLen; i++) {
    let randInt = Math.ceil(Math.random() * 10);
    if (Math.random() > 0.5) randInt *= -1;
    nums.push(randInt);
  }
  return { nums, exp: maxProduct(nums) };
};
[
  genTest(1500),
  { nums: [0, 2], exp: 2 },
  { nums: [2, 3, -2, 4], exp: 6 },
  { nums: [-2, 0, -1], exp: 0 },
].forEach(({ nums, exp }, index) =>
  runTest({
    timeLimit: 100,
    startTime: Date.now(),
    res: maxProduct(nums),
    index,
    exp,
  }),
);

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
  if (nums.length == 1) return nums[0];
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      const sub = nums.slice(i, j + 1);
      const prod = sub.reduce((res, cur) => (res *= cur), 1);
      max = Math.max(prod, max);
    }
  }
  return max;
}
