class Solution {
    func isValidBST(_ root: TreeNode?) -> Bool {
        func isValid(
            _ node: TreeNode?,
            _ minVal: Int?,
            _ maxVal: Int?
        ) -> Bool {
            guard let node else { return true }

            if let minVal, node.val <= minVal {
                return false
            }

            if let maxVal, node.val >= maxVal {
                return false
            }

            return isValid(node.left, minVal, node.val)
                && isValid(node.right, node.val, maxVal)
        }

        return isValid(root, nil, nil)
    }
}