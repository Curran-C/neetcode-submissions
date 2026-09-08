/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let [curr, uniq] = [head, new Set()]
        while (curr) {
            if(uniq.has(curr)) {
                return true
            } else {
                uniq.add(curr)
                curr = curr.next
            }
        }
        return false
    }
}
