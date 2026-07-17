# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        # brute force: create new list -> sort them -> create new ll
        curr1 = list1
        curr2 = list2
        arr = []

        while curr1:
            arr.append(curr1.val)
            curr1 = curr1.next

        while curr2:
            arr.append(curr2.val)
            curr2 = curr2.next

        arr.sort()

        res = ListNode()
        curr = res

        for x in arr:
            curr.next = ListNode(val=x)
            curr = curr.next

        return res.next