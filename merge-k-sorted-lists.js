/**
 * @typedef {{val:number|0,next:ListNode|null}} ListNode
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (!lists.length) return null;
  while (lists.length > 1) {
    const left = lists.shift();
    const right = lists.shift();
    const sorted = merge(left, right);
    lists.push(sorted);
  }
  return lists[0];
  /**
   * @param {ListNode} left
   * @param {ListNode} right
   */
  function merge(left, right) {
    /** @type ListNode */
    const head = new ListNode(0);
    let iter = head;
    while (left && right) {
      if (left.val < right.val) {
        iter.next = left;
        left = left.next;
      } else {
        iter.next = right;
        right = right.next;
      }
      iter = iter.next;
    }
    if (left) {
      iter.next = left;
    }
    if (right) {
      iter.next = right;
    }
    return head.next;
  }
};
