/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  /** @description pac map */
  const pmp = [];
  const atl = [];
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  for (let r = 0; r < heights.length; r++) {
    for (let c = 0; c < heights[r].length; c++) {
      if (goesPac(r, c)) pmp.push([r, c]);
    }
  }
  const res = [];
  for (const [r, c] of pmp) {
    if (goesAtl(r, c)) res.push([r, c]);
  }
  function goesPac(r, c, prevH, vis = new Set()) {
    if (r < 0 || c < 0) return true;
    if (heights[r] === undefined || heights[r][c] === undefined) return false;
    if (vis.has(`${r},${c}`)) return false;
    vis.add(`${r},${c}`);
    const currH = heights[r][c];
    prevH = prevH ?? currH;
    if (currH > prevH) return false;
    for (const [rd, cd] of dirs) {
      const [nd, nc] = [rd + r, cd + c];
      if (goesPac(nd, nc, currH, vis)) return true;
    }
    vis.delete(`${r},${c}`);
    return false;
  }
  function goesAtl(r, c, prevH, vis = new Set()) {
    if (
      r > heights.length - 1 ||
      (heights[r] !== undefined && c > heights[r].length - 1)
    )
      return true;
    if (!heights[r] || !heights[r][c]) return false;
    if (vis.has(`${r},${c}`)) return false;
    vis.add(`${r},${c}`);
    const currH = heights[r][c];
    prevH = prevH ?? currH;
    if (currH > prevH) return false;
    for (const [rd, cd] of dirs) {
      const [nd, nc] = [rd + r, cd + c];
      if (goesAtl(nd, nc, currH, vis)) return true;
    }
    vis.delete(`${r},${c}`);
    return false;
  }
  return res;
};

[
  {
    input: [
      [3, 3, 3],
      [3, 1, 3],
      [0, 2, 4],
    ],
    exp: [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 2],
    ],
  },
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
