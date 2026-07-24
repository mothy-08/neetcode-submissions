class Solution:
    def maxArea(self, heights: List[int]) -> int:
        max_area = 0
        left_pointer = 0
        right_pointer = len(heights) - 1

        while left_pointer <= right_pointer:
            width = (right_pointer - left_pointer)
            minimum_height = min(heights[left_pointer], heights[right_pointer])
            rectangle_area = width * minimum_height
            max_area = max(max_area, rectangle_area)

            if (heights[left_pointer] > heights[right_pointer]):
                right_pointer -= 1
            else: 
                left_pointer += 1


        return max_area