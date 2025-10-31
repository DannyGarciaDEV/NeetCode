/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        // Base case: both nodes are null → trees are the same up to this point
        if (!p && !q) return true;

        // If one is null or their values differ → not the same
        if (!p || !q || p.val !== q.val) return false;

        // Recursively compare left and right subtrees
        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }
}
