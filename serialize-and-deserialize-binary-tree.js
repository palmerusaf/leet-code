/**
 * @typedef {{val:number,left:TreeNode,right:TreeNode}} TreeNode
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const list = [];
  pre(root);
  return list.join();
  /**
   * @param {TreeNode} iter
   */
  function pre(iter) {
    if (!iter) {
      list.push("N");
      return;
    }

    list.push(iter.val);
    pre(iter.left);
    pre(iter.right);
  }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const list = data.split(",");
  let i = 0;
  return pre();
  function pre() {
    if (list[i] == "N") {
      i++;
      return null;
    }

    /** @type TreeNode */
    const node = new TreeNode(+list[i]);
    i++;
    node.left = pre();
    node.right = pre();
    return node;
  }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
