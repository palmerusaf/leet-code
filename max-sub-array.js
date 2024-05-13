/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0]
  let total = 0
  for (const n of nums) {
    total += n
    max = Math.max(max, total)
    if (total < 0) {
      total = 0
    }
  }
  return max
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const exp = 6
const result = maxSubArray(nums)

console.log({ exp, result })
