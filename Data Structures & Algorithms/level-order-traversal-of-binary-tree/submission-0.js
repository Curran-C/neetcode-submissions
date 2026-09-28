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
     * @return {number[][]}
     */
    levelOrder(root) {
        let res = []
        if (!root) return res

        let q = [root]
        let i = 0 //lvl

        while(i < q.length) {
            const lvlSize = q.length - i
            const lvl = []

            for(let j = 0; j < lvlSize; j++) {
                const node = q[i++]
                lvl.push(node.val)
                if(node.left) q.push(node.left)
                if(node.right) q.push(node.right)
            }

            res.push(lvl)
        }

        return res
    }
}
