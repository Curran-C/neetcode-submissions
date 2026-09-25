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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */

    equal(p, q) {
        if (!p && !q) return true;
        if (p && q && p.val === q.val) {
            return this.equal(p.left, q.left) && this.equal(p.right, q.right);
        } else return false;
    }
    
    isSubtree(root, subRoot) {
        const traverse = (root) => {
            if (!root) return false;
            if (root.val === subRoot.val && this.equal(root, subRoot)) return true
            return traverse(root.left) || traverse(root.right)
        }
        
        return traverse(root);
    }
}
