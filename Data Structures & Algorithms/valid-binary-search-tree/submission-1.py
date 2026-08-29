class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def is_valid(node, min_value, max_value):
            if node is None:
                return True

            if node.val <= min_value or node.val >= max_value:
                return False

            left_is_valid = is_valid(
                node.left,
                min_value,
                node.val
            )

            right_is_valid = is_valid(
                node.right,
                node.val,
                max_value
            )

            return left_is_valid and right_is_valid

        return is_valid(root, float("-inf"), float("inf"))