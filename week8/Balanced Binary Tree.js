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
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        // Helper function returns height if balanced, else -1
        function checkHeight(node) {
            if (!node) return 0;

            const left = checkHeight(node.left);
            const right = checkHeight(node.right);

            // If subtree is already unbalanced
            if (left === -1 || right === -1) return -1;

            // If difference in height > 1, unbalanced
            if (Math.abs(left - right) > 1) return -1;

            // Return height of subtree
            return Math.max(left, right) + 1;
        }

        // Tree is balanced if checkHeight(root) doesn't return -1
        return checkHeight(root) !== -1;
    }
}
