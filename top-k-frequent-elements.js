/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const mp = {};
  for (const n of nums) !mp[n] ? (mp[n] = 1) : mp[n]++;
  return Object.entries(mp)
    .sort((a, b) => b[1] - a[1])
    .map((a) => +a[0])
    .splice(0, k);
};

const nums = [4, 1, -1, 2, -1, 2, 3];
const k = 2;
const exp = [2, -1];

// const nums = [1, 1, 1, 2, 2, 3];
// const k = 2;
// const exp = [1, 2];

// const nums = [1];
// const k = 1;
// const exp = [1];
console.log({ res: topKFrequent(nums, k), exp: exp });
