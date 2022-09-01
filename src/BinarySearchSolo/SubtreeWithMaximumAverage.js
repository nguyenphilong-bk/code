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
    solveRec(root) {
        if (!root) return [0, 0];
        if (!root.left && !root.right) return [root.val, 1];

        let leftAverage = this.solveRec(root.left);
        let rightAverage = this.solveRec(root.right);
        let thisAverage =
            (leftAverage[0] * leftAverage[1] +
                rightAverage[0] * rightAverage[1] +
                root.val) /
            (leftAverage[1] + rightAverage[1] + 1);

        if (thisAverage > leftAverage[0] && thisAverage > rightAverage[0])
            return [thisAverage, leftAverage[1] + rightAverage[1] + 1];
        if (leftAverage[0] > rightAverage[0]) return leftAverage;
        return rightAverage;
    }
    solve(root) {
        return this.solveRec(root)[0];
    }
}
