/**
 * You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
 *
 * Return the length of the longest substring containing the same letter you can get after performing the above operations.
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const charCount = {};
  let result = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    !charCount[s[right]] ? (charCount[s[right]] = 1) : charCount[s[right]]++;
    while (right - left + 1 - Math.max(...Object.values(charCount)) > k) {
      charCount[s[left]]--;
      left++;
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
};

const s1 = "AABABBA";
const k1 = 1;
const exp1 = 4;

const s2 = "AAAA";
const k2 = 0;
const exp2 = 4;

const s3 = "ABAB";
const k3 = 2;
const exp3 = 4;

const s4 = "AABABBA";
const k4 = 1;
const exp4 = 4;
console.log({ res1: characterReplacement(s1, k1), exp1 });
console.log({ res2: characterReplacement(s2, k2), exp2 });
console.log({ res3: characterReplacement(s3, k3), exp3 });
console.log({ res4: characterReplacement(s4, k4), exp4 });
