# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        group_prev = dummy

        while True:
            kth_node = group_prev
            for _ in range(k):
                kth_node = kth_node.next
                if not kth_node:
                    break

            if not kth_node:
                break
            
            group_next = kth_node.next

            prev = group_next
            curr = group_prev.next

            while curr != group_next:
                tmp = curr.next
                curr.next = prev
                prev = curr
                curr = tmp
            
            tmp = group_prev.next
            group_prev.next = kth_node
            group_prev = tmp

        return dummy.next 