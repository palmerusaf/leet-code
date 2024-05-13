/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    if (target == nums[mid]) return mid
    if (nums[mid] >= nums[l]) {
      if (target > nums[mid] || target < nums[l]) {
        l = mid + 1
      }
      else r = mid - 1
    }
    else {
      if (target < nums[mid] || target > nums[r]) {
        r = mid - 1
      }
      else l = mid + 1
    }
  }
  return -1
};


const nums = [4, 5, 6, 7, 0, 1, 2]
const target = 0
const exp = 4
const res = search(nums, target)
console.table({ exp, res })
