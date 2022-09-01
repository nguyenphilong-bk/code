// TODO Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100

// Follow up: Could you solve it both recursively and iteratively?
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

// TODO: after thinking about this problem, so i decided to design an algorithm like this
// ? compare the in order traversal of the left and the right subtree :v right?
// ! the above idea is false cause whenever the left child and right child is equal, the in order traversal of the two sub node will be equal but the left child is not mirror? the right child
var isSymmetric = function (root) {
    return isSymmetricRec(root, root);
};

const isSymmetricRec = (root1, root2) => {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;
    return (
        root1.val === root2.val &&
        isSymmetricRec(root1.right, root2.left) &&
        isSymmetricRec(root1.left, root2.right)
    );
};
