// Given the root of a binary tree, return the postorder traversal of its nodes' values.

//  Constraints:

// The number of the nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

// Follow up: Recursive solution is trivial, could you do it iteratively?

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
 * @return {number[]}
 */
// TODO Recursive
// var postorderTraversal = function(root) {
//     if (!root)
//         return [];
//     return postorderTraversal(root.left).concat(postorderTraversal(root.right)).push(root.val);
// };

// TODO Iterative
const postorderTraversal = (root) => {
    let result = [];
    let stack = [];
    let curr = root;
    while (curr || stack.length > 0) {
        if (curr) {
            stack.push(curr);
            result.unshift(curr.val);
            curr = curr.right;
        }
        else curr = stack.pop().left;
    }
    return result;
};
