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
        this.invertTreeRec(root)
        return root
    }

    invertTreeRec(root) {
        if(!root) return root
        let left = root.left
        root.left = root.right
        root.right = left

        this.invertTreeRec(root.left)
        this.invertTreeRec(root.right)
    }
}
