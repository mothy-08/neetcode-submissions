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

        res = ListNode()
        curr = res

        for x in out:
            curr.next = ListNode(val=x)
            curr = curr.next

        return res.next