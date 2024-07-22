/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
  /** @description pac map */
  const pmp = [];
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
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

    const currH = heights[r][c];
    prevH = prevH ?? currH;
    if (currH > prevH) return false;

    if (vis.has(`${r},${c}`)) return false;
    vis.add(`${r},${c}`);

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

    if (heights[r] === undefined || heights[r][c] === undefined) return false;

    const currH = heights[r][c];
    prevH = prevH ?? currH;
    if (currH > prevH) return false;

    if (vis.has(`${r},${c}`)) return false;
    vis.add(`${r},${c}`);

    for (const [rd, cd] of dirs) {
      const [nd, nc] = [rd + r, cd + c];
      if (goesAtl(nd, nc, currH, vis)) return true;
    }
    vis.delete(`${r},${c}`);

    return false;
  }
  return res;
};

const test = {
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
};
/** @type {typeof test[]} */
const tests = [
  {
    // prettier-ignore
    input: [
      [10, 10, 1 , 11, 2 , 15, 17, 6 , 17, 10, 0 , 10, 18, 9 , 16, 13, 8 , 9 , 12, 6 , 3 , 2 , 5 , 19, 4 , 14],
      [12, 19, 13, 2 , 7 , 2 , 3 , 8 , 17, 4 , 2 , 1 , 8 , 13, 7 , 2 , 10, 16, 12, 3 , 4 , 12, 4 , 16, 0 , 12],
      [1 , 12, 9 , 18, 12, 16, 17, 5 , 13, 0 , 7 , 13, 12, 13, 6 , 2 , 11, 19, 7 , 2 , 6 , 11, 11, 0 , 17, 6] ,
      [1 , 12, 2 , 0 , 11, 7 , 7 , 3 , 7 , 13, 11, 1 , 11, 15, 5 , 13, 14, 12, 4 , 10, 5 , 16, 3 , 17, 18, 12],
      [9 , 16, 11, 5 , 9 , 13, 7 , 18, 18, 14, 19, 10, 9 , 4 , 8 , 14, 4 , 19, 13, 1 , 14, 8 , 0 , 3 , 12, 10],
      [10, 19, 9 , 11, 1 , 18, 1 , 2 , 1 , 8 , 1 , 5 , 2 , 15, 14, 13, 18, 18, 11, 4 , 15, 3 , 15, 12, 12, 2] ,
      [0 , 10, 9 , 2 , 15, 9 , 12, 7 , 0 , 0 , 12, 18, 9 , 12, 18, 4 , 18, 10, 3 , 1 , 17, 14, 13, 18, 9 , 4] ,
      [3 , 19, 9 , 16, 16, 19, 11, 19, 6 , 9 , 18, 0 , 12, 11, 13, 1 , 15, 6 , 9 , 18, 9 , 6 , 3 , 12, 12, 2] ,
      [0 , 16, 15, 12, 3 , 19, 18, 9 , 5 , 1 , 4 , 3 , 19, 15, 1 , 0 , 7 , 10, 14, 4 , 8 , 10, 15, 16, 14, 8] ,
      [15, 9 , 3 , 15, 19, 17, 17, 10, 9 , 8 , 16, 11, 3 , 15, 15, 9 , 1 , 14, 11, 13, 16, 7 , 1 , 7 , 13, 5] ,
      [9 , 19, 6 , 7 , 19, 14, 4 , 18, 6 , 10, 19, 13, 12, 7 , 7 , 15, 6 , 10, 7 , 8 , 8 , 8 , 19, 13, 17, 14],
      [14, 7 , 1 , 15, 2 , 6 , 12, 4 , 2 , 19, 17, 17, 8 , 9 , 19, 10, 0 , 12, 4 , 12, 4 , 16, 15, 18, 8 , 0] ,
      [4 , 8 , 5 , 8 , 0 , 2 , 19, 18, 1 , 7 , 13, 9 , 13, 16, 6 , 15, 15, 12, 18, 5 , 8 , 11, 6 , 17, 5 , 11],
      [17, 16, 9 , 19, 12, 6 , 13, 19, 0 , 6 , 7 , 9 , 7 , 13, 9 , 18, 5 , 15, 16, 8 , 18, 9 , 6 , 0 , 11, 14],
      [11, 5 , 13, 3 , 12, 19, 5 , 15, 2 , 15, 9 , 16, 6 , 12, 8 , 0 , 19, 19, 11, 0 , 16, 8 , 15, 15, 1 , 12],
      [15, 16, 16, 19, 14, 1 , 2 , 11, 14, 8 , 16, 13, 2 , 0 , 3 , 8 , 1 , 5 , 4 , 15, 12, 5 , 13, 3 , 5 , 3]
    ],

    exp: [
      [0, 25],
      [15, 0],
      [15, 1],
      [15, 2],
      [15, 3],
    ],
  },
  {
    input: [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ],
    exp: [
      [0, 3],
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
      [2, 0],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 0],
      [3, 1],
      [3, 2],
      [3, 3],
    ],
  },
  test,
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
];

tests.forEach(runTest);

/**
 * @param {test} param0
 */
function runTest({ input, exp }, index) {
  index++;
  const res = pacificAtlantic(input);
  if (res.sort().toString() === exp.sort().toString()) {
    console.log("Test", index, "Passed");
  } else {
    console.log("Test", index, "Failed");
    const extra = res.filter(
      ([r, c]) => exp.findIndex(([rr, cc]) => rr === r && cc === c) === -1,
    );
    const missing = exp.filter(
      ([r, c]) => res.findIndex(([rr, cc]) => rr === r && cc === c) === -1,
    );
    console.table({ missing, extra });
  }
}
