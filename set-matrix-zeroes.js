import { runTest } from "./runTest.js";

[
  {
    matrix: [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
    exp: [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ],
  },
  {
    matrix: [
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5],
    ],
    exp: [
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0],
    ],
  },
].forEach(({ matrix, exp }, i) =>
  runTest({
    exp: exp.toString(),
    res: ((matrix) => {
      setZeroes(matrix);
      return matrix.toString();
    })(matrix),
    index: i,
  }),
);

/** @param {number[][]} matrix @return {void} Do not return anything, modify matrix in-place instead. */
function setZeroes(matrix) {
  const zeroCoords = [];
  for (let row = 0; row < matrix.length; row++)
    for (let col = 0; col < matrix[row].length; col++)
      if (matrix[row][col] === 0) zeroCoords.push([row, col]);
  for (const [zRow, zCol] of zeroCoords) {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][zCol] = 0;
    }
    for (let col = 0; col < matrix[zRow].length; col++) {
      matrix[zRow][col] = 0;
    }
  }
}
