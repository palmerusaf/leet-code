import { runTest } from "./runTest.js";

[
  {
    n: 0b00000010100101000001111010011100,
    exp: 0b00111001011110000010100101000000,
  },
  { n: 0b11111111111111111111111111111101, exp: 3221225471 },
].forEach(({ exp, n }, index) => runTest({ exp, index, res: reverseBits(n) }));

/** @param {number} n - a positive integer @return {number} - a positive integer */
function reverseBits(n) {
  let res = n.toString(2).split("").reverse();
  while (res.length < 32) {
    res.push("0");
  }
  res = res.join("");
  res = "0b" + res;
  return +res;
}
