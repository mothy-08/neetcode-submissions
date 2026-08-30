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
    func rightSideView(_ root: TreeNode?) -> [Int] {
        guard let root else { return [] }

        var res: [Int] = []
        var q: [TreeNode] = [root]
        var idx = 0
        
        while idx < q.count {
            let size = q.count - idx
            var rightmostNode: TreeNode?
            for _ in 1...size {
                let node = q[idx]
                idx += 1

                rightmostNode = node

                if let left = node.left { q.append(left) }
                if let right = node.right { q.append(right) }
            }
            if let rightmostNode { res.append(rightmostNode.val) }
        }

        return res
    }
}
