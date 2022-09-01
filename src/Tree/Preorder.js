// function TreeNode(val, left, right) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
// }

// TODO Recursive
// const preOrderTraversal = (root) => {
//     if (root === null) return [];
//     let left = preOrderTraversal(root.left);
//     let right = preOrderTraversal(root.right);
//     return [root.val].concat(left).concat(right);
// };

// TODO Iterative
const preOrderTraversal = (root) => {
    let stack = [];
    let result = [];
    let curr = root;
    while (stack.length > 0 || curr) {
        if (curr) {
            stack.push(curr);
            result.push(curr.val);
            curr = curr.left;
        } else curr = stack.pop().right;
    }
    return result;
};
