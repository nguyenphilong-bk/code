// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

let root = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

var levelOrder = function (root) {
    if (!root) return [];
    let queue = [root];
    let result = [];
    while (queue.length > 0) {
        let size = queue.length;
        let tempResult = [];
        for (let i = 0; i < size; i++) {
            let temp = queue.shift();
            tempResult.push(temp.val);
            if (temp.left) queue.push(temp.left);
            if (temp.right) queue.push(temp.right);
        }
        result.push(tempResult);
    }
    return result;
};
