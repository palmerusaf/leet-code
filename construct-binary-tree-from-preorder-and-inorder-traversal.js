/**
 * @typedef {{val:number,left:TreeNode,right:TreeNode}} TreeNode
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  /** @type TreeNode */
  const root = new TreeNode(preorder[0]);
  const mid = inorder.indexOf(root.val);
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
};
