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
        return this.levelOrder(root)
    }

    levelOrder(root) {
        let i = 0
        let depth = 0

        if(!root) return depth
        
        let q = [root]
        let lvlEnd = q.length

        while(i < q.length) {
            let node = q[i++]
            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)

            if(i == lvlEnd) {
                depth++
                lvlEnd = q.length
            }
        }

        return depth
    }
}
