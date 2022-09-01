class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

const searchBST = (root, val) => {
    if (!root || root.val === val) return root;
    else if (root.val < val) return searchBST(root.right, val);
    else if (root.val > val) return searchBST(root.left, val);
};

let a = new TreeNode(4);
let b = new TreeNode(2);
let c = new TreeNode(1);
let d = new TreeNode(3);
let e = new TreeNode(7);
a.left = b;
a.right = e;
b.left = c;
b.right = d;

console.log(searchBST(a, 2));
