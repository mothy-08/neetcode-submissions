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
        guard let root else { return [] }

        var res: [[Int]] = []
        var q: [TreeNode] = [root]


        var idx: Int = 0

        while idx < q.count {      
            var nodeVals: [Int] = []
            let size: Int = q.count - idx
            for _ in 0..<size {
                let node = q[idx]
                idx += 1

                nodeVals.append(node.val)

                if let left = node.left {
                    q.append(left)
                }

                if let right = node.right {
                    q.append(right)
                }
            }

            if !nodeVals.isEmpty {
                res.append(nodeVals)
            }
        }

        return res
    }
}
