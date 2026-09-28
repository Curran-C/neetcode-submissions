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
     * @return {number[]}
     */
    rightSideView(root) {
        //lvl order but return only the last element in every level
        let res = []
        if(!root) return res
        let q = [root]
        let i = 0 //lvl

        while(i < q.length) {
            let lvlSize = q.length - i
            let lvl = []

            for(let j = 0; j < lvlSize; j++) {
                let node = q[i++]
                lvl.push(node.val)
                if(node.left) q.push(node.left)
                if(node.right) q.push(node.right)
            }

            res.push(lvl[lvl.length - 1])
        }

        return res
    }

}
