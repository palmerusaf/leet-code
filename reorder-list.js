/**
 * @typedef {{val:number|0,next:ListNode|null}} ListNode
 */

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) { };

/**
 * @param {number[]} arr
 * @return {ListNode} head
 */
function arrToLL(arr) {
  /** @type ListNode */
  let head;
  let iter = head;
  arr.forEach((val) => {
    iter.val = val;
    iter = iter.next;
  });
  iter.next = null;
  return head;
}

/**
 * @param {ListNode} head
 * @returns {number[]} arr
 */
function llToArr(head) {
  let iter = head;
  let res = [];
  while (iter) {
    res.push(iter.val);
    iter = iter.next;
  }
  return res;
}

const head1 = arrToLL([1, 2, 3, 4]);
reorderList(head1);
const exp1 = [1, 4, 2, 3];
const head2 = arrToLL([1, 2, 3, 4, 5]);
reorderList(head2);
const exp2 = [1, 5, 2, 4, 3];

console.log({ head1, exp1 });
console.log({ head2, exp2 });
