/**
 * @typedef {{val:number,left:TreeNode,right:TreeNode}} TreeNode
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (root === p || root === q) return root;
  const small = Math.min(p.val, q.val);
  const large = Math.max(p.val, q.val);
  while (root.val > large || root.val < small) {
    root = root.val > large ? root.left : root.right;
  }
  return root;
};
