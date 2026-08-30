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
    func levelOrder(_ root: TreeNode?) -> [[Int]] {
        var res: [[Int]] = []
        
        func dfs(_ node: TreeNode?, _ depth: Int) -> Void {
            guard let node else { return }

            if res.count == depth {
                res.append([])
            }

            res[depth].append(node.val)

            dfs(node.left, depth + 1)
            dfs(node.right, depth + 1)
        }

        dfs(root, 0)
        return res
    }
}
