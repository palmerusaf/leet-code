import {
  MinPriorityQueue,
  MaxPriorityQueue,
} from "@datastructures-js/priority-queue";

class MedianFinder {
  /**
   * @type  MinPriorityQueue<number>
   */
  #left = new MinPriorityQueue();
  /**
   * @type  MaxPriorityQueue<number>
   */
  #right = new MaxPriorityQueue();
  /**
   * @param {number} num
   * @return {void}
   */
  addNum(num) {
    this.#left.enqueue(num);
    this.#right.enqueue(this.#left.dequeue().element);
    //balance them
    if (this.#left.size() < this.#right.size()) {
      this.#left.enqueue(this.#right.dequeue().element);
    }
  }
  /**
   * @return {number}
   */
  findMedian() {
    if (this.#left.size() > this.#right.size()) {
      return this.#left.front().element;
    }
    return (this.#left.front().element + this.#right.front().element) / 2;
  }
}

let mf = new MedianFinder();
// prettier-ignore
// [[[], [1], [2], [], [3], []]].forEach(runTest)
// [[], [6], [], [10], [], [2], [], [6], [], [5], [], [0], [], [6], [], [3], [], [1], [], [0], [], [0], []].forEach(runTest)
//
function runTest([val], index) {
  if (index == 0) {
    console.log("new test");
    mf = null;
    mf = new MedianFinder();
    return;
  }
  val == null ? console.log(mf.findMedian()) : mf.addNum(val);
}
/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
