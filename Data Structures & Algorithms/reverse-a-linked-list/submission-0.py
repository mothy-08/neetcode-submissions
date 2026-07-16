# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        curr = head
        out = []
        while curr:
            out.append(curr.val)
            curr = curr.next
        out.reverse()

        if not out:
            return None

        res = ListNode(val=out[0])
        curr = res

        for x in out[1:]:
            curr.next = ListNode(val=x)
            curr = curr.next

        return res