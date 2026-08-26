# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        q = deque([root]) 

        while q:
            level_size = len(q)
            rightmost_node = None

            for _ in range(level_size):
                node = q.popleft()
                if node:
                    rightmost_node = node
                    q.append(node.left)
                    q.append(node.right)
            
            if rightmost_node:
                res.append(rightmost_node.val)

        return res