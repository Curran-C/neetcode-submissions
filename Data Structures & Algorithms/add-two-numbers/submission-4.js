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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let num1 = "";
        let num2 = "";
        let [p1, p2] = [l1, l2];

        while (p1 || p2) {
            if (p1) {
                num1 = p1.val + num1;
                p1 = p1.next;
            }
            if (p2) {
                num2 = p2.val + num2;
                p2 = p2.next;
            }
        }

        let sum = BigInt(num1) + BigInt(num2);
        let list = new ListNode(null);
        let listCpy = list;

        if(sum === 0n) {
            listCpy.next = new ListNode(0)
        }

        while (sum > 0n) {
            listCpy.next = new ListNode(sum % 10n);
            sum = sum / 10n;
            listCpy = listCpy.next;
        }

        return list.next;
    }
}
