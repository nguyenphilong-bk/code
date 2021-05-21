class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

const maxDepth = (root) => {
    if (!root) return 0;
    let leftHeight = maxDepth(root.left) + 1;
    let rightHeight = maxDepth(root.right) + 1;
    return Math.max(leftHeight, rightHeight);
};

a = new TreeNode(0);
b = new TreeNode(1);
c = new TreeNode(2);
d = new TreeNode(3);
a.left = b;
a.right = c;
b.left = d;
console.log(maxDepth(a));
