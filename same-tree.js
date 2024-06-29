/**
 * @typedef {{val:number,left:TreeNode,right:TreeNode}} TreeNode
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  return (
    (!p && !q) ||
    (p != null &&
      q != null &&
      p?.val === q?.val &&
      isSameTree(p.left, q.left) &&
      isSameTree(p.right, q.right))
  );
};
