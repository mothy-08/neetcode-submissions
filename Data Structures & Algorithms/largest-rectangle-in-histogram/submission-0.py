class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        # brute force solution

        n = len(heights)
        res = float('-inf')
        for l in range(n):
            min_height = float('inf')
            for r in range(l, n):
                min_height = min(min_height, heights[r])
                area = min_height * (r - l + 1) 
                res = max(res, area)
        return res