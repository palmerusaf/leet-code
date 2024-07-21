class Solution {
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @returns {boolean}
   */
  validTree(n, edges) {
    if (!edges.length) return true;
    const adj = {};
    const vis = new Set();
    for (const [n1, n2] of edges) {
      adj[n1] ? adj[n1].push(n2) : (adj[n1] = [n2]);
      adj[n2] ? adj[n2].push(n1) : (adj[n2] = [n1]);
    }

    return dfs(0, -1) && vis.size == n;

    function dfs(i, prev) {
      if (vis.has(i)) return false;
      vis.add(i);
      for (const j of adj[i]) {
        if (prev === j) continue;
        if (!dfs(j, i)) return false;
      }
      return true;
    }
  }
}

[
  {
    n: 5,
    edges: [
      [0, 1],
      [2, 0],
      [3, 0],
      [1, 4],
    ],
    exp: true,
  },
  {
    n: 5,
    edges: [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 4],
    ],
    exp: true,
  },
  {
    n: 5,
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [1, 3],
      [1, 4],
    ],
    exp: false,
  },
].forEach(runTest);

function runTest({ n, edges, exp }, index) {
  index++;
  const res = new Solution().validTree(n, edges);
  if (res === exp) {
    console.log("Test", index, "Passed");
  } else {
    console.log("Test", index, "Failed");
    console.log({ res, exp });
  }
}
