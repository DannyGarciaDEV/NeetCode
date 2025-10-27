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
     * @return {TreeNode}
     */
    invertTree(root) {
        // Base case: if the node is null, just return null
        if (root === null) return null;

        // Swap the left and right children
        [root.left, root.right] = [root.right, root.left];

        // Recursively invert the left and right subtrees
        this.invertTree(root.left);
        this.invertTree(root.right);

        // Return the root node after inversion
        return root;
    }
}
