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
        let i = 1;
        let curr = head;
        // count starts at the end of the list

        while (curr.next) {
            curr = curr.next;
            i++;
        }

        if (i == n) {
            head = head.next;
            return head; 
        }

        let prev = null;
        curr = head;

        while (curr) {
            prev = curr;
            curr = curr.next;
            i--;

            if (i == n) {
                prev.next = curr.next;
                break;
            }
        }

        return head;
    }
}
