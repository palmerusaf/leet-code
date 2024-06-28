class ListNode {
  val = 0;
  next = null;
}
/**
 * @typedef {{val:number|0,next:ListNode|null}} ListNode
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head) return;
  if (!head.next) {
    head = null;
    return;
  }
  // find nth node
  let first = head;
  let second = head;
  let prev = first;
  for (let i = 0; i < n; i++) second = second.next;
  while (second) {
    second = second.next;
    prev = first;
    first = first.next;
  }
  prev.next = first.next;
};

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

function llToArr(head) {
  let iter = head;
  let res = [];
  while (iter) {
    res.push(iter.val);
    iter = iter.next;
  }
  return res;
}
const head1 = arrToLL([1, 2, 3, 4, 5]);
const n1 = 2;
const exp1 = [1, 2, 3, 5];
removeNthFromEnd(head1, n1);

const head2 = arrToLL([1]);
const n2 = 1;
const exp2 = [];
removeNthFromEnd(head2, n2);

const head3 = arrToLL([1, 2]);
const n3 = 1;
const exp3 = [1];
removeNthFromEnd(head3, n3);

const head4 = arrToLL([1, 2, 3, 4, 5]);
const n4 = 2;
const exp4 = [1, 2, 3, 5];
removeNthFromEnd(head4, n4);

console.log({ res1: llToArr(head1), exp1 });
console.log({ res2: llToArr(head2), exp2 });
console.log({ res3: llToArr(head3), exp3 });
console.log({ res4: llToArr(head4), exp4 });
