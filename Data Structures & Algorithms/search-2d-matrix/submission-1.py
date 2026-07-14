class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        m = len(matrix)
        n = len(matrix[0])

        lr = 0
        rr = m - 1
        candidate_row = 0

        while lr <= rr:
            mr = (lr + rr) // 2

            if matrix[mr][0] <= target <= matrix[mr][-1]:
                candidate_row = mr
                break
            
            if target > matrix[mr][-1]:
                lr = mr + 1 
            else:
                rr = mr - 1
        
        lc = 0
        rc = n - 1

        while lc <= rc:
            mc = (lc + rc) // 2
            
            if target == matrix[candidate_row][mc]:
                return True
            elif target > matrix[candidate_row][mc]:
                lc = mc + 1
            else:
                rc = mc - 1

        return False