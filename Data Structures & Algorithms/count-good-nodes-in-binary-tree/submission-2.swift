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
        func dfs(_ node: TreeNode?, _ prevMax: Int) -> Int {
            guard let node else { return 0 }

            var good: Int = if node.val >= prevMax { 1 } else { 0 }
            let newMax = max(prevMax, node.val)

            let leftCount = dfs(node.left, newMax)
            let rightCount = dfs(node.right, newMax)

            return good + leftCount + rightCount
        }

        return dfs(root, root.val)
    }
}
