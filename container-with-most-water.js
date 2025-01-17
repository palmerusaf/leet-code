/**
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * Return the maximum amount of water a container can store.
 * Notice that you may not slant the container.
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let res = 0;
  while (l < r) {
    res = Math.max(Math.min(height[l], height[r]) * (r - l), res);
    height[l] < height[r] ? l++ : r--;
  }
  return res;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const exp = 49;
// const height = [1,1]
// const exp= 1
console.log({ res: maxArea(height), exp });
