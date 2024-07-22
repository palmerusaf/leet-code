class Solution {
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @returns {number}
   */
  countComponents(n, edges) {
    if (!edges.length) return n;
    const vis = {};
    let count = 0;
    const mp = {};
    for (const [n1, n2] of edges) {
      mp[n1] ? mp[n1].push(n2) : (mp[n1] = [n2]);
    }
    for (const [n2, n1] of edges) {
      mp[n1] ? mp[n1].push(n2) : (mp[n1] = [n2]);
    }
    for (const n in mp) {
      if (!vis[n]) count++;
      dfs(n, n);
    }
    function dfs(n, prevN) {
      if (vis[n]) return;
      vis[n] = true;
      for (const ad of mp[n]) {
        if (ad === prevN) continue;
        dfs(ad, n);
      }
    }
    return count;
  }
}

[
  {
    n: 50,
    edges: [],
    Output: 50,
  },
  {
    n: 1,
    edges: [],
    Output: 1,
  },
  {
    n: 3,
    edges: [
      [0, 1],
      [0, 2],
    ],
    Output: 1,
  },
  {
    n: 6,
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [4, 5],
    ],
    Output: 2,
  },
].forEach(runTest);

function runTest({ n, edges, Output }, index) {
  index++;
  const res = new Solution().countComponents(n, edges);
  if (res === Output) {
    console.log("Test", index, "Passed");
  } else {
    console.log("Test", index, "Failed");
    console.log({ res, exp: Output });
  }
}
