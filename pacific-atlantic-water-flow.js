/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
  const res = [];
  for (let r = 0; r < heights.length; r++) {
    for (let c = 0; c < heights[r].length; c++) {
      if (goesPac(r, c) && goesAtl(r, c)) {
        res.push([r, c]);
      }
    }
  }
  return res;
  function goesPac(r, c) {
    if (heights[r - 1] === undefined) return true;
    if (heights[r][c - 1] === undefined) return true;
    const curr = heights[r][c];
    if (curr < heights[r - 1][c] && curr < heights[r][c - 1]) return false;

    return goesPac(r - 1, c) || goesPac(r, c - 1);
  }
  function goesAtl(r, c) {
    if (heights[r + 1] === undefined) return true;
    if (heights[r][c + 1] === undefined) return true;
    const curr = heights[r][c];
    if (curr < heights[r + 1][c] && curr < heights[r][c + 1]) return false;

    return goesAtl(r + 1, c) || goesAtl(r, c + 1);
  }
};

[
  {
    input: [
      [1, 2, 2, 3, 5],
      [3, 2, 3, 4, 4],
      [2, 4, 5, 3, 1],
      [6, 7, 1, 4, 5],
      [5, 1, 1, 2, 4],
    ],
    exp: [
      [0, 4],
      [1, 3],
      [1, 4],
      [2, 2],
      [3, 0],
      [3, 1],
      [4, 0],
    ],
  },
  {
    input: [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ],
    exp: [
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 2],
    ],
  },
].forEach(runTest);

function runTest({ input, exp }, index) {
  index++;
  const res = pacificAtlantic(input);
  if (res.sort().toString() === exp.sort().toString()) {
    console.log("Test", index, "Passed");
  } else {
    console.log("Test", index, "Failed");
    console.log({ input });
    console.table({ res, exp });
  }
}
