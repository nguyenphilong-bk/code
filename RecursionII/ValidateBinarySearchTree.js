// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1

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
 * @return {boolean}
 */
// TODO This is what I have been taught at University
// var isValidBST = function (root) {
//     if (!root) return true;
//     let leftChild = root.left;
//     let rightChild = root.right;
//     if (!isValidBST(leftChild)) return false;
//     if (!isValidBST(rightChild)) return false;
//     if (leftChild && root.val <= maxNode(leftChild).val) return false;
//     if (rightChild && root.val >= minNode(rightChild).val) return false;
//     return true;
// };

// const minNode = (root) => {
//     if (!root || !root.left) return root;
//     let temp = root;
//     while (temp.left) temp = temp.left;
//     return temp;
// };
// const maxNode = (root) => {
//     if (!root || !root.right) return root;
//     let temp = root;
//     while (temp.right) temp = temp.right;
//     return temp;
// };

class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
// TODO Better approach: Iterative
// * Main Idea: InOrder Traversal => and check so, time complexity will be O(n)
/**
 * @param {TreeNode} root
 * @return {[]number}
 */
const InOrderTraversal = (root) => {
    if (!root) return [];
    let result = [];
    let stack = [];
    let temp = root;
    while (temp || stack.length > 0) {
        while (temp) {
            stack.push(temp);
            temp = temp.left;
        }
        temp = stack.pop();
        result.push(temp.val);
        temp = temp.right;
    }
    return result;
};

const isValidBST = (root) => {
    if (!root) return true;
    let inOrder = InOrderTraversal(root);
    for (let i = 0; i < inOrder.length - 1; i++) {
        if (inOrder[i] >= inOrder[i + 1]) return false;
    }
    return true;
};

let a = new TreeNode(
    6,
    new TreeNode(4, new TreeNode(2, null, new TreeNode(3)), new TreeNode(5)),
    new TreeNode(8, new TreeNode(7), new TreeNode(9))
);
console.log(InOrderTraversal(a));
console.log(isValidBST(a));
