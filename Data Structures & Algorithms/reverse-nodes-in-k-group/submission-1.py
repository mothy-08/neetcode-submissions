# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        dummy = ListNode(0, head) 
        before_group = dummy

        while True:
            group_end = before_group
            for _ in range(k):
                group_end = group_end.next
                if not group_end:
                    break
            
            if not group_end:
                break

            after_group = group_end.next
            group_start = before_group.next

            prev = after_group
            curr = group_start

            while curr != after_group:
                tmp = curr.next
                curr.next = prev
                prev = curr
                curr = tmp

            before_group.next = group_end
            before_group = group_start

        return dummy.next