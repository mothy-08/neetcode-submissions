/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, sub) {
        if (!sub) {
            return true;
        } 

        if (!root) {
            return false;
        }

        const same = this.isSame(root, sub);
        if (same) {
            return true;
        }

        const left = this.isSubtree(root.left, sub);
        const right = this.isSubtree(root.right, sub);

        return left || right;
    }

    isSame(root, sub) {
        if (!root && !sub) {
            return true;
        }

        if (root && sub && root.val === sub.val) {
            const left = this.isSame(root.left, sub.left);
            const right = this.isSame(root.right, sub.right);

            return left && right;
        }

        return false;
    }
}
