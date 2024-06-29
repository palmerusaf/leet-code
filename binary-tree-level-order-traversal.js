/**
 * @typedef {{val:number,left:TreeNode,right:TreeNode}} TreeNode
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  const res = [];
  dfs(root, 0);
  return res;
  /**
   * @param {TreeNode} iter
   * @param {number} level
   */
  function dfs(iter, level) {
    if (!iter) return;
    res[level] ? res[level].push(iter.val) : (res[level] = [iter.val]);
    dfs(iter.left, level + 1);
    dfs(iter.right, level + 1);
  }
};
