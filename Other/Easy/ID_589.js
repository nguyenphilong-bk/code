// Definition for a Node.
function Node(val, children) {
    this.val = val;
    this.children = children;
}

/**
 * @param {Node|null} root
 * @return {number[]}
 */

const preorderRecursive = (root, result) => {
    if (!root) return;

    result.push(root.val);

    for (const child of root.children) preorderRecursive(child, result);

    return;
};

var preorder = function (root) {
    const result = new Array();

    preorderRec(root, result);
    return result;
};
