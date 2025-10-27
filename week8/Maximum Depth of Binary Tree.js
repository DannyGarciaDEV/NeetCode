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
     * @return {number}
     */
    maxDepth(root) {
        // Base case: if the node is null, depth is 0
        if (root === null) return 0;

        // Recursively find the depth of left and right subtrees
        const leftDepth = this.maxDepth(root.left);
        const rightDepth = this.maxDepth(root.right);

        // The depth of the current node = 1 + max(leftDepth, rightDepth)
        return 1 + Math.max(leftDepth, rightDepth);
    }
}
