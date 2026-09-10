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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let slow = head
        let fast = head
        for(let i = 1; i <= n; i++) {
            fast = fast.next
        }
        if (!fast) {
            return head.next
        }
        while(fast) {
            if(!fast.next) {
                slow.next = slow.next.next
            }
            slow = slow.next
            fast = fast.next
        }
        return head
    }
}
