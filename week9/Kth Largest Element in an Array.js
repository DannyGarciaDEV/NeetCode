// Kth Largest Element in an Array
// Given an unsorted array of integers nums and an integer k, return the kth largest element in the array.

// By kth largest element, we mean the kth largest element in the sorted order, not the kth distinct element.

// Follow-up: Can you solve it without sorting?

// Example 1:

// Input: nums = [2,3,1,5,4], k = 2

// Output: 4
// Example 2:

// Input: nums = [2,3,1,1,5,5,4], k = 3

// Output: 4

// class Solution {
//     /**
//      * @param {number[]} nums
//      * @param {number} k
//      * @return {number}
//      */
//     findKthLargest(nums, k) {}
// }
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        // Sort the array in descending order
        nums.sort((a, b) => b - a);
        // Return the kth largest element (1-based index)
        return nums[k - 1];
    }
}
