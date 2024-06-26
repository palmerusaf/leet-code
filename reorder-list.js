class ListNode {
  val = 0;
  next = null;
}
/**
 * @typedef {{val:number|0,next:ListNode|null}} ListNode
 */

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  let [slow, fast] = [head, head.next];
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // reverse second half
  let second = slow.next;
  let prev = null;
  slow.next = null;
  while (second) {
    let temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }
  // merge
  let first = head;
  second = prev;
  while (second) {
    let [tmp1, tmp2] = [first.next, second.next];
    first.next = second;
    second.next = tmp1;
    first = tmp1;
    second = tmp2;
  }
};

/**
 * @param {number[]} arr
 * @return {ListNode} head
 */
function arrToLL(arr) {
  let head = new ListNode();
  let iter = head;
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i];
    iter.val = v;
    if (i == arr.length - 1) {
      break;
    }
    iter.next = new ListNode();
    iter = iter.next;
  }
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

console.log({ res1: llToArr(head1), exp1 });
console.log({ res2: llToArr(head2), exp2 });
