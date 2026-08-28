# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        def dfs(node, prev_max):
            if not node:
                return 0    

            is_good = node.val >= prev_max
            new_max = max(prev_max, node.val)

            left_count = dfs(node.left, new_max)
            right_count = dfs(node.right, new_max)

            return is_good + left_count + right_count
        
        return dfs(root, root.val)