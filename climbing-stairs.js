/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let c = 1
  let p = 1
  for (let i = 1; i < n; i++) {
    let t = c
    c = p + c
    p = t
  }
  return c
};
