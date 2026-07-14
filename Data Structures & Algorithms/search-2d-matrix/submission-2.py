class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        l = 0
        r = len(matrix) - 1
        candidate_row = 0

        while l <= r:
            m = (l + r) // 2

            if matrix[m][0] <= target <= matrix[m][-1]:
                candidate_row = m
                break
            
            if target > matrix[m][-1]:
                l = m + 1 
            else:
                r = m - 1
        
        l = 0
        r = len(matrix[0]) - 1

        while l <= r:
            m = (l + r) // 2
            
            if target == matrix[candidate_row][m]:
                return True
            elif target > matrix[candidate_row][m]:
                l = m + 1
            else:
                r = m - 1

        return False