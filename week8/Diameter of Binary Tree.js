// Diameter of Binary Tree
// The diameter of a binary tree is defined as the length of the longest path between any two nodes within the tree. The path does not necessarily have to pass through the root.

// The length of a path between two nodes in a binary tree is the number of edges between the nodes. Note that the path can not include the same node twice.

// Given the root of a binary tree root, return the diameter of the tree.

// Example 1:

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
    diameterOfBinaryTree(root) {
        let diameter = 0;

        function depth(node) {
            if (!node) return 0; // base case

            // get depth of left and right subtrees
            const left = depth(node.left);
            const right = depth(node.right);

            // update diameter at this node
            diameter = Math.max(diameter, left + right);

            // return the height of this subtree
            return Math.max(left, right) + 1;
        }

        depth(root);
        return diameter;
    }
}
