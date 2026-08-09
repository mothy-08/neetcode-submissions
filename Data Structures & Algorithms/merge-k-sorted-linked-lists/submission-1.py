class Solution:    
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        n = len(lists)
        if n == 0:
            return None
        
        while n > 1:
            merged_lists = []

            for i in range(0, n, 2):
                l1 = lists[i]
                l2 = None
                if i + 1 < n:
                    l2 = lists[i + 1]
                
                merged_lists.append(self.merge(l1, l2))
            
            lists = merged_lists
            n = len(lists)

        return lists[0]
    
    def merge(self, l1, l2):
        dummy = ListNode()
        curr = dummy

        while l1 and l2:
            if l1.val <= l2.val:
                curr.next = l1
                l1 = l1.next
            else:
                curr.next = l2
                l2 = l2.next
            curr = curr.next

        if l1:
            curr.next = l1
        else:
            curr.next = l2

        return dummy.next