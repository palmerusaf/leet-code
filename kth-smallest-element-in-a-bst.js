/**
 * @typedef {{val:number,left:TreeNode,right:TreeNode}} TreeNode
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  const vals = [];
  dfs(root);
  return vals[k - 1];
  /**
   * @param {TreeNode} iter
   */
  function dfs(iter) {
    if (!iter) return;
    dfs(iter.left);
    vals.push(iter.val);
    dfs(iter.right);
  }
};
