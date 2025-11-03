// Kth Largest Element in a Stream
// Design a class to find the kth largest integer in a stream of values, including duplicates. E.g. the 2nd largest from [1, 2, 3, 3] is 3. The stream is not necessarily sorted.

// Implement the following methods:

// constructor(int k, int[] nums) Initializes the object given an integer k and the stream of integers nums.
// int add(int val) Adds the integer val to the stream and returns the kth largest integer in the stream.
// Example 1:

// Input:
// ["KthLargest", [3, [1, 2, 3, 3]], "add", [3], "add", [5], "add", [6], "add", [7], "add", [8]]

// Output:
// [null, 3, 3, 3, 5, 6]

// Explanation:
// KthLargest kthLargest = new KthLargest(3, [1, 2, 3, 3]);
// kthLargest.add(3);   // return 3
// kthLargest.add(5);   // return 3
// kthLargest.add(6);   // return 3
// kthLargest.add(7);   // return 5
// kthLargest.add(8);   // return 6
// Constraints:

// 1 <= k <= 1000
// 0 <= nums.length <= 1000
// -1000 <= nums[i] <= 1000
// -1000 <= val <= 1000
// There will always be at least k integers in the stream when you search for the kth integer.
class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  constructor(k, nums) {
    this.k = k;
    this.minHeap = [];

    // Helper functions for heap
    this._heapify = (arr) => {
      this.minHeap = arr;
      for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        this._sink(i);
      }
    };

    this._swap = (i, j) => {
      [this.minHeap[i], this.minHeap[j]] = [this.minHeap[j], this.minHeap[i]];
    };

    this._swim = (i) => {
      while (i > 0) {
        let parent = Math.floor((i - 1) / 2);
        if (this.minHeap[parent] <= this.minHeap[i]) break;
        this._swap(parent, i);
        i = parent;
      }
    };

    this._sink = (i) => {
      let n = this.minHeap.length;
      while (true) {
        let left = 2 * i + 1,
            right = 2 * i + 2,
            smallest = i;

        if (left < n && this.minHeap[left] < this.minHeap[smallest]) smallest = left;
        if (right < n && this.minHeap[right] < this.minHeap[smallest]) smallest = right;
        if (smallest === i) break;
        this._swap(i, smallest);
        i = smallest;
      }
    };

    // Initialize heap with initial nums
    for (let num of nums) {
      this.add(num);
    }
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    this.minHeap.push(val);
    this._swim(this.minHeap.length - 1);

    if (this.minHeap.length > this.k) {
      this._swap(0, this.minHeap.length - 1);
      this.minHeap.pop();
      this._sink(0);
    }

    return this.minHeap[0];
  }
}
