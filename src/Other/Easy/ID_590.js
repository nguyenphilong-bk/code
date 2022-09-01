function Node(val, children) {
    this.val = val;
    this.children = children;
}

const postorderRecursive = (root, result) => {
    if (!root) return;

    for (const child of root.children) postorderRecursive(child, result);

    result.push(root.val);

    return;
};

var postorder = function (root) {
    const result = new Array();
    postorderRecursive(root, result);

    return result;
};
