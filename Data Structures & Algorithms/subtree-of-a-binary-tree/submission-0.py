# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:   
    def isSubtree(self, root: Optional[TreeNode], sub: Optional[TreeNode]) -> bool:
        if not sub:
            return True
        
        if not root:
            return False

        same = self.isSameTree(root, sub)        
        if same:
            return True

        left = self.isSubtree(root.left, sub)
        right = self.isSubtree(root.right, sub)
        
        return left or right

    def isSameTree(self, root, sub):
        if not root and not sub:
            return True 
        
        if root and sub and root.val == sub.val:
            left = self.isSameTree(root.left, sub.left)
            right = self.isSameTree(root.right, sub.right)

            return left and right
        
        return False