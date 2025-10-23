// Remove Node From End of Linked List
// You are given the beginning of a linked list head, and an integer n.

// Remove the nth node from the end of the list and return the beginning of the list.

// Example 1:

// Input: head = [1,2,3,4], n = 2

// Output: [1,2,4]
// Example 2:

// Input: head = [5], n = 1

// Output: []
// Example 3:

// Input: head = [1,2], n = 2

// Output: [2]
// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

//  *     constructor(val = 0, next = null) {
//  *         this.val = val;
//  *         this.next = next;
//  *     }
//  * }
//  */

// class Solution {
//     /**
//      * @param {ListNode} head
//      * @param {number} n
//      * @return {ListNode}
//      */
//     removeNthFromEnd(head, n) {}
// }

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // Step 1: Create a dummy node
        let dummy = new ListNode(0, head);
        let fast = dummy;
        let slow = dummy;

        // Step 2: Move fast pointer n+1 steps ahead
        for (let i = 0; i <= n; i++) {
            fast = fast.next;
        }

        // Step 3: Move both fast and slow until fast reaches end
        while (fast) {
            fast = fast.next;
            slow = slow.next;
        }

        // Step 4: Remove the nth node
        slow.next = slow.next.next;

        // Step 5: Return new head
        return dummy.next;
    }
}
