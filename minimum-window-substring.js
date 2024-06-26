/**
 * Given two strings s and t of lengths m and n respectively, return the minimum window
 * substring
 * of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
 *
 * The testcases will be generated such that the answer is unique.
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) { };

const s1 = "ADOBECODEBANC";
const t1 = "ABC";
const exp1 = "BANC";

const s2 = "a";
const t2 = "a";
const exp2 = "a";

const s3 = "a";
const t3 = "aa";
const exp3 = "";

console.log({ res1: minWindow(s1, t1), exp1 });
console.log({ res2: minWindow(s2, t2), exp2 });
console.log({ res3: minWindow(s3, t3), exp3 });
