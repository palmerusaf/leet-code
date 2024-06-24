class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let res = "";
    for (const s of strs) {
      res += s.length + "#" + s;
    }
    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const arr = str.split("");
    const res = [];
    while (arr.length) {
      const sublen = arr.splice(0, arr.indexOf("#")).join("");
      arr.shift();
      const substr = arr.splice(0, sublen).join("");
      res.push(substr);
    }
    return res;
  }
}

const sol = new Solution();
// const input = ["neet", "code", "love", "you"];
const input = ["we", "say", ":", "yes", "!@#$%^&*()"];
const encoded = sol.encode(input);
console.log({ in: encoded, out: sol.decode(encoded) });
