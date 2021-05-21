function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const preOrderTraversal = (root) => {
    if (root === null) return [];
    let left = preOrderTraversal(root.left);
    let right = preOrderTraversal(root.right);
    return [root.val].concat(left).concat(right);
};

let a = new TreeNode(1);
let b = new TreeNode();
let c = new TreeNode(2);
let d = new TreeNode(3);
a.left = b;
a.right = c;
c.left = d;
console.log(preOrderTraversal(a));
