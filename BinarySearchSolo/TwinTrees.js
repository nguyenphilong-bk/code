/**
 * class Tree {
 *   constructor(val, left=null, right=null) {
 *     this.val = val
 *     this.left = left
 *     this.right = right
 *   }
 * }
 */
class Solution {
    solve(root0, root1) {
        if (!root0 && !root1) return true;
        if (root0 && !root1) return false;
        if (root1 && !root0) return false;

        return (
            root0.val === root1.val &&
            this.solve(root0.left, root1.left) &&
            this.solve(root0.right, root1.right)
        );
    }
}
