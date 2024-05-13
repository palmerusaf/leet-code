/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const res = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    const el = nums[i];
    if (el > 0) break
    if (i > 0 && el === nums[i - 1]) continue
    let l = i + 1
    let r = nums.length - 1
    while (l < r) {
      const target = el + nums[l] + nums[r]
      if (target > 0) r--
      else if (target < 0) l++
      else {
        res.push([el, nums[l], nums[r]])
        l++
        r--
        while (nums[l] == nums[l - 1] && l < r) l++
      }
    }
  }
  return res
};

const nums = [-1, 0, 1, 2, -1, -4]
const exp = [[-1, -1, 2], [-1, 0, 1]]
const res = threeSum(nums)
console.log({ exp, res })
