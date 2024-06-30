/**
 * @typedef {{val:number,left:TreeNode,right:TreeNode}} TreeNode
 /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  if (!root) return 0;
  let res = root.val;
  dfs(root);
  return res;
  /**
   * @returns number
   * @param {TreeNode} iter
   */
  function dfs(iter) {
    if (!iter) return 0;
    const left = Math.max(0, dfs(iter.left));
    const right = Math.max(0, dfs(iter.right));
    const segLen = iter.val + left + right;
    res = Math.max(res, segLen);
    return Math.max(iter.val + Math.max(left, right));
  }
};
