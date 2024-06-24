/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) map.set(nums[i], i);
  for (let i = 0; i < nums.length; i++) {
    const targetPair = target - nums[i];
    if (map.has(targetPair) && map.get(targetPair) != i) {
      return [i, map.get(targetPair)];
    }
  }
};

const nums = [2, 7, 11, 15];
const target = 9;
const expected = [0, 1];
const res = twoSum(nums, target);
console.log({ res });
