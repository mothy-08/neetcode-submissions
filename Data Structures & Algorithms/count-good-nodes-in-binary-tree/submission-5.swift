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
    func goodNodes(_ root: TreeNode?) -> Int {
        guard let root else { return 0 }
        func dfs(_ node: TreeNode?, _ val: Int) -> Int {
            guard let node else { return 0 }
            let countGood = if node.val >= val { 1 } else { 0 }
            let newVal = max(val, node.val)
            return countGood + dfs(node.left, newVal) + dfs(node.right, newVal)
        }
        return dfs(root, root.val)
    }
}
