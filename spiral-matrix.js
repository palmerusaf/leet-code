import { runTest } from "./runTest.js";

[
  {
    matrix: [
      [1, 2],
      [3, 4],
    ],
    exp: [1, 2, 4, 3],
  },
  { matrix: [[7], [9], [6]], exp: [7, 9, 6] },
  { matrix: [[6, 9, 7]], exp: [6, 9, 7] },
  { matrix: [[3], [2]], exp: [3, 2] },
  {
    matrix: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    exp: [1, 2, 3, 6, 9, 8, 7, 4, 5],
  },
  {
    matrix: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ],
    exp: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
  },
].forEach(({ exp, matrix }, i) =>
  runTest({
    exp: exp.toString(),
    index: i,
    res: spiralOrder(matrix).toString(),
  }),
);

/** @param {number[][]} matrix @return {number[]} */
function spiralOrder(matrix) {
  const res = [];
  let [startRow, startCol, row, col] = Array(4).fill(0);
  let [endRow, endCol] = [matrix.length - 1, matrix[0].length - 1];
  while (startRow <= endRow && startCol <= endCol) {
    // right
    while (col <= endCol) {
      res.push(matrix[row][col++]);
    }
    col--;
    startRow++;
    // down
    row++;
    while (row <= endRow) {
      res.push(matrix[row++][col]);
    }
    row--;
    endCol--;
    // left
    col--;
    while (col >= startCol && startRow <= endRow) {
      res.push(matrix[row][col--]);
    }
    col++;
    endRow--;
    // up
    row--;
    while (row >= startRow && startCol <= endCol) {
      res.push(matrix[row--][col]);
    }
    row++;
    col++;
    startCol++;
  }
  return res;
}
