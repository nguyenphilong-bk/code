// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// The number of nodes in the tree is in the range [0, 100].
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
// var inorderTraversal = function (root) {
//     if (!root) return [];
//     let left = inorderTraversal(root.left);
//     left.push(root.val)
//     let right = inorderTraversal(root.right);
//     return left.concat(right);
// };

    // TODO Iterative
    const inorderTraversal = root => {
        let stack = [];
        let result = [];
        let curr = root;
        while (curr || stack.length > 0) {
            if (curr) {
                stack.push(curr);
                curr = curr.left;
            }
            else {
                let temp = stack.pop();
                result.push(temp.val);
                curr = temp.right;
            }
        }
        return result;
    }

