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
        var q: Deque<TreeNode> = [root]

        while q.count > 0 {
            let qSize = q.count
            for i in 1...qSize {
                let node = q.popFirst()
                let unwrappedNode = node!

                if i == qSize {
                    res.append(unwrappedNode.val)
                }
                
                if let leftNode = unwrappedNode.left {
                    q.append(leftNode)
                }
                if let rightNode = unwrappedNode.right {
                    q.append(rightNode)
                }
            }
        }

        return res
    }
}
