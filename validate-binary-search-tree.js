/**
 * @typedef {{val:number,left:TreeNode,right:TreeNode}} TreeNode
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  const vals = [];
  inorder(root);
  for (let i = 1; i < vals.length; i++) {
    if (vals[i - 1] >= vals[i]) {
      return false;
    }
  }
  return true;
  function inorder(iter) {
    if (!iter) return;
    inorder(iter.left);
    vals.push(iter.val);
    inorder(iter.right);
  }
};
