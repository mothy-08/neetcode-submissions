from collections import deque

class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        q = deque() 
        n = len(nums)
        res = [0] * (n - k + 1)
        l = 0

        for r in range(n):
            while q and nums[r] > nums[q[-1]]:
                q.pop()

            q.append(r)
            if l > q[0]:
                q.popleft()

            if r + 1 >= k:
                res[r + 1 - k] = nums[q[0]]
                l += 1

        return res