/**
 * @typedef {{val:number,neighbors:_Node[]}} _Node
 * /
/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
  const oldToNew = {};
  /**
   * @param {_Node} node
   */
  function dfs(node) {
    if (oldToNew[node.val]) return oldToNew[node.val];

    /** @type {_Node} */
    const copy = { val: node.val, neighbors: [] };
    oldToNew[node.val] = copy;
    for (const n of node.neighbors) {
      copy.neighbors.push(dfs(n));
    }
    return copy;
  }
  return node ? dfs(node) : null;
};
