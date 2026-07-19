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
     * @return {void}
     */
    reorderList(head) {
        const list = [];
        let curr = head;

        while (curr) {
            list.push(curr);
            curr = curr.next;
        }

        let i = 0;
        let j = list.length - 1;

        while (i < j) {
            list[i].next = list[j];
            i++;

            if (i >= j) {
                break;
            }

            list[j].next = list[i];
            j--;
        }
        list[i].next = null;
    }
}
