/**
 * @typedef {{val:number,left:TreeNode|null,right:TreeNode|null}|null} TreeNode
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  return (
    isSameTree(root, subRoot) ||
    (root?.left !== undefined && isSubtree(root.left, subRoot)) ||
    (root?.right !== undefined && isSubtree(root.right, subRoot))
  );
  function isSameTree(p, q) {
    return (
      (!p && !q) ||
      (p !== null &&
        q !== null &&
        p?.val === q?.val &&
        isSameTree(p.left, q.left) &&
        isSameTree(p.right, q.right))
    );
  }
};
