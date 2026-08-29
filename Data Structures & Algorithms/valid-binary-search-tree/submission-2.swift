/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     var val: Int
 *     var left: TreeNode?
 *     var right: TreeNode?
 *     init(_ val: Int) {
 *         self.val = val
 *         self.left = nil
 *         self.right = nil
 *     }
 * }
 */

class Solution {
    func isValidBST(_ root: TreeNode?) -> Bool {
        guard let root else { return true }
        func isValid(_ node: TreeNode?, _ minVal: Int, _ maxVal: Int) -> Bool  {
            guard let node else { return true } 

            if node.val <= minVal || node.val >= maxVal {
                return false
            }

            let leftIsValid = isValid(node.left, minVal, node.val)
            let rightIsValid = isValid(node.right, node.val, maxVal)

            return leftIsValid && rightIsValid
        }

        return isValid(root, Int.min, Int.max)
    }
}
