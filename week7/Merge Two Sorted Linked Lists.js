// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted linked list and return the head of the new sorted linked list.

// The new list should be made up of nodes from list1 and list2.

// /**
//  * Definition for singly-linked list.
//  * class ListNode {
//  *     constructor(val = 0, next = null) {
//  *         this.val = val;
//  *         this.next = next;
//  *     }
//  * }
//  */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // Create a dummy node to simplify edge cases
        let dummy = new ListNode(-1);
        let current = dummy;

        // Traverse both lists while both have nodes
        while (list1 !== null && list2 !== null) {
            if (list1.val < list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }

        // Attach the remaining part of whichever list is not null
        if (list1 !== null) current.next = list1;
        if (list2 !== null) current.next = list2;

        // Return the merged list starting from dummy.next
        return dummy.next;
    }
}
