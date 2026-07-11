from collections import deque

class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        q = deque() # non-increasing q
        res = []
        l = 0
        r = 0

        while r < len(nums):
            # need to popright as long as the q is not empty
            # and the top of it is less than the curr number
            # to maintain a non-increasing q
            while q and nums[r] > nums[q[-1]]:
                q.pop()

            q.append(r)
            # need to popleft if l is out of bounds
            if l > q[0]:
                q.popleft()

            # we need to append to our res whenever r + 1 >= k
            if r + 1 >= k:
                res.append(nums[q[0]])
                l += 1

            r += 1

        return res