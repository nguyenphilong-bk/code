function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    const stack = [];

    while (stack.length > 0 || root) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            const node = stack.pop();
            if (--k == 0) return node.val;
            root = node.right;
        }
    }
};
