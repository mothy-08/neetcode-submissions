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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let dummy = new ListNode(0, head);
        let groupBefore = dummy;

        while (true) {
            let groupEnd = groupBefore;
            for (let i = 0; i < k; ++i) {
                groupEnd = groupEnd.next;
                if (!groupEnd) {
                    break;
                }
            }

            if (!groupEnd) {
                break;
            }

            let groupAfter = groupEnd.next;
            let groupStart = groupBefore.next;

            let prev = groupAfter;
            let curr = groupStart;

            while (curr != groupAfter) {
                let tmp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = tmp;
            }

            groupBefore.next = groupEnd;
            groupBefore = groupStart;
        }

        return dummy.next;
    }
}
