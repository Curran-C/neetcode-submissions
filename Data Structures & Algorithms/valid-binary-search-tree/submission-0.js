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
    isValidBST(root) {
        const validate = (root, min, max) => {
            if(!root) return true

            if(min !== null && min >= root.val) return false
            if(max !== null && max <= root.val) return false

            return validate(root.left, min, root.val) && validate(root.right, root.val, max)
        }

        return validate(root, null, null)
    }
}
