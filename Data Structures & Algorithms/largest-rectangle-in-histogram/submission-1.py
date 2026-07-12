class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        stack = [] # (i, h)
        res = 0

        for r, cur in enumerate(heights):
            start = r
            while stack and stack[-1][1] > cur:
                l, h = stack.pop()
                res = max(res, h * (r - l))
                start = l
            stack.append((start, cur))
        
        for i, h in stack:
            res = max(res, h * (len(heights) - i))
        
        return res
        
