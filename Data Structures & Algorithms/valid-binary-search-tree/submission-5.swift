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
        func isValid(_ node: TreeNode?, _ min: Int?, _ max: Int?) -> Bool {
            guard let node else { return true }
            if let min, min >= node.val { return false }
            if let max, max <= node.val { return false }
            return isValid(node.left, min, node.val) && isValid(node.right, node.val, max)
        }
        return isValid(root, nil, nil)
    }
}
