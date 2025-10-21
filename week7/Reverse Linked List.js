// Reverse Linked List
// Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

// Example 1:

// Input: head = [0,1,2,3]

// Output: [3,2,1,0]
// Example 2:

// Input: head = []

// Output: []
// Constraints:

// 0 <= The length of the list <= 1000.
// -1000 <= Node.val <= 1000

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let current = head;

        while (current !== null) {
            // Temporarily store the next node
            let nextNode = current.next;

            // Reverse the current node's pointer
            current.next = prev;

            // Move pointers one step forward
            prev = current;
            current = nextNode;
        }

        // prev will be the new head at the end
        return prev;
    }
}
