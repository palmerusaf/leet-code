/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const sA = s.split('')
  const tA = t.split('')
  if (sA.length != tA.length) return false
  const countS = {}
  const countT = {}
  for (let i = 0; i < sA.length; i++) {
    countS[sA[i]] = countS[sA[i]] ? countS[sA[i]] + 1 : 1
    countT[tA[i]] = countT[tA[i]] ? countT[tA[i]] + 1 : 1
  }
  for (const key in countS) {
    if (countS[key] != countT[key]) {
      return false
    }
  }
  return true
};

isAnagram("anagram", "nagaram")
