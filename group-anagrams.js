/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let mapIndex = 0;
  const mp = {};
  const res = [];
  for (const str of strs) {
    const sor = str.split("").sort().join("");
    if (mp[sor] === undefined) {
      mp[sor] = mapIndex;
      res[mapIndex] = [str];
      mapIndex++;
    } else {
      res[mp[sor]].push(str);
    }
  }
  return res;
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const exp = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];

console.log({ res: groupAnagrams(strs), exp });
