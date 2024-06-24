/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums.length) return 0;

  const set = new Set(nums);
  let result = 1;
  for (let i = 0; i < nums.length; i++) {
    const el = nums[i];
    let count = 1;
    const seqStart = !set.has(el - 1);
    if (seqStart) {
      let iter = el + 1;
      while (set.has(iter)) {
        count++;
        iter++;
      }
    }
    result = Math.max(result, count);
  }
  return result;
};

// const nums = [100, 4, 200, 1, 3, 2];
// const exp = 4;
const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
const exp = 9;

console.log({ res: longestConsecutive(nums), exp });
