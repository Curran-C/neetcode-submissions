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
     * @return {ListNode}
     */
    reverseList(head) { //1 -> 2 -> 3 -> 4
        let [curr, prev] = [head, null] //1 //undfined
        while(curr) {
            let nxt = curr.next //2
            curr.next = prev //2 = undefined
            prev = curr // undfined = 1
            curr = nxt // 1 = 2
        }
        return prev
    }
}
