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

    dfs(node, maxVal) {
        if(!node) return 0

        let res
        if(node.val >= maxVal) {
            res = 1
        } else res = 0

        maxVal = Math.max(maxVal, node.val)

        res += this.dfs(node.left, maxVal)
        res += this.dfs(node.right, maxVal)

        return res
    }
    goodNodes(root) {
        //traverse left and right tree and pass the max value down so you can compare it with
        return this.dfs(root, root.val)
    }
}
