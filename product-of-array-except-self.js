/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const before = Array(nums.length).fill(1);
  const after = Array(nums.length).fill(1);
  const res = Array(nums.length);
  before[0] = nums[0];
  after[nums.length - 1] = nums[nums.length - 1];
  for (let i = 1; i < nums.length; i++) {
    before[i] = before[i - 1] * nums[i];
  }
  for (let i = nums.length - 2; i > -1; i--) {
    after[i] = after[i + 1] * nums[i];
  }
  res[0] = after[1];
  res[nums.length - 1] = before[nums.length - 2];
  for (let i = 1; i < nums.length - 1; i++) {
    res[i] = before[i - 1] * after[i + 1];
  }
  return res;
};

const nums = [-1, 1, 0, -3, 3];
const exp = [0, 0, 9, 0, 0];

// const nums = [1, 2, 3, 4];
// const exp = [24, 12, 8, 6];
console.log({ res: productExceptSelf(nums), exp });
