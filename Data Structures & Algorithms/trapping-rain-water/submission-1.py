class Solution:
    def trap(self, height: List[int]) -> int:
        n = len(height)
        max_lefts = [0] * n
        max_rights = [0] * n
        # min(l, r) - h[i]

        for i in range(1, n):
            max_lefts[i] = max(height[i - 1], max_lefts[i - 1])

        for i in range(n - 2, -1, -1) :
            max_rights[i] = max(height[i + 1], max_rights[i + 1])

        res = 0
        for i, h in enumerate(height):
            res += max(0, min(max_lefts[i], max_rights[i]) - h)

        
        return res