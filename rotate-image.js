import { runTest } from "./runTest.js";

[
  {
    matrix: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    exp: [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ],
  },
  {
    matrix: [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ],
    exp: [
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ],
  },
].forEach(({ exp, matrix }, i) =>
  runTest({
    index: i,
    exp: exp.toString(),
    res: ((matrix) => {
      rotate(matrix);
      return matrix.toString();
    })(matrix),
  }),
);

/** @param {number[][]} matrix @return {void} Do not return anything, modify matrix in-place instead. */
function rotate(matrix) {
  let l = 0;
  let r = matrix.length - 1;
  while (l < r) {
    for (let i = 0; i < r - l; i++) {
      const [top, bottom] = [l, r];
      let topLeft = matrix[top][l + i];
      matrix[top][l + i] = matrix[bottom - i][l];
      matrix[bottom - i][l] = matrix[bottom][r - i];
      matrix[bottom][r - i] = matrix[top + i][r];
      matrix[top + i][r] = topLeft;
    }
    r--;
    l++;
  }
}
